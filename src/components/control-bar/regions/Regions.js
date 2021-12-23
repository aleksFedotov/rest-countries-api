import React, { useState } from 'react';
import Card from '../../UI/card/Card';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import styles from './Regions.module.css';

const Regions = () => {
  const [isDroped, setIsDroped] = useState(false);

  const dropHandler = () => {
    console.log('click');
    setIsDroped((prevState) => !prevState);
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
          <li>Africa</li>
          <li>America</li>
          <li>Asia</li>
          <li>Europe</li>
          <li>Oceania</li>
        </ul>
      </Card>
    </div>
  );
};

export default Regions;
