import React, { Component } from 'react';
import './App.css';
import Title from './Components/Title'
const key = 'd2ba5995-a38e-4800-9fae-19c4fc2c6907'
var XMLParser = require('react-xml-parser');
let place = "kuopio";
var baseUrl = 'http://api.openweathermap.org/data/2.5/forecast/';
var kaupunki = 'q=Kuopio,fi';
var unit = '&units=metric';
var appid = '&appid=681fb05c8a442daf7087d168adc747c4'; // sjuva
var wholeurl = baseUrl + '?' + kaupunki + appid + unit ;
class App extends Component {
  selaaJaNayta (xmlDoku){
    
  }
  constructor(){
    super();
    var SERVER_URL = "http://data.fmi.fi/fmi-apikey/"+key+"/wfs?request=getFeature&storedquery_id=fmi:"
    +":forecast::hirlam::surface::point::multipointcoverage&place="+place;
    var STORED_QUERY_OBSERVATION = "fmi::observations::weather::multipointcoverage";
    // Connection was properly initialized. So, get the data.
    var httpreq = new XMLHttpRequest();
    httpreq.onreadystatechange = (function (){
      let tulos = new XMLParser().parseFromString(httpreq.responseText);
      console.log(tulos);
    }
    );
  httpreq.open('GET', SERVER_URL, true);
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
