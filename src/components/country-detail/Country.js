import React from 'react';

import styles from './Country.module.css';

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

  let borderCountries = 'none';
  if (borders) {
    borderCountries = borders.map((border, ind) =>
      ind !== borders.length - 1 ? (
        <span key={border}>{border}, </span>
      ) : (
        <span key={border}>{border}</span>
      )
    );
  }

  return (
    <section className={styles.country}>
      <div className={styles['img-box']}>
        <img src={flags.png} alt="flag" />
      </div>
      <div className={styles['info-box']}>
        <h2>{name}</h2>
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
              Capital: <span>{capital}</span>
            </h3>
          </div>
          <div>
            <h3 className={styles.detail_text}>
              Top Level Domain: <span>{topLevelDomain}</span>
            </h3>
            <h3 className={styles.detail_text}>
              Currencies:{' '}
              {currencies.map((currencie, ind) =>
                ind !== currencies.length - 1 ? (
                  <span key={currencie.name}>{currencie.name}, </span>
                ) : (
                  <span key={currencie.name}>{currencie.name}</span>
                )
              )}
            </h3>
            <h3 className={styles.detail_text}>
              Languages:{' '}
              {languages.map((language, ind) =>
                ind !== languages.length - 1 ? (
                  <span key={language.name}>{language.name}, </span>
                ) : (
                  <span key={language.name}>{language.name}</span>
                )
              )}
            </h3>
          </div>
        </div>
      </div>
      <h3 className={styles.detail_text}>
        Border Countries: {borderCountries}
      </h3>
    </section>
  );
};

export default Country;
