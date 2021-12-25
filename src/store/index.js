import { configureStore, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loadedCountries: [],
  isLoading: true,
  error: false,
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    storeCounries(state, action) {
      const { loadedCountries, isLoading, error } = action.payload;
      state.loadedCountries = loadedCountries;
      state.isLoading = isLoading;
      state.error = error;
    },
  },
});

export const getCountries = (query, isRegion = false) => {
  return async (dispatch) => {
    let countries = [];
    let isLoading = true;
    let error = false;

    let url;

    if (!isRegion) {
      if (query === 'All') {
        url = 'https://restcountries.com/v2/all';
      } else {
        url = `https://restcountries.com/v2/name/${query}`;
      }
    } else {
      url = `https://restcountries.com/v2/region/${query}`;
    }

    const fetchData = async () => {
      const res = await axios.get(url);
      if (!res.data.length) return;

      return res.data;
    };
    try {
      countries = await fetchData();

      isLoading = false;
    } catch {
      error = true;
    }
    dispatch(
      countriesSlice.actions.storeCounries({
        loadedCountries: countries,
        isLoading,
        error,
      })
    );
  };
};

export const countriesActions = countriesSlice.actions;

const store = configureStore({
  reducer: { countries: countriesSlice.reducer },
});

export default store;
