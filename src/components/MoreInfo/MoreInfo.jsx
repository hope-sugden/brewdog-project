import React from 'react'
import "./MoreInfo.scss";
import blackCross from "../../assets/images/black-cross.png"

const MoreInfo = ({toggleInfo,name,description,ph,first_brewed,abv,brewers_tips}) => {
  return (
    <div className='more-info'>
        <img src={blackCross} alt="Close info" className="more-info__cross" onClick={toggleInfo} />
        <h2 className='more-info__name'>{name}</h2>
        <p className="more-info__description">{description}</p>
        <h3 className='more-info__facts'>Facts</h3>
        <p className="more-info__acidity">PH Level: {ph}</p>
        <p className="more-info__brewed">First Brewed: {first_brewed}</p>
        <p className="more-info__alcohol">Alcohol By Volume: {abv}</p>
        <p className="more-info__tips">Brewers Tips: {brewers_tips}</p>
    </div>
  )
}

export default MoreInfo