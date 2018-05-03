import React, { Component } from "react";
import "./App.css";
import Title from "./Components/Title";
import Weather from "./Components/Weather";
import Form from "./Components/Form";

let baseUrl =
  "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather";
let kaupunki = "Kuopio";
const unit = "&units=metric";
const appid = "&appid=2f8b3222fce8d6f1b7fd7dff59724227";
let wholeurl = baseUrl + "?q=" + kaupunki + ",fi" + unit + appid;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      city: undefined,
      temp: undefined,
      conditions: undefined,
      icon: undefined
    };
    this.callApiFirst();
  }
  //Is only called once
  callApiFirst = async () => {
    let apiCall = await fetch(wholeurl);
    let data = await apiCall.json();

    this.setState({
      city: data.name,
      temp: data.main.temp,
      conditions: data.weather[0].description,
      icon: data.weather[0].icon
    });
  };
  callApi = async e => {
    e.preventDefault();
    wholeurl =
      baseUrl +
      "?q=" +
      e.target.elements.city.value.replace(",", "") +
      ",fi" +
      unit +
      appid;

    let apiCall = await fetch(wholeurl);
    let data = await apiCall.json();

    try {
      this.setState({
        city: data.name,
        temp: data.main.temp,
        conditions: data.weather[0].description,
        icon: data.weather[0].icon
      });
    } catch (ex) {
      //Api call was not succesful
      this.setState({
        city: undefined,
        temp: undefined,
        conditions: undefined,
        icon: undefined
      });
    }
  };

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="row">
              <div className="col-sm-5 well hidden-xs title-container">
                <Title />
              </div>
              <div className="col-sm-7 col-xs-12 form-container">
                <Form callApi={this.callApi} />
                <Weather
                  city={this.state.city}
                  temp={this.state.temp}
                  conditions={this.state.conditions}
                  icon={this.state.icon}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
