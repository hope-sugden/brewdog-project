import React from 'react'
import SearchBox from '../../components/SearchBox/SearchBox';
import "./Navbar.scss";

const Navbar = ({searchTerm, handleInput,handleAlcoholVolume,handleLowAcidity,handleClassicRange}) => {
  return (
    <div className='navbar'>
      <SearchBox searchTerm={searchTerm} handleInput={handleInput} handleAlcoholVolume={handleAlcoholVolume} handleLowAcidity={handleLowAcidity} handleClassicRange={handleClassicRange} />
    </div>
  )
}

export default Navbar