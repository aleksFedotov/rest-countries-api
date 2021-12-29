import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getCountries } from '../../store/index';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import styles from './CountriesList.module.css';
import CountryCard from './country-card/CountryCard';

const CountriesList = () => {
  const dispatch = useDispatch();
  const countriesData = useSelector((state) => state.countries);

  const { loadedCountries, isLoading, error, filterStatus } = countriesData;

  useEffect(() => {
    if (loadedCountries.length === 0) {
      dispatch(getCountries('All'));
    }
  }, [dispatch, loadedCountries]);

  let countriesList;

  switch (filterStatus) {
    case 'Africa':
      countriesList = loadedCountries.filter(
        (country) => country.region === 'Africa'
      );
      break;
    case 'Asia':
      countriesList = loadedCountries.filter(
        (country) => country.region === 'Asia'
      );
      break;
    case 'Europe':
      countriesList = loadedCountries.filter(
        (country) => country.region === 'Europe'
      );
      break;
    case 'Oceania':
      countriesList = loadedCountries.filter(
        (country) => country.region === 'Oceania'
      );
      break;
    case 'America':
      countriesList = loadedCountries.filter(
        (country) => country.region === 'Americas'
      );
      break;

    default:
      countriesList = loadedCountries;
  }

  let content = (
    <Fragment>
      {countriesList.map((country) => {
        return (
          <CountryCard
            key={country.name.common}
            name={country.name.common}
            population={country.population}
            capital={country.capital}
            flagURL={country.flags.png}
            region={country.region}
          />
        );
      })}
    </Fragment>
  );

  if (isLoading && !loadedCountries.length) {
    content = <FontAwesomeIcon icon={faSpinner} className={styles.spinner} />;
  }

  if (!loadedCountries.length && !isLoading) {
    content = <h3>Sorry, cannot find the country you're searching for.</h3>;
  }

  if (error) {
    content = <h3>Sorry, something went wrong. Please try again later.</h3>;
  }

  return <section className={styles['countries-grid']}>{content}</section>;
};

export default CountriesList;
