import React, { Component } from 'react';
import './App.css';
import Title from './Components/Title'

class App extends Component {
  constructor(){
    super();
    this.state = {weather: "sunny"};
  }

  render() {
    return (
      
      <div className="App">

        <Title />
        {this.state};
      </div>  
    );
  }
}

export default App;
