import React, { useState } from 'react';
import Card from '../../UI/card/Card';
import { useDispatch } from 'react-redux';
import { countriesActions } from '../../../store';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import styles from './Regions.module.css';

const Regions = () => {
  const dispatch = useDispatch();
  const [isDroped, setIsDroped] = useState(false);

  const dropHandler = () => {
    setIsDroped((prevState) => !prevState);
  };

  // filter found countries by reegion

  const filterHandler = (e) => {
    dispatch(countriesActions.setFilter(e.target.innerText));
  };

  // Styling chevron based on state of dropmenu

  const chevronClass = isDroped ? styles.up : styles.down;

  return (
    <div className={styles.filter_box}>
      <Card className={styles.filter}>
        <p onClick={dropHandler}>Filter by Region</p>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`${styles.chevron} ${chevronClass}`}
          onClick={dropHandler}
        />
      </Card>
      <Card className={`${styles.options} ${isDroped ? styles.droped : ''}`}>
        <ul>
          <li className={styles.option} onClick={filterHandler}>
            All world
          </li>
          <li className={styles.option} onClick={filterHandler}>
            Africa
          </li>
          <li className={styles.option} onClick={filterHandler}>
            Asia
          </li>
          <li className={styles.option} onClick={filterHandler}>
            Europe
          </li>
          <li className={styles.option} onClick={filterHandler}>
            Oceania
          </li>
          <li className={styles.option} onClick={filterHandler}>
            America
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default Regions;
