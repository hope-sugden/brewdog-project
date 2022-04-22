import React from 'react'
import "./Card.scss";

const Card = ({name,tagline,image,alcohol}) => {
  return (
    <section className="card">
        <img src={image} alt="" className='card__image'/>
        <div className="card__content">
            <h2 className="card__name">{name}</h2>
            <h3 className="card__tag">{tagline}</h3>
            <h4 className="card__alcohol">{alcohol}%</h4>
        </div>
    </section>
  )
}

export default Card