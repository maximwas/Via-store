import React from "react";
import Search from "../Search";
import styles from "./index.module.scss";

const Header = () => {
  return (
    <nav className={`${styles.header} dark:bg-gray-900`}>
      <div className={styles.headerWrapper}>
        <a href="https://flowbite.com/" className={styles.logoLink}>
          <img src="https://flowbite.com/docs/images/logo.svg" className={styles.logoImg} alt="Flowbite Logo" />
          <span className={`${styles.logoText} dark:text-white`}>Flowbite</span>
        </a>
        <div className={styles.navbar}>
          <ul className={`${styles.navbarList} dark:bg-gray-800`}>
            <li>
              <a href="#" className={`${styles.navbarLink} dark:text-gray-400 dark:hover:text-white`}>
                Home
              </a>
            </li>
            <li>
              <a href="#" className={`${styles.navbarLink} dark:text-gray-400 dark:hover:text-white`}>
                About
              </a>
            </li>
            <li>
              <a href="#" className={`${styles.navbarLink} dark:text-gray-400 dark:hover:text-white`}>
                Services
              </a>
            </li>
            <li>
              <a href="#" className={`${styles.navbarLink} dark:text-gray-400 dark:hover:text-white`}>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <Search></Search>
      </div>
    </nav>
  );
};

export default Header;
