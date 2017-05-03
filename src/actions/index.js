import axios from 'axios';

const API_KEY = '809a78556828a69af6e0805de03c66d9';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`;
  // request returns a promise, the promise does not contain
  // any of our data yet.
  // The call is 100% Async and
  // the redux-promise middleware will handle this promise.
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
