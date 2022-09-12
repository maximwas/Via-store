import React, { useRef, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import Search from "../Search";
import styles from "./index.module.scss";
import stylesGlobal from "../global.module.scss";
import { Link } from "react-router-dom";

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
        <a href="https://flowbite.com/" className={stylesGlobal.logoLink}>
          <img src="https://flowbite.com/docs/images/logo.svg" className={stylesGlobal.logoImg} alt="Flowbite Logo" />
          <span className={`${stylesGlobal.logoText} dark:text-gray-300`}>Flowbite</span>
        </a>
        <nav className={styles.navbar}>
          <ul className={`${styles.navbarList} dark:bg-gray-800`}>
            <li>
              <Link to="/" className={`${styles.navbarLink} dark:text-gray-400 dark:hover:text-gray-300`}>
                Home
              </Link>
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
