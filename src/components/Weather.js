import React from "react";

const Weather = ({
  temperature,
  city,
  country,
  humidity,
  description,
  error,
  getDegree,
  degree
}) => (
  <div className="weather__info">
    {city && country && (
      <p className="weather__key">
        Location:{" "}
        <span className="weather__value">
          {city},{country}
        </span>
      </p>
    )}
    {temperature && (
      <p className="weather__key">
        Temperatur:{" "}
        <span className="weather__value degree-section" onClick={getDegree}>
          {temperature}
          <span className="degree">{degree}</span>
        </span>
      </p>
    )}
    {humidity && (
      <p className="weather__key">
        Humidity: <span className="weather__value"> {humidity}</span>
      </p>
    )}
    {description && (
      <p className="weather__key">
        Description: <span className="weather__value"> {description}</span>
      </p>
    )}
    {error && (
      <p className="weather__error">
        Error: <span className="weather__value"> {error}</span>
      </p>
    )}
  </div>
);

export default Weather;
