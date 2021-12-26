import React from 'react';
import { useNavigate } from 'react-router-dom';

import Card from '../../UI/card/Card';

import styles from './CountryCard.module.css';

const CountryCard = (props) => {
  const navigate = useNavigate();
  const { flagURL, name, population, region, capital } = props;

  const countryDetailHandler = () => {
    navigate(`/country/${name}`);
  };

  return (
    <Card className={styles.country} onClick={countryDetailHandler}>
      <div className={styles.flag_box}>
        <img src={flagURL} alt="flag" />
      </div>
      <div className={styles.country_info}>
        <h2 className={styles.country_name}>{name}</h2>
        <h3 className={styles.country_text}>
          Population: <span>{population.toLocaleString('en-US')}</span>
        </h3>
        <h3 className={styles.country_text}>
          Region: <span>{region}</span>
        </h3>
        <h3 className={styles.country_text}>
          Capital: <span>{capital}</span>
        </h3>
      </div>
    </Card>
  );
};

export default CountryCard;
