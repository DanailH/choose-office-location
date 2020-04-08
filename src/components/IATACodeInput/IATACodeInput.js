import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './IATACodeInput.css';

IATACodeInput.propTypes = {
  setIATADestinationCode: PropTypes.func,
  error: PropTypes.string
};

export default function IATACodeInput({
  setIATADestinationCode,
  error
}) {
  const [IATACode, setIATACode] = useState('');

  const handleIATACodeSubmit = event => {
    event.preventDefault();

    if (IATACode !== '') {
      setIATADestinationCode(IATACode);
    }
  };

  const handleIATACodeChange = event => {
    event.persist();

    setIATACode(event.target.value);
  };

  return (
    <div className="search-conatiner">
      <form onSubmit={handleIATACodeSubmit} className='search-bar'>
        <input
          type="text"
          placeholder="Enter IATA code"
          value={IATACode}
          onChange={handleIATACodeChange}
          className = 'search-input'
        />
        <button type="submit" className="search-button">GO</button>
      </form>
        <p className="code-description">
          Enter the IATA code for the city or airport you want to fly from!
          To check the IATA code for a given city you can use <a href="https://www.air-port-codes.com/" target="_blank" rel="noopener noreferrer">this website</a>.
        </p>

        <div className="error-msg">{error}</div>
      </div>
  );
};