import {
  constructAPIEndpoint,
  formatFlightDate
} from './helperHooks';

it('[constructAPIEndpoint] concatinates a array of strings with "/" in between', () => {
  const result = constructAPIEndpoint(['test.com', 'test']);

  expect(result).toEqual('test.com/test');
});

it('[formatFlightDate] returns a date dd/mm/YYYY format', () => {
  const today = new Date();
  const flightDate = formatFlightDate(today);

  expect(flightDate).toEqual(`${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`);
});