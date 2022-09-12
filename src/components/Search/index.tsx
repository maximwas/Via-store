import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Drink } from "../../interfaces/drink";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getSearch, searchByName } from "../../store/reducers/initReducer";
import ErrorsTextHandler from "../ErrorsTextHandler";
import styles from "./index.module.scss";
import ClickAwayListener from "react-click-away-listener";

interface Search {
  search: string;
}

function Search() {
  const [searchValue, setSearchValue] = useState<string>("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Search>();

  const searchCocktail = (data: Search) => {
    console.log(data);
  };

  useEffect(() => {
    const subscription = watch((value) => setSearchValue(value.search as string));
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <aside className={styles.formWrapper}>
      <form className={styles.formSearch} onSubmit={handleSubmit(searchCocktail)}>
        <ErrorsTextHandler message={errors.search?.message}>
          <input
            className={`${styles.inputSearch} dark:text-gray-300 dark:bg-gray-800 dark:border-none`}
            type="text"
            {...register("search", { required: "This field is empty" })}
          ></input>
        </ErrorsTextHandler>
        <button className={`${styles.buttonSearch} dark:text-gray-300 dark:bg-gray-800 dark:hover:text-white`}>Search</button>

        {<SearchResultDropdown open={Boolean(searchValue)} value={searchValue}></SearchResultDropdown>}
      </form>
    </aside>
  );
}

interface SearchResultDropdownProps {
  value: string;
  open: boolean;
}

const SearchResultDropdown: FC<SearchResultDropdownProps> = ({ value = "", open = false }) => {
  const [close, setClose] = useState<boolean>(false);
  const searchResult = useAppSelector(getSearch);
  const dispatch = useAppDispatch();

  useEffect(() => {
    value && dispatch(searchByName(value));
    setClose(false);
  }, [value]);

  const closeDropdown = () => {
    setClose(true);
  };

  if (!open || close) return null;

  return (
    <ClickAwayListener onClickAway={closeDropdown}>
      <div className={styles.searchResultDropdown}>
        <ul className={styles.listSearchResultDropdown}>
          {searchResult?.map((search: Drink) => (
            <li key={search.drinkInfo.idDrink}>
              <Link onClick={closeDropdown} to={`/drink/${search.drinkInfo.idDrink}`} className={styles.listItemSearchResultDropdown}>
                <BsSearch className={styles.listIconItemSearchResultDropdown}></BsSearch>
                {search.drinkInfo.strDrink}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </ClickAwayListener>
  );
};

export default Search;
