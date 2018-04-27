import React, { Component } from 'react';

class Weather extends Component {

  render() {
    return (
      <div className="weather__info">
        {this.props.city && <p className="weather__key">The city is:
        <span className="weather__value"> {this.props.city}</span></p>}
        {this.props.temp && <p className="weather__key">The temperature is:
        <span className="weather__value"> {this.props.temp} Celsius</span></p>}
        {this.props.conditions && this.props.icon && <p className="weather__key">The conditions are:
        <span className="weather__value"> {this.props.conditions}</span>
          <img src={'http://openweathermap.org/img/w/' + this.props.icon + '.png'} alt="" height="58" width="58" /></p>}
        {this.props.city === undefined && <p className="weather__error">City not found..</p>}
      </div>
    );
  }
}
export default Weather;