import React from 'react';
import Card from '../UI/card/Card';

import { useNavigate } from 'react-router-dom';

import styles from './Country.module.css';

import { countryListAlpha3 } from '../../utils/countryCodes';

const Country = (props) => {
  const {
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
    flags,
  } = props.country;

  const navigate = useNavigate();

  const countyDetailHandler = (e) => {
    navigate(`/country/${e.target.innerText}`);
  };

  let borderCountries = <span>none</span>;
  if (borders) {
    borderCountries = borders.map((border) => (
      <Card className={styles.border} key={border}>
        <span onClick={countyDetailHandler}>{countryListAlpha3[border]}</span>
      </Card>
    ));
  }

  let countryCurrencies = <span>none</span>;
  if (currencies) {
    const loadedCurrencies = Object.values(currencies);
    countryCurrencies = loadedCurrencies.map((currencie, ind) =>
      ind !== loadedCurrencies.length - 1 ? (
        <span key={currencie.name}>{currencie.name}, </span>
      ) : (
        <span key={currencie.name}>{currencie.name}</span>
      )
    );
  }

  let countryLanguages = <span>none</span>;
  if (languages) {
    const loadedLanguages = Object.values(languages);
    countryLanguages = loadedLanguages.map((language, ind) =>
      ind !== loadedLanguages.length - 1 ? (
        <span key={language}>{language}, </span>
      ) : (
        <span key={language}>{language}</span>
      )
    );
  }

  let countryNativeNames;
  if (name.nativeName) {
    const loadedNames = Object.values(name.nativeName);
    countryNativeNames = loadedNames.map((name, ind) =>
      ind !== loadedNames.length - 1 ? (
        <span key={name.common}>{name.common}, </span>
      ) : (
        <span key={name.common}>{name.common}</span>
      )
    );
  }

  return (
    <section className={styles.country}>
      <div className={styles['img-box']}>
        <img src={flags.png} alt="flag" />
      </div>
      <div className={styles['info-box']}>
        <h2 className={styles.name}>{name.common}</h2>
        <div className={styles['info-details']}>
          <div>
            <h3 className={styles.detail_text}>
              Native Name: <span>{countryNativeNames}</span>
            </h3>
            <h3 className={styles.detail_text}>
              Population: <span>{population.toLocaleString('en-US')}</span>
            </h3>
            <h3 className={styles.detail_text}>
              Region: <span>{region}</span>
            </h3>
            <h3 className={styles.detail_text}>
              Sub Region: <span>{subregion}</span>
            </h3>
            <h3 className={styles.detail_text}>
              Capital: <span>{capital ? capital : 'none'}</span>
            </h3>
          </div>
          <div>
            <h3 className={styles.detail_text}>
              Top Level Domain: <span>{tld}</span>
            </h3>
            <h3 className={styles.detail_text}>
              Currencies: {countryCurrencies}
            </h3>
            <h3 className={styles.detail_text}>
              Languages: {countryLanguages}
            </h3>
          </div>
        </div>
        <h3 className={styles.borders}>Border Countries: {borderCountries}</h3>
      </div>
    </section>
  );
};

export default Country;
