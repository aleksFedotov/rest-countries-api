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
    console.log('click');
    setIsDroped((prevState) => !prevState);
  };

  const regionSearchHandler = (e) => {
    const region = e.target.innerText;
    if (region === 'All world') {
      dispatch(getCountries('All'));
      return;
    }
    dispatch(getCountries(region, true));
  };

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
          <li onClick={regionSearchHandler}>All world</li>
          <li onClick={regionSearchHandler}>Africa</li>
          <li onClick={regionSearchHandler}>Asia</li>
          <li onClick={regionSearchHandler}>Europe</li>
          <li onClick={regionSearchHandler}>Oceania</li>
          <li onClick={regionSearchHandler}>Americas</li>
        </ul>
      </Card>
    </div>
  );
};

export default Regions;
