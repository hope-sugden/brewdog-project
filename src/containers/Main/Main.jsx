import React from 'react'
import CardList from '../../components/CardList/CardList'


const Main = ({filteredBeers}) => {
    

  return (
      <CardList filteredBeers={filteredBeers}/>
    
  )
}

export default Main