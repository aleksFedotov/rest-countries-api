import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-regular-svg-icons';
import { faMoon } from '@fortawesome/free-regular-svg-icons';

import styles from './Header.module.css';

const Header = () => {
  const [isLigthTheme, setIsLigthTheme] = useState(true);

  const themeSwithcHandler = (event) => {
    const root = document.querySelector(':root');
    setIsLigthTheme((prevState) => !prevState);
    if (isLigthTheme) {
      root.className = 'dark-theme';
    } else {
      root.className = 'light-theme';
    }
  };
  return (
    <header className={styles.header}>
      <div className={styles.header_box}>
        <h1 className={styles.logo}>Where in the world?</h1>
        <div className={styles['theme-switcher']} onClick={themeSwithcHandler}>
          <FontAwesomeIcon icon={isLigthTheme ? faMoon : faSun} />
          <p>{isLigthTheme ? 'Dark Mode' : 'Ligth Mode'}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
