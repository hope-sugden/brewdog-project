import React from 'react'
import SearchBox from '../../components/SearchBox/SearchBox';
import "./Navbar.scss";

const Navbar = ({searchTerm, handleInput}) => {
  return (
    <div className='navbar'>
      <SearchBox searchTerm={searchTerm} handleInput={handleInput}/>
    </div>
  )
}

export default Navbar