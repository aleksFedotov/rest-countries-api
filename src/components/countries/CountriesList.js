import React, { useEffect, useState } from 'react';

import styles from './CountriesList.module.css';
import CountryCard from './country-card/CountryCard';

const CountriesList = () => {
  const [countries, setCoutries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const res = await fetch('https://restcountries.com/v2/all');

      if (!res.ok) {
        return;
      }

      const resData = await res.json();

      setCoutries(resData.slice(0, 12));
    };

    fetchCountries();
  }, []);

  console.log(countries);
  return (
    <section className={styles['countries-grid']}>
      {countries.map((country) => {
        return (
          <CountryCard
            key={country.numericCode}
            name={country.name}
            population={country.population}
            capital={country.capital}
            flagURL={country.flags.png}
            region={country.region}
          />
        );
      })}
    </section>
  );
};

export default CountriesList;
