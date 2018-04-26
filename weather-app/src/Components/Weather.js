import React, { Component } from 'react';

class Weather extends Component {
  
  render() {
    return (
        <div>
            {this.props.temp && <p>The city is:  {this.props.city}</p>}
            {this.props.temp && <p>The temperature is:  {this.props.temp} Celsius</p>}
            {this.props.temp && <p>The conditions are:  {this.props.conditions}</p>}
            {this.props.city===undefined && <p>City not found...</p>}
        </div>
    );
  }
}
export default Weather;