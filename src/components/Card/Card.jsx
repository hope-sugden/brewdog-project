import React, { useState } from 'react'
import MoreInfo from '../MoreInfo/MoreInfo';
import "./Card.scss";

const Card = ({name,tagline,image,description,ph,first_brewed,abv,brewers_tips}) => {
    const [showMoreInfo,setShowMoreInfo] = useState(false);

    const toggleMoreInfo = () => {
        setShowMoreInfo(!showMoreInfo);
    }
  return (
    <section className="card">
        {showMoreInfo && <MoreInfo toggleMoreInfo={toggleMoreInfo} name={name} description={description} ph={ph} first_brewed={first_brewed} abv={abv} brewers_tips={brewers_tips} />}
        <img src={image} alt="" className='card__image'/>
        <div className="card__content">
            <h2 className="card__name">{name}</h2>
            <h3 className="card__tag">{tagline}</h3>
            <h4 className="card__alcohol">{abv}%</h4>
            <h5 className="card__more-info" onClick={toggleMoreInfo}>More info ...</h5>
        </div>
    </section>
  )
}

export default Card