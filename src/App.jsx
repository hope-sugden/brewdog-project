import React from "react";
import Main from "./containers/Main/Main";
import Navbar from "./containers/Navbar/Navbar";
import "./App.scss";
import beers from "./data/beers";
import { useState, useEffect } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [beersArr, setBeersArr] = useState([])

    useEffect( () => {
        console.log("in useEffect");
        fetch("https://api.punkapi.com/v2/beers")
        .then(response => response.json())
        .then(userObjects => {
            console.log( userObjects );
            setBeersArr(userObjects);
        })
    }, [] );
  

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
      <Navbar className="navbar" searchTerm = {searchTerm} handleInput = {handleInput} handleClickAlcohol={handleClickAlcohol} handleClickAcidity={handleClickAcidity} />
      <Main filteredBeers = {filteredBeers} className="main"/>
    </div>
  );
};

export default App;
