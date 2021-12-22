import React from 'react';

import Card from '../../UI/card/Card';

import styles from './Search.module.css';

const Search = () => {
  return (
    <Card className={styles.search}>
      <div className={styles.icon}>
        <i class="fas fa-search"></i>
      </div>
      <form>
        <input type="text" placeholder="Search for a country..." />
      </form>
    </Card>
  );
};

export default Search;
