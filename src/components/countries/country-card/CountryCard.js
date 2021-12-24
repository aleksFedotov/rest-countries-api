import React from 'react';

import Card from '../../UI/card/Card';

import styles from './CountryCard.module.css';

const CountryCard = (props) => {
  const { flagURL, name, population, region, capital } = props;
  return (
    <Card className={styles.country}>
      <div className={styles.flag_box}>
        <img src={flagURL} alt="flag" />
      </div>
      <div className={styles.country_info}>
        <h2 className={styles.country_name}>{name}</h2>
        <p className={styles.country_text}>
          Population: <span>{population.toLocaleString('en-US')}</span>
        </p>
        <p className={styles.country_text}>
          Region: <span>{region}</span>
        </p>
        <p className={styles.country_text}>
          Capital: <span>{capital}</span>
        </p>
      </div>
    </Card>
  );
};

export default CountryCard;
