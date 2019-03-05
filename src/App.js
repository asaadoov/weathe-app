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
    error: undefined,
    degree: "C"
  };

  getDegree = () => {
    let degree = this.state.degree === "F" ? "C" : "F";
    let temperature = this.state.temperature;
    temperature =
      degree === "F"
        ? temperature * (9 / 5) + 32
        : (temperature - 32) / (9 / 5);

    this.setState({ degree, temperature });
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
    const { getWeather, state, getDegree } = this;
    const {
      temperature,
      city,
      country,
      humidity,
      description,
      error,
      degree
    } = state;

    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-sx-5 title-container">
                  <Titles />
                </div>
                <div className="col-sx-7 form-container">
                  <Form getWeather={getWeather} />
                  <Weather
                    getDegree={getDegree}
                    temperature={temperature}
                    city={city}
                    country={country}
                    humidity={humidity}
                    description={description}
                    error={error}
                    degree={degree}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
