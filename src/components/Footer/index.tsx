import React from "react";
import styles from "./index.module.scss";
import stylesGlobal from "../global.module.scss";

const Footer = () => {
  return (
    <footer className={`${styles.footer} dark:bg-gradient-to-r from-gray-800 to-gray-900 dark:border-t dark:border-gray-700`}>
      <section className={styles.footerWrapper}>
        <a href="https://flowbite.com/" className={stylesGlobal.logoLink}>
          <img src="https://flowbite.com/docs/images/logo.svg" className={stylesGlobal.logoImg} alt="Flowbite Logo" />
          <span className={`${stylesGlobal.logoText} dark:text-gray-300`}>Flowbite</span>
        </a>
        <span className="block text-sm text-gray-900 sm:text-center dark:text-gray-300">
          © 2022{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Flowbite™
          </a>
          . All Rights Reserved.
        </span>
        <nav>
          <ul className={`${styles.navbar} dark:text-gray-400 dark:bg-gray-800`}>
            <li className={styles.navbarItem}>
              <a href="#" className={`${styles.navbarLink} dark:hover:text-gray-300`}>
                About
              </a>
            </li>
            <li className={styles.navbarItem}>
              <a href="#" className={`${styles.navbarLink} dark:hover:text-gray-300`}>
                Privacy Policy
              </a>
            </li>
            <li className={styles.navbarItem}>
              <a href="#" className={`${styles.navbarLink} dark:hover:text-gray-300`}>
                Licensing
              </a>
            </li>
            <li className={styles.navbarItem}>
              <a href="#" className={`${styles.navbarLink} dark:hover:text-gray-300`}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </footer>
  );
};

export default Footer;
