import React, { Component } from 'react';
import './App.css';
import Title from './Components/Title';
import Weather from './Components/Weather';
import Form from './Components/Form';

let baseUrl = 'http://api.openweathermap.org/data/2.5/weather';
let kaupunki = 'Kuopio';
let unit = '&units=metric';
const appid = '&appid=2f8b3222fce8d6f1b7fd7dff59724227'; 
let wholeurl = baseUrl + '?q=' + kaupunki +',fi'+ unit + appid ;

class App extends React.Component {
  
  constructor(){
    super();

    this.state = {
      city: undefined,
      temp: undefined,
      conditions: undefined       
    };
    this.callApiFirst();
    
}
callApiFirst = async () => {    

  let apiCall = await fetch(wholeurl);
  let data = await apiCall.json();
  console.log(data);
  this.setState({
    city: data.name,
    temp: data.main.temp,
    conditions: data.weather[0].description
  })             
}
  callApi = async (e) => {
    e.preventDefault();
    wholeurl = baseUrl + '?q=' + e.target.elements.city.value +',fi'+ unit + appid;      

    let apiCall = await fetch(wholeurl);
    let data = await apiCall.json();
    console.log(data);
    try{
    this.setState({
      city: data.name,
      temp: data.main.temp,
      conditions: data.weather[0].description
    })  
  } catch(ex){
    this.setState({
      city: undefined,
      temp: undefined,
      conditions: undefined
    })
  }           
  }

  render() {
   
    return (
      
      <div className="App">
        <Title />
        <Form 
          callApi = {this.callApi}
        />
        <Weather 
          city={this.state.city}
          temp={this.state.temp}
          conditions={this.state.conditions}
        />
      </div>  
    );
  }
}

export default App;
