import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import showVenues from './components/showVenues'

class App extends Component {

  constructor(){
    super()
    this.state={
      latitude:"",
      longitude:"",
      venues:{}
    }
  }

  handleTextChange = (e)=>{

    console.log("e.",e.target.value)
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  async handleClick(e){
    let obj = {
      latitude: this.state.latitude,
      longitude: this.state.longitude
    }
    // console.log("obj",obj)
    const data = await this.callTheApi(obj);;
    const venues = data.response.venues
    console.log("data=======>",data);
    this.setState({
      venues
    })
  }

  async callTheApi(data){
    

    let API_URL= `https://api.foursquare.com/v2/venues/search?ll=${data.latitude},${data.longitude}&client_id=R3T3LKBPX5UL514JI2XKGEPX3ZZUUPAQUE0UXXCPHYRNF31S&client_secret=FVXTC4O4EPZLDTXTOIYUHBNGIGZYQLLAYGVGB2QBTUJ3FDB1&v=20190214`;
    let obj = {
      method: "GET"
    };

    const getData = await fetch(API_URL, obj);
    return await getData.json();
  }

  render() {
    // console.log("this.state", this.state)
    return (
      <div className="App">
      
      Enter Latitude : <input type="text" name= "latitude" onChange= {this.handleTextChange} ></input>
      Enter Longitude: <input type="text" name= "longitude" onChange= {this.handleTextChange} ></input>

      <button onClick={e=>this.handleClick(e)}>Get Details</button>

      <showVenues venues= {this.state.venues}/>


      
      </div>
    );
  }
} 

export default connect()(App);