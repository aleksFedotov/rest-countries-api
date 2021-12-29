import React, { useState } from 'react';
import Card from '../../UI/card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { countriesActions } from '../../../store';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import styles from './Regions.module.css';

const Regions = () => {
  const dispatch = useDispatch();
  const region = useSelector((state) => state.countries.filterStatus);
  const [isDroped, setIsDroped] = useState(false);

  const dropHandler = () => {
    setIsDroped((prevState) => !prevState);
  };

  // filter found countries by reegion

  const filterHandler = (e) => {
    dispatch(countriesActions.setFilter(e.target.innerText));
    setIsDroped((prevState) => !prevState);
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
          <li
            className={`${styles.option} ${
              region === 'All world' && styles.selected
            }`}
            onClick={filterHandler}
          >
            <span>All world</span>
          </li>
          <li
            className={`${styles.option} ${
              region === 'Africa' && styles.selected
            }`}
            onClick={filterHandler}
          >
            <span>Africa</span>
          </li>
          <li
            className={`${styles.option} ${
              region === 'Asia' && styles.selected
            }`}
            onClick={filterHandler}
          >
            <span>Asia</span>
          </li>
          <li
            className={`${styles.option} ${
              region === 'Europe' && styles.selected
            }`}
            onClick={filterHandler}
          >
            <span>Europe</span>
          </li>
          <li
            className={`${styles.option} ${
              region === 'Oceania' && styles.selected
            }`}
            onClick={filterHandler}
          >
            <span>Oceania</span>
          </li>
          <li
            className={`${styles.option} ${
              region === 'America' && styles.selected
            }`}
            onClick={filterHandler}
          >
            <span>America</span>
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default Regions;
