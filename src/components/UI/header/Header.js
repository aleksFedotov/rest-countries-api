import React, { useState } from 'react';

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
          <i class={isLigthTheme ? 'far fa-moon' : 'fas fa-sun'}></i>
          <p>{isLigthTheme ? 'Dark Mode' : 'Ligth Mode'}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
