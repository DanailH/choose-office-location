import React, {
  useState,
  useEffect
} from 'react';
import {
  cities,
  IATACodes
} from '../constants';
import { getLocationForecast } from '../services/weatherService';
import { getFlightPrices } from '../services/flightService';
import IATACodeInput from '../components/IATACodeInput/IATACodeInput';
import DestinationsList from '../components/destinationsList/destinationsList';
import './App.css';

export default function App() {
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [citiesForecast, setCitiesForecast] = useState(new Map());
  const [flightPrices, setFlightPrices] = useState(new Map());

  const handleSetFlightPrices = async outboundLocation => {
    const availableCitiesFlights = new Map();

    setIsLoading(true);

    for (const city of cities) {
      const data = await getFlightPrices(outboundLocation, IATACodes[city]);

      if (data.message) {
        setErrorMsg(data.message);
        break;
      } else {
        setErrorMsg('');
      }

      availableCitiesFlights.set(city, data);
    }

    setIsLoading(false);
    setFlightPrices(availableCitiesFlights);
  };

  const renderLoadingIndicator = (isLoading) => {
    if (isLoading) return (<h2 className="loading-state">Loading...</h2>);
  };

  useEffect(() => {
    const setComponentState = async () => {
      const availableCitiesForecast = new Map();

      for (const city of cities) {
        const data = await getLocationForecast(city);
        availableCitiesForecast.set(city, data);
      }

      setCitiesForecast(availableCitiesForecast);
      setIsLoading(false);
    };

    setIsLoading(true);
    setComponentState();
  }, []);

  return (
    <div className="app">
      <IATACodeInput setIATADestinationCode={handleSetFlightPrices} error={errorMsg} />
      <br />
      { renderLoadingIndicator(isLoading) }
      <DestinationsList weatherDestinationsData={citiesForecast} flightDestinationsData={flightPrices} />
      <br />
    </div>
  );
};
