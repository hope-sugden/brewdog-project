import React from 'react'
import "./CardList.scss";
import Card from '../Card/Card';

const CardList = ({filteredBeers}) => {
    const beersJSX = filteredBeers.map(beer => {
        return <Card key={beer.id} name={beer.name} tagline={beer.tagline} image={beer.image_url} alcohol={beer.abv}/>
    })
  return (
    <main>
        <h1 className="card__title">Brewdog Beers</h1>
        <div className="card-container">
            {beersJSX}
        </div>
    </main>
  )
}

export default CardList