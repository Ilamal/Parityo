import React, { Component } from 'react';

class Weather extends Component {
  
  render() {
    return (
        <div>
            {this.props.city && <p>The city is:  {this.props.city}</p>}
            {this.props.temp && <p>The temperature is:  {this.props.temp} Celsius</p>}
            {this.props.conditions && this.props.icon && <p>The conditions are:  {this.props.conditions} 
            <img src={'http://openweathermap.org/img/w/'+this.props.icon+'.png'}alt="" height="48" width="48"/></p>}
            {this.props.city===undefined && <p>City not found...</p>}
        </div>
    );
  }
}
export default Weather;