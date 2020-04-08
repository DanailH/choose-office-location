import {
  openWeatherApiKey,
  baseWeatherApi
} from '../constants';
import { constructAPIEndpoint } from '../hooks/helperHooks';

const searchType = 'forecast';
const frequency = 'daily';

export const getLocationForecast = async (location, numberOfDays = 5, units = 'metric') => {
  const weatherApiSearchEndpoint = constructAPIEndpoint([baseWeatherApi, searchType, frequency]);

  try {
    const res = await fetch(`${weatherApiSearchEndpoint}?q=${location}&cnt=${numberOfDays}&units=${units}&appid=${openWeatherApiKey}`);
    const resBody = await res.json();

    if (resBody.cod !== '200') {
      throw resBody.message;
    }

    return resBody.list;
  } catch (error) {
    return {
      message: error
    }
  }
};