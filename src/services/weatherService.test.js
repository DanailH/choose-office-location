import { getLocationForecast } from './weatherService';
import { cities } from '../constants';

const mockCity = cities[0];

it('fetches weather forecast data from a server when server returns a successful response', done => {
  const mockSuccessResponse = {};
  const mockJsonPromise = Promise.resolve(mockSuccessResponse);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
  });

  jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

  getLocationForecast(mockCity);

  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith('http://api.openweathermap.org/data/2.5/forecast/daily?q=Amsterdam&cnt=5&units=metric&appid=769f282b56f12ca726d10974e814e937');

  process.nextTick(() => {
    global.fetch.mockClear();
    done();
  });
});