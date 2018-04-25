import React, { Component } from 'react';
import './App.css';
import Title from './Components/Title'

let baseUrl = 'http://api.openweathermap.org/data/2.5/weather';
let kaupunki = 'q=Kuopio,fi';
let unit = '&units=metric';
const appid = '&appid=2f8b3222fce8d6f1b7fd7dff59724227'; 
let wholeurl = baseUrl + '?' + kaupunki + unit + appid ;

var self;
class App extends Component {
  
  constructor(){
    super();

    this.state = {temp: "Click callApi"};
    self = this;          
}
  update
  callApi(){
    let httpreq = new XMLHttpRequest();
    httpreq.open('GET', wholeurl, true);
    httpreq.send();
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

  render() {
   
    return (
      
      <div className="App">
        <Title />
        <button onClick={this.callApi} >
          callApi
        </button>
        The temp is:
        {this.state.temp}
      </div>  
    );
  }
}

export default App;
