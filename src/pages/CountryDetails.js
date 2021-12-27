import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { getCountryDetails } from '../store';
import { getCountries } from '../store';

import Card from '../components/UI/card/Card';
import Country from '../components/country-detail/Country';

import styles from './CountryDetails.module.css';

const CountryDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const params = useParams();
  const { countryName } = params;

  const loadedCountryData = useSelector((state) => state.countries);

  const { loadedCountryDetails, isLoading, loadedCountries } =
    loadedCountryData;

  useEffect(() => {
    // if (!loadedCountries) {
    //   dispatch(getCountries('All'));
    // }

    dispatch(getCountryDetails(countryName));
  }, [dispatch, countryName, loadedCountries]);

  const headBackHandler = () => {
    navigate('/');
  };

  let content;

  if (isLoading || !loadedCountryDetails) {
    content = <FontAwesomeIcon icon={faSpinner} className={styles.spinner} />;
  }

  if (loadedCountryDetails) {
    content = <Country country={loadedCountryDetails} />;
  }

  return (
    <div className={styles.details}>
      <Card className={styles.back_btn} onClick={headBackHandler}>
        <FontAwesomeIcon icon={faArrowLeft} className={styles.arrow} /> Back
      </Card>
      {content}
    </div>
  );
};

export default CountryDetails;
