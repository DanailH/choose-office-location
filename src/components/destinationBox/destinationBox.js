import React from 'react';
import PropTypes from 'prop-types';
import { weekDaysLabels } from '../../constants';
import './destinationBox.css';

DestinationBox.propTypes = {
  destinationName: PropTypes.string,
  weatherData: PropTypes.array,
  flightData: PropTypes.object,
};

export default function DestinationBox({
  destinationName,
  weatherData,
  flightData
}) {
  const renderWeatherForecast = weatherData => {
    if (!weatherData.length) {
      return 'No weather forecast available';
    }

    return weatherData.map((forecast, index) => (
      <div key={ index } className="date-box">
        <div className="date">{ weekDaysLabels[new Date(forecast.dt * 1000).getDay()] }</div>
        <strong>{ forecast.weather[0].main } </strong>
        <div className="temp-details">Temp (C): <strong>{ Math.round(forecast.temp.day) }</strong></div>
        <div className="temp-details">Feels like (C): <strong>{ Math.round(forecast.feels_like.day) }</strong></div>
      </div>
    ));
  };

  const renderFlightPrices = flightPricesData => {
    const currency = flightPricesData.currency;

    if (!flightPricesData.flights.length) {
      return 'No flights available';
    }

    return flightPricesData.flights.map((flight, index) => (
      <div key={ index }>
        <div className="flight-data">From: { flight.cityFrom }</div>
        <div className="flight-data">Date: { new Date(flight.dTime * 1000).toLocaleString() }</div>
        <div className="flight-data">Duration: { flight.fly_duration }</div>
        <div className="flight-data">Price: <strong>{ `${flight.price} ${currency}` }</strong></div>
      </div>
    ));
  };

  return (
    <div className="destination-box">
      <h3 className="destination-text">{destinationName}</h3>

      <div className="weather-forecast-container">
        { weatherData && renderWeatherForecast(weatherData) }
      </div>

      {flightData && <div className="flight-prices-container">
        {renderFlightPrices(flightData)}
      </div>}
    </div>
  );
};