import { useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getAll, getAllCocktail } from "../../store/reducers/initReducer";
import styles from "./index.module.scss";

const DrinksPage = () => {
  const dispatch = useAppDispatch();
  const cocktails = useAppSelector(getAll);

  useEffect(() => {
    !cocktails.length && dispatch(getAllCocktail());
  }, []);

  return (
    <section className={styles.cardDrinkWrapper}>
      {cocktails.map((cocktail, index) => (
        <Card
          initial={{ translateX: -30, translateY: -30, opacity: 0 }}
          animate={{ translateX: 0, translateY: 0, opacity: 1 }}
          transition={{ duration: 0.1 * index }}
          className={`${styles.cardDrink}`}
          key={`${cocktail.drinkInfo.idDrink}-${index}`}
        >
          <>
            <div className={`${styles.heart} dark:bg-gray-800`}>
              <AiOutlineHeart className={`${styles.heartIcons} dark:hover:text-gray-300 `} size={25}></AiOutlineHeart>
            </div>
            <Link to={`/drink/${cocktail.drinkInfo.idDrink}`}>
              <img loading="lazy" className={styles.cardImage} src={cocktail.drinkInfo.strDrinkThumb} alt={cocktail.drinkInfo.strDrink} />
            </Link>
            <div className={styles.cardInfo}>
              <h4>{cocktail.drinkInfo.strDrink}</h4>
            </div>
          </>
        </Card>
      ))}
    </section>
  );
};

export default DrinksPage;
