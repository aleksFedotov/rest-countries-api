import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

export default function useGetCountries(query, region = 'all') {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [loadedCountries, setLoadedCountries] = useState([]);

  const getCountries = useCallback(async () => {
    try {
      setLoading(true);
      setError(false);
      const res = await axios.get(
        query === 'all'
          ? 'https://restcountries.com/v2/all'
          : `https://restcountries.com/v2/name/${query}`
      );
      if (!res.data.length) return;
      await setLoadedCountries((prevState) => [...prevState, ...res.data]);

      setLoading(false);
    } catch (err) {
      if (axios.isCancel(err)) return;
      setError(true);
    }
  }, [query]);

  useEffect(() => {
    setLoadedCountries([]);
  }, [query]);

  useEffect(() => {
    getCountries(query);
  }, [query, getCountries]);

  return {
    loading,
    error,
    loadedCountries,
  };
}
