import React, { useState } from 'react';
import Card from '../../UI/card/Card';

import styles from './Regions.module.css';

const Regions = () => {
  const [isDroped, setIsDroped] = useState(false);

  const dropHandler = () => {
    setIsDroped((prevState) => !prevState);
  };
  return (
    <div className={styles.filter_box}>
      <Card className={styles.filter}>
        <p>Filter by Region</p>
        <i
          class="fas fa-chevron-down"
          className={isDroped ? styles.up : styles.down}
          onClick={dropHandler}
        ></i>
      </Card>
      <Card className={styles.options}>
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
