import { FC, memo } from "react";
import styles from "./index.module.scss"

interface CardProps {
  className?: string,
  children?: JSX.Element
}

const Card = memo(({ className, children }: CardProps) => {
  return (
    <article className={`${styles.card} ${className} dark:bg-gray-800 dark:border-gray-700`}>
      { children }
    </article>
  );
})

export default Card;
