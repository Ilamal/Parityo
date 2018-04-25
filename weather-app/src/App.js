import React, { Component } from 'react';
import './App.css';
import Title from './Components/Title'

let baseUrl = 'http://api.openweathermap.org/data/2.5/weather';
let kaupunki = 'q=Kuopio,fi';
let unit = '&units=metric';
const appid = '&appid=2f8b3222fce8d6f1b7fd7dff59724227'; 
let wholeurl = baseUrl + '?' + kaupunki + unit + appid ;
let httpreq = new XMLHttpRequest();
var self;
class App extends Component {
  
  constructor(){
    super();

    this.state = {temp: 0};
    self = this;
    httpreq.onreadystatechange = (function(){
      try{
        let tulos = JSON.parse(this.responseText);
        console.log(tulos.main.temp);
        self.setState({temp: tulos.main.temp});
      //  this.state = {temp: {temp}};
      } catch(Exception){

      }
    });
    
    
}
  update
  callApi(){
    httpreq.open('GET', wholeurl, true);
    httpreq.send();
   
  }

  render() {
   
    return (
      
      <div className="App">
        <Title />
        <button onClick={this.callApi} >
          callApi
        </button>
        {this.state.temp}
      </div>  
    );
  }
}

export default App;
