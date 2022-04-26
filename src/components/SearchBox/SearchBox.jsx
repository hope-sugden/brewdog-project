import React from "react";

import "./SearchBox.scss";

const SearchBox = ({searchTerm, handleInput,handleAlcoholVolume, handleLowAcidity,handleClassicRange,searchResultCount} ) => {

  const searchResults = searchResultCount == 1 ? "1 beer found" :
  (searchResultCount >1 ? searchResultCount +" beers found" : "No match found!")

  return (
    <form className="search-box">
        <div className="search-box__search">
            <input placeholder="Search" type="text" value={searchTerm} onInput={handleInput} className="search-box__input"/>
        </div>
        <p className="search-box__results">{searchResults}</p>
        <h4 className="search-box__filter">Filter by:</h4>
        <div className="search-box__alcohol">
            <label htmlFor="">High ABV </label>
            <input type="checkbox" onClick={handleAlcoholVolume} />
        </div>
        
        <div className="search-box__classic">
            <label htmlFor="">Classic Range</label>
            <input type= "checkbox" onClick={handleClassicRange}/>
        </div>
        
        <div className="search-box__acidity">
        <label htmlFor="">Low Acidity</label>
        <input type= "checkbox"onClick={handleLowAcidity}/>
        </div>
    </form>
  );
};

export default SearchBox;
