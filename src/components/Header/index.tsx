import React, { useRef, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import Search from "../Search";
import styles from "./index.module.scss";

const Header = () => {
  const [isDarkMode, setDarkMode] = useState<boolean>(false);
  const html = useRef(document.querySelector("html"));

  const toggleDarkMode = (checked: boolean) => {
    html.current?.classList.remove(checked ? "light" : "dark");
    html.current?.classList.add(checked ? "dark" : "light");
    setDarkMode(checked);
  };

  return (
    <header className={`${styles.header} dark:bg-gradient-to-r from-gray-800 to-gray-900 dark:border-b dark:border-gray-700`}>
      <div className={styles.headerWrapper}>
        <a href="https://flowbite.com/" className={styles.logoLink}>
          <img src="https://flowbite.com/docs/images/logo.svg" className={styles.logoImg} alt="Flowbite Logo" />
          <span className={`${styles.logoText} dark:text-gray-300`}>Flowbite</span>
        </a>
        <nav className={styles.navbar}>
          <ul className={`${styles.navbarList} dark:bg-gray-800`}>
            <li>
              <a href="#" className={`${styles.navbarLink} dark:text-gray-400 dark:hover:text-gray-300`}>
                Home
              </a>
            </li>
            <li>
              <a href="#" className={`${styles.navbarLink} dark:text-gray-400 dark:hover:text-gray-300`}>
                About
              </a>
            </li>
            <li>
              <a href="#" className={`${styles.navbarLink} dark:text-gray-400 dark:hover:text-gray-300`}>
                Services
              </a>
            </li>
            <li>
              <a href="#" className={`${styles.navbarLink} dark:text-gray-400 dark:hover:text-gray-300`}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex">
          <Search></Search>
          <DarkModeSwitch className="ml-5" checked={isDarkMode} onChange={toggleDarkMode} size={36} />
        </div>
      </div>
    </header>
  );
};

export default Header;
