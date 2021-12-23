import React from 'react';

import Control from '../components/control-bar/Control';
import CountriesList from '../components/countries/CountriesList';

import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <Control />
      <CountriesList />
    </div>
  );
};

export default Home;
