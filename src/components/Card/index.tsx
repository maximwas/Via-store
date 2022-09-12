import { FC, memo, forwardRef } from "react";
import styles from "./index.module.scss";
import { motion } from "framer-motion";

interface CardProps {
  className?: string;
  children?: JSX.Element | JSX.Element[];
}

const Card = forwardRef<HTMLElement, CardProps>(({ className, children }, ref) => {
  return (
    <article ref={ref} className={`${styles.card} ${className} dark:bg-gray-800 dark:border-gray-700`}>
      {children}
    </article>
  );
});

export default motion(memo(Card));
