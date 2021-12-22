import React from 'react';

import Control from '../components/control-bar/Control';

import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <Control />
    </div>
  );
};

export default Home;
