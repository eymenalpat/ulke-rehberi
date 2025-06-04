import axios from 'axios';

const BASE_URL = 'https://restcountries.com/v3.1';

export const fetchAllCountries = async () => {
  const response = await axios.get(
    `${BASE_URL}/all?fields=name,flags,cca3,capital,population,region`
  );
  return response.data;
};

export const fetchCountryByCode = async (code: string) => {
  const response = await axios.get(`${BASE_URL}/alpha/${code}`);
  return response.data[0];
}; 