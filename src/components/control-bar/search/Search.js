import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCountries } from '../../../store';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import Card from '../../UI/card/Card';

import styles from './Search.module.css';

const Search = () => {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState('');

  const inputHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (searchInput === '') return;
    dispatch(getCountries(searchInput));
    setSearchInput('');
  };

  return (
    <Card className={styles.search}>
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
    </Card>
  );
};

export default Search;
