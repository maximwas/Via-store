import React from "react";
import Card from "../../components/Card";
import styles from "./index.module.scss";
import { AiOutlineHeart } from "react-icons/ai";

const ListCardDrinkPage = () => {
  return (
    <div className={styles.listCardDrinkPage}>
      <section className={styles.cardDrinkWrapper}>
        <Card className={`${styles.cardDrink}`}>
          <>
            <div className={`${styles.heart} dark:bg-gray-800`}>
              <AiOutlineHeart className={`${styles.heartIcons} dark:hover:text-gray-300 `} size={25}></AiOutlineHeart>
            </div>
            <img className={styles.cardImage} src="https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg" alt="asd" />
            <div className={styles.cardInfo}>
              <h4>Margarita</h4>
            </div>
          </>
        </Card>

        <Card className={`${styles.cardDrink}`}>
          <>
            <div className={`${styles.heart} dark:bg-gray-800`}>
              <AiOutlineHeart className={`${styles.heartIcons} dark:hover:text-gray-300 `} size={25}></AiOutlineHeart>
            </div>
            <img className={styles.cardImage} src="https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg" alt="asd" />
            <div className={styles.cardInfo}>
              <h4>Margarita</h4>
            </div>
          </>
        </Card>

        <Card className={`${styles.cardDrink}`}>
          <>
            <div className={`${styles.heart} dark:bg-gray-800`}>
              <AiOutlineHeart className={`${styles.heartIcons} dark:hover:text-gray-300 `} size={25}></AiOutlineHeart>
            </div>
            <img className={styles.cardImage} src="https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg" alt="asd" />
            <div className={styles.cardInfo}>
              <h4>Margarita</h4>
            </div>
          </>
        </Card>

        <Card className={`${styles.cardDrink}`}>
          <>
            <div className={`${styles.heart} dark:bg-gray-800`}>
              <AiOutlineHeart className={`${styles.heartIcons} dark:hover:text-gray-300 `} size={25}></AiOutlineHeart>
            </div>
            <img className={styles.cardImage} src="https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg" alt="asd" />
            <div className={styles.cardInfo}>
              <h4>Margarita</h4>
            </div>
          </>
        </Card>

        <Card className={`${styles.cardDrink}`}>
          <>
            <div className={`${styles.heart} dark:bg-gray-800`}>
              <AiOutlineHeart className={`${styles.heartIcons} dark:hover:text-gray-300 `} size={25}></AiOutlineHeart>
            </div>
            <img className={styles.cardImage} src="https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg" alt="asd" />
            <div className={styles.cardInfo}>
              <h4>Margarita</h4>
            </div>
          </>
        </Card>
      </section>
    </div>
  );
};

export default ListCardDrinkPage;
