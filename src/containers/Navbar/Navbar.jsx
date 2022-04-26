import React from 'react'
import SearchBox from '../../components/SearchBox/SearchBox';
import "./Navbar.scss";

const Navbar = ({searchTerm, handleInput,handleAlcoholVolume,handleLowAcidity,handleClassicRange,searchResultCount}) => {
  return (
    <div className='navbar'>
      <SearchBox searchTerm={searchTerm} searchResultCount={searchResultCount} handleInput={handleInput} handleAlcoholVolume={handleAlcoholVolume} handleLowAcidity={handleLowAcidity} handleClassicRange={handleClassicRange} />
    </div>
  )
}

export default Navbar