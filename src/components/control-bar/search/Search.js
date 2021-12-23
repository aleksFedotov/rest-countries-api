import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import Card from '../../UI/card/Card';

import styles from './Search.module.css';

const Search = () => {
  return (
    <Card className={styles.search}>
      <div className={styles.icon}>
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <form>
        <input type="text" placeholder="Search for a country..." />
      </form>
    </Card>
  );
};

export default Search;
