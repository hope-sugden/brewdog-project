import React from "react";
import Main from "./containers/Main/Main";
import Navbar from "./containers/Navbar/Navbar";
import "./App.scss";
import { useState, useEffect } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [beersArr, setBeersArr] = useState([]);
  const [alcoholVolume, setAlcoholVolume] = useState(false);
  const [lowAcidity, setLowAcidity] = useState(false);
  const [classicRange, setClassicRange] = useState(false)

  const handleAlcoholVolume = () => {
    setAlcoholVolume(!alcoholVolume);
  }
  const handleLowAcidity = () => {
    setLowAcidity(!lowAcidity);
  }

  const handleClassicRange = () => {
    setClassicRange(!classicRange);
  }

  const filteresBeerObjects =(beerObjects)=> beerObjects.filter(beer => beer.ph < 4)

  const getBeerData = (dataURL) => {
    fetch(dataURL)
      .then(response => response.json())
      .then(beerObjects => {
          setBeersArr(beerObjects);
      })

  }
  const getBeerDataAndFilter = (dataURL) => {
    fetch(dataURL)
      .then(response => response.json())
      .then(beerObjects => {
        filteresBeerObjects(beerObjects);
          setBeersArr(filteresBeerObjects);
      })

  }

  useEffect( () => {
    if(alcoholVolume && lowAcidity && classicRange) {
      getBeerDataAndFilter("https://api.punkapi.com/v2/beers?abv_gt=6&brewed_before=01-2010")
  }

  else if(alcoholVolume && lowAcidity) {
    getBeerDataAndFilter("https://api.punkapi.com/v2/beers?abv_gt=6")
   

  }
  else if(alcoholVolume && classicRange) {
    getBeerData("https://api.punkapi.com/v2/beers?abv_gt=6&brewed_before=01-2010")

  }
  else if(lowAcidity && classicRange) {
    getBeerDataAndFilter("https://api.punkapi.com/v2/beers?ph_lt=4&brewed_before=01-2010")

  }
  else if(alcoholVolume) {
    getBeerData("https://api.punkapi.com/v2/beers?abv_gt=6")
    
    }
  else if(lowAcidity) {
    
      getBeerDataAndFilter("https://api.punkapi.com/v2/beers")
  }
  else if(classicRange) {
      getBeerData("https://api.punkapi.com/v2/beers?brewed_before=01-2010")
  }
  else {
    getBeerData("https://api.punkapi.com/v2/beers")
  }
  }, [classicRange,lowAcidity,alcoholVolume,getBeerDataAndFilter]);

    
        
  

  const handleInput = event => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  const filteredBeers = beersArr.filter(beer => {
    const beerNameLower = beer.name.toLowerCase();
    return beerNameLower.includes(searchTerm) && beer.image_url;
  })
  return (
    <div className="app">
      <Navbar className="navbar" searchTerm = {searchTerm} handleInput = {handleInput} handleAlcoholVolume = {handleAlcoholVolume} handleLowAcidity={handleLowAcidity} handleClassicRange={handleClassicRange}/>
      <Main filteredBeers = {filteredBeers} className="main"/>
    </div>
  );
};

export default App;
