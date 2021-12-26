import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCountyDetail } from '../store/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import Card from '../components/UI/card/Card';
import Country from '../components/country-detail/Country';

import styles from './CountryDetails.module.css';

const CountryDetails = () => {
  const dispatch = useDispatch();
  const countriesData = useSelector((state) => state.countries);
  const { country, isLoading, error } = countriesData;
  console.log(country, isLoading, error);

  const params = useParams();
  const { countryName } = params;

  useEffect(() => {
    dispatch(getCountyDetail(countryName));
  }, [dispatch, countryName]);

  let content = <Country country={country} />;

  if (isLoading && !country.length) {
    content = <FontAwesomeIcon icon={faSpinner} className={styles.spinner} />;
  }

  if (!country && !isLoading) {
    content = <h3>Sorry, cannot find the country you're searching for.</h3>;
  }

  if (error) {
    content = <h3>Sorry, something went wrong. Please try again later.</h3>;
  }

  return (
    <div className={styles.details}>
      <Card>Back</Card>
      {content}
    </div>
  );
};

export default CountryDetails;
