import { baseFlightApi } from '../constants';
import {
  constructAPIEndpoint,
  formatFlightDate
} from '../hooks/helperHooks';

const searchType = 'flights';

export const getFlightPrices = async (
  locationOutbound,
  locationInbound,
  dateTo,
  dateFrom = new Date(),
  numberOfDays = 5,
  maxStopovers = 0,
  partner = 'picky'
) => {
  const flightApiSearchEndpoint = constructAPIEndpoint([baseFlightApi, searchType]);

  if (!dateTo) {
    dateTo = new Date();
    dateTo.setDate(dateTo.getDate() + numberOfDays);
  }
  try {
    const res = await fetch(`${flightApiSearchEndpoint}?fly_from=${locationOutbound}&fly_to=${locationInbound}&date_from=${formatFlightDate(dateFrom)}&date_to=${formatFlightDate(dateTo)}&max_stopovers=${maxStopovers}&partner=${partner}`);
    const resBody = await res.json();

    if (resBody.message) {
      throw resBody.message[0].errors[0];
    }

    return {
      currency: resBody.currency,
      flights: resBody.data
    };
  } catch (error) {
    return {
      message: error
    }
  }
};