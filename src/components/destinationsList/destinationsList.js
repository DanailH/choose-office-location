import React from 'react';
import PropTypes from 'prop-types';
import DestinationBox from '../destinationBox/destinationBox';
import { cities } from '../../constants';
import './destinationsList.css';

DestinationsList.propTypes = {
  weatherDestinationsData: PropTypes.object,
  flightDestinationsData: PropTypes.object,
};

export default function DestinationsList({
  weatherDestinationsData,
  flightDestinationsData
}) {
  const renderDestinationBoxes = destinations => {
    return destinations.map((destination, index) => (
      <DestinationBox
        key={index}
        destinationName={destination}
        weatherData={weatherDestinationsData.get(destination)}
        flightData={flightDestinationsData.get(destination)}
      />
    ));
  };

  return (
    <div className="destinations-wrapper">
      { renderDestinationBoxes(cities) }
    </div>
  )
};