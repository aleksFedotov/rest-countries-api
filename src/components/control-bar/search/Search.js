import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCountries } from '../../../store';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import Card from '../../UI/card/Card';

import styles from './Search.module.css';

const Search = () => {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState('');
  const [isValid, setIsValid] = useState(true);

  // Sending request after users paused typing

  useEffect(() => {
    // After deliting query we sending request for all countries
    if (searchInput === '') {
      dispatch(getCountries('All'));
      return;
    }

    // set timer for sending request
    const delayDebounceFn = setTimeout(() => {
      if (!isValid) return;
      dispatch(getCountries(searchInput.trim()));
    }, 500);

    // cleaning timer if user start typing again
    return () => clearTimeout(delayDebounceFn);
  }, [searchInput, dispatch]);

  // Saving and validating input

  const inputHandler = (e) => {
    setIsValid(true);
    const input = e.target.value;
    const isValid = /^[A-Za-z ]+$/.test(input);

    if (!isValid && input !== '') {
      setIsValid(false);
    }

    setSearchInput(input);
  };

  // Sending requste after submiting input

  const submitHandler = (e) => {
    e.preventDefault();
    const query = searchInput.trim();

    if (query === '') return;
    if (!isValid) return;

    dispatch(getCountries(query));
    setSearchInput('');
  };

  return (
    <Card className={`${styles.search} ${!isValid ? styles.error : ''}`}>
      <div className={styles.icon}>
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Search for a country..."
          onChange={inputHandler}
          value={searchInput}
        />
      </form>
      {/* validation error message */}
      {!isValid && <p className={styles.error_text}>Invalid input</p>}
    </Card>
  );
};

export default Search;
