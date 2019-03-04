import React from "react";

const Weather = ({
  temperature,
  city,
  country,
  humidity,
  description,
  error
}) => (
  <div>
    {city && country && (
      <div>
        <p>
          Location: {city},{country}
        </p>
        <p>Temperatur: {temperature}</p>
        <p>Humidity: {humidity}</p>
        <p>Conditions: {description}</p>
      </div>
    )}
    {error && <p> {error}</p>}
  </div>
);

export default Weather;
