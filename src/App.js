import React, { Component } from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const apiKey = "e790864e1d4f0499ba53a2a1464d123f";

export default class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };

  getWeather = async e => {
    e.preventDefault();

    // get the inputs
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`;

    // get the data from the api
    const data = await fetch(url).then(res => res.json());

    if (city && country) {
      // update the states
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "please enter the values"
      });
    }
  };

  render() {
    const { getWeather, state } = this;
    const { temperature, city, country, humidity, description, error } = state;

    return (
      <div>
        <Titles />
        <Form getWeather={getWeather} />
        <Weather
          temperature={temperature}
          city={city}
          country={country}
          humidity={humidity}
          description={description}
          error={error}
        />
      </div>
    );
  }
}
