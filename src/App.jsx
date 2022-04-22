import React from "react";
import Main from "./containers/Main/Main";
import Navbar from "./containers/Navbar/Navbar";
import "./App.scss";
import beers from "./data/beers";
import { useState } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = event => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  const filteredBeers = beers.filter(beer => {
    const beerNameLower = beer.name.toLowerCase();
    return beerNameLower.includes(searchTerm) && beer.image_url;
  })
  return (
    <div className="app">
      <Navbar className="navbar" searchTerm = {searchTerm} handleInput = {handleInput}/>
      <Main filteredBeers = {filteredBeers} className="main"/>
    </div>
  );
};

export default App;
