import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BsSearch } from "react-icons/bs";
import { Drink } from "../../interfaces/drink";
import ErrorsTextHandler from "../ErrorsTextHandler";
import styles from "./index.module.scss";

interface Search {
  search: string;
}

function Search() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [blur, setBlur] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Search>();

  const searchCocktail = (data: Search) => {
    console.log(data);
  };

  const searchToggleBlur = () => {
    setBlur((prev) => !prev);
  };

  useEffect(() => {
    const subscription = watch((value) => setSearchValue(value.search as string));
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <div className={styles.formWrapper}>
      <form className={styles.formSearch} onSubmit={handleSubmit(searchCocktail)}>
        <ErrorsTextHandler message={errors.search?.message}>
          <input
            onFocus={searchToggleBlur}
            className={`${styles.inputSearch} dark:text-white dark:bg-gray-800 dark:focus:border-white`}
            type="text"
            {...register("search", { required: "This field is empty", onBlur: searchToggleBlur })}
          ></input>
        </ErrorsTextHandler>
        <button className={`${styles.buttonSearch} dark:text-gray-800 dark:bg-white`}>Search</button>

        {<SearchResultDropdown open={Boolean(searchValue && blur)} value={searchValue}></SearchResultDropdown>}
      </form>
    </div>
  );
}

interface SearchResultDropdownProps {
  value: string;
  open: boolean;
}

const SearchResultDropdown: FC<SearchResultDropdownProps> = ({ value = "", open = false }) => {
  const [searchResult, setSearchResult] = useState<Drink[]>([]);

  useEffect(() => {
    (async () => {
      if (value) {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`);
        const data = await response.json();
        setSearchResult(data.drinks);
      }
    })();
  }, [value]);

  if (!open) return null;

  return (
    <div className={styles.searchResultDropdown}>
      <ul className={styles.listSearchResultDropdown}>
        {searchResult?.map(({ strDrink, idDrink }: Drink) => (
          <li key={idDrink} className={styles.listItemSearchResultDropdown}>
            <BsSearch className={styles.listIconItemSearchResultDropdown}></BsSearch>
            {strDrink}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
