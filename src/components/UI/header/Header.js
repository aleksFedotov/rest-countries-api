import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { countriesActions } from '../../../store';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-regular-svg-icons';
import { faMoon } from '@fortawesome/free-regular-svg-icons';

import styles from './Header.module.css';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLigthTheme, setIsLigthTheme] = useState(true);

  const clickHandler = () => {
    dispatch(countriesActions.setLoading());
    navigate('/');
  };

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
        <h1 className={styles.logo} onClick={clickHandler}>
          Where in the world?
        </h1>
        <div className={styles['theme-switcher']} onClick={themeSwithcHandler}>
          <FontAwesomeIcon icon={isLigthTheme ? faMoon : faSun} />
          <p>{isLigthTheme ? 'Dark Mode' : 'Ligth Mode'}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
