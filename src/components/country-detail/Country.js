import React from 'react';
import Card from '../UI/card/Card';
import { useNavigate } from 'react-router-dom';

import styles from './Country.module.css';

import { countryListAlpha3 } from '../../utils/countryCodes';

const Country = (props) => {
  const {
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
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

  let CountryCurrencies = <span>none</span>;
  if (currencies) {
    CountryCurrencies = currencies.map((currencie, ind) =>
      ind !== currencies.length - 1 ? (
        <span key={currencie.name}>{currencie.name}, </span>
      ) : (
        <span key={currencie.name}>{currencie.name}</span>
      )
    );
  }

  let CountryLanguages = <span>none</span>;
  if (languages) {
    CountryLanguages = languages.map((language, ind) =>
      ind !== languages.length - 1 ? (
        <span key={language.name}>{language.name}, </span>
      ) : (
        <span key={language.name}>{language.name}</span>
      )
    );
  }

  return (
    <section className={styles.country}>
      <div className={styles['img-box']}>
        <img src={flags.png} alt="flag" />
      </div>
      <div className={styles['info-box']}>
        <h2 className={styles.name}>{name}</h2>
        <div className={styles['info-details']}>
          <div>
            <h3 className={styles.detail_text}>
              Native Name: <span>{nativeName}</span>
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
              Top Level Domain: <span>{topLevelDomain}</span>
            </h3>
            <h3 className={styles.detail_text}>
              Currencies: {CountryCurrencies}
            </h3>
            <h3 className={styles.detail_text}>
              Languages: {CountryLanguages}
            </h3>
          </div>
        </div>
        <h3 className={styles.borders}>Border Countries: {borderCountries}</h3>
      </div>
    </section>
  );
};

export default Country;
