import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../../components/Card/index";
import { Ingredients } from "../../interfaces/drink";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { clearCurrentDrink, getById, getCurrentDrink } from "../../store/reducers/initReducer";
import styles from "./index.module.scss";

const DrinkPage = () => {
  const { drinkId } = useParams();
  const dispatch = useAppDispatch();
  const drink = useAppSelector(getCurrentDrink);

  useEffect(() => {
    dispatch(getById(drinkId as string));

    return () => {
      dispatch(clearCurrentDrink());
    };
  }, []);

  return (
    <div className={styles.drinkWrapper}>
      <Link to="/drink">Prev</Link>
      <div className={styles.image}>
        <img className={styles.imagesDrink} src={drink?.drinkInfo?.strDrinkThumb} alt={drink?.drinkInfo?.strDrink} />
      </div>
      <div className={styles.drinkInfo}>
        <h2>{drink?.drinkInfo?.strDrink}</h2>
        <Card className={styles.cardDescription}>
          <p className={`${styles.cardTextDescription} dark:text-gray-300`}>{drink?.instructions?.strInstruction}</p>
        </Card>

        <Card className={styles.cardIngredient}>
          {drink?.ingredients?.map((ingredient: Ingredients) => (
            <div key={ingredient.strIngredient} className="flex gap-4">
              <p>{ingredient.strIngredient}</p>
              <p>{ingredient.strMeasure}</p>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
};

export default DrinkPage;
