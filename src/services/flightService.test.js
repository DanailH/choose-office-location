import { getFlightPrices } from './flightService';
import { IATACodes } from '../constants';
import { formatFlightDate } from '../hooks/helperHooks';

const mockOutboundLocation = 'SOF';
const mockInboundLocation = IATACodes['Amsterdam'];
const mockFromDate = new Date();
const mockToDate = new Date();
mockToDate.setDate(mockToDate.getDate() + 5);

it('fetches flight data from a server when server returns a successful response', done => {
  const mockSuccessResponse = {};
  const mockJsonPromise = Promise.resolve(mockSuccessResponse);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
  });

  jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

  getFlightPrices(mockOutboundLocation, mockInboundLocation);

  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith(`https://api.skypicker.com/flights?fly_from=SOF&fly_to=AMS&date_from=${formatFlightDate(mockFromDate)}&date_to=${formatFlightDate(mockToDate)}&max_stopovers=0&partner=picky`);

  process.nextTick(() => {
    global.fetch.mockClear();
    done();
  });
});