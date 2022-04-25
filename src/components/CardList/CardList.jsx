import React from 'react'
import "./CardList.scss";
import Card from '../Card/Card';

const CardList = ({filteredBeers}) => {

    const beersJSX = filteredBeers.map(beer => {
        return <Card name={beer.name} tagline={beer.tagline} image={beer.image_url} abv={beer.abv} description={beer.description} ph={beer.ph} first_brewed={beer.first_brewed} brewers_tips={beer.first_brewed} />
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