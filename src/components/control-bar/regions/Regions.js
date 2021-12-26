import React, { useState } from 'react';
import Card from '../../UI/card/Card';
import { useDispatch } from 'react-redux';
import { getCountries } from '../../../store';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import styles from './Regions.module.css';

const Regions = () => {
  const dispatch = useDispatch();
  const [isDroped, setIsDroped] = useState(false);

  const dropHandler = () => {
    setIsDroped((prevState) => !prevState);
  };

  // Sending request after choosing region + extra option (All world)

  const regionSearchHandler = (e) => {
    const region = e.target.innerText;
    e.target.className = styles.selected;

    if (region === 'All world') {
      dispatch(getCountries('All'));
      return;
    }

    dispatch(getCountries(region, true));
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
          <li className={styles.option} onClick={regionSearchHandler}>
            All world
          </li>
          <li className={styles.option} onClick={regionSearchHandler}>
            Africa
          </li>
          <li className={styles.option} onClick={regionSearchHandler}>
            Asia
          </li>
          <li className={styles.option} onClick={regionSearchHandler}>
            Europe
          </li>
          <li className={styles.option} onClick={regionSearchHandler}>
            Oceania
          </li>
          <li className={styles.option} onClick={regionSearchHandler}>
            Americas
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default Regions;
