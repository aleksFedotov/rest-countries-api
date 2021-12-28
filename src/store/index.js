import { configureStore, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loadedCountries: [],
  loadedCountryDetails: null,
  filterStatus: 'All world',
  isLoading: true,
  error: false,
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    storeCountries(state, action) {
      state.loadedCountries = action.payload;
    },
    setCountrydetails(state, action) {
      state.loadedCountryDetails = action.payload;
    },
    setFilter(state, action) {
      state.filterStatus = action.payload;
    },
    loadingAction(state, action) {
      state.isLoading = action.payload;
    },
    errorAction(state, action) {
      state.error = action.payload;
    },
    cleanCountryDetail(state) {
      state.loadedCountryDetails = null;
    },
  },
});

export const getCountries = (query) => {
  return async (dispatch) => {
    let countries = [];
    dispatch(countriesActions.loadingAction(true));
    dispatch(countriesActions.errorAction(false));
    dispatch(countriesActions.cleanCountryDetail());

    let url;

    if (query === 'All') {
      url = 'https://restcountries.com/v2/all';
    } else {
      url = `https://restcountries.com/v2/name/${query}`;
    }

    const fetchData = async () => {
      const res = await axios.get(url);
      if (res.data.status) {
        return [];
      }
      if (!res.data.length) return;

      return res.data;
    };

    try {
      countries = await fetchData();
      dispatch(countriesSlice.actions.storeCountries(countries));
      dispatch(countriesActions.loadingAction(false));
    } catch (err) {
      dispatch(countriesActions.errorAction(true));
    }
  };
};

export const getCountryDetails = (query) => {
  return async (dispatch) => {
    dispatch(countriesActions.loadingAction(true));
    dispatch(countriesActions.errorAction(false));

    const fetchData = async () => {
      const res = await axios.get(`https://restcountries.com/v2/name/${query}`);

      if (res.data.status) {
        return {
          countryDetailsData: [],
          countriesData: [],
        };
      }
      if (!res.data.length) return;

      return res.data[0];
    };

    try {
      const country = await fetchData();
      dispatch(countriesSlice.actions.setCountrydetails(country));

      dispatch(countriesActions.loadingAction(false));
    } catch (err) {
      dispatch(countriesActions.errorAction(true));
    }
  };
};

export const countriesActions = countriesSlice.actions;

const store = configureStore({
  reducer: { countries: countriesSlice.reducer },
});

export default store;
