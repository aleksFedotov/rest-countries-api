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
        <h3 className={styles.country_name}>{name}</h3>
        <h2 className={styles.country_text}>
          Population: <span>{population.toLocaleString('en-US')}</span>
        </h2>
        <h2 className={styles.country_text}>
          Region: <span>{region}</span>
        </h2>
        <h2 className={styles.country_text}>
          Capital: <span>{capital}</span>
        </h2>
      </div>
    </Card>
  );
};

export default CountryCard;
