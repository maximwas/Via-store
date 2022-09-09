import React from "react";
import styles from "./index.module.scss";
import Card from "../../components/Card/index";

const DrinkPage = () => {
  return (
    <div className={styles.drinkWrapper}>
      <div className={styles.image}>
        <img className={styles.imagesDrink} src="https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg" alt="asd" />
      </div>
      <div className={styles.drinkInfo}>
        <h2>Margarita</h2>
        <Card className={styles.cardDescription}>
          <p className={`${styles.cardTextDescription} dark:text-gray-300`}>
            Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the
            imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default DrinkPage;
