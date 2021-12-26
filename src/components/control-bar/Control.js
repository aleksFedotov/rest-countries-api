import React from 'react';

import Regions from './regions/Regions';
import Search from './search/Search';

import styles from './Control.module.css';

const Control = () => {
  return (
    <section className={styles.control}>
      <Search />
      <Regions />
    </section>
  );
};

export default Control;
