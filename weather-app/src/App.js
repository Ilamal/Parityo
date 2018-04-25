import React, { Component } from 'react';
import './App.css';
import Title from './Components/Title'
const key = '21a4b6e72379e58cb6cb2c11409903d6'
var XMLParser = require('react-xml-parser');
let place = "kuopio";
var baseUrl = 'http://api.openweathermap.org/data/2.5/weather/';
var kaupunki = 'q=Kuopio,fi';
var unit = '&units=metric';
var appid = '&appid=2f8b3222fce8d6f1b7fd7dff59724227'; 
var wholeurl = baseUrl + '?' + kaupunki + appid + unit ;
class App extends Component {

  constructor(){
    super();
    var httpreq = new XMLHttpRequest();
    httpreq.onreadystatechange = (function (){
   //   let tulos = JSON.parse(httpreq.responseText);
    let tulos = httpreq.responseText;
      console.log(tulos);
    }
    );
  httpreq.open('GET', wholeurl, true);
  httpreq.send();
}
 
    

  render() {
    setTimeout(()=> {
      this.setState({weather: "rain"});
    }, 1000)
    return (
      
      <div className="App">
        <Title />

      </div>  
    );
  }
}

export default App;
