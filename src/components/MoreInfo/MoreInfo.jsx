import React from 'react'
import "./MoreInfo.scss";
import blackCross from "../../assets/images/black-cross.png"

const MoreInfo = ({toggleMoreInfo,name,description,ph,first_brewed,abv,brewers_tips,food_pairing}) => {
    const foodPairingsJSX = food_pairing.map(food => <li className='more-info__food'>{food}</li>)
  return (
    <div className='more-info'>
        <div className='more-info__content'>
            <img src={blackCross} alt="Close info" className="more-info__cross" onClick={toggleMoreInfo} />
            <h2 className='more-info__name'>{name}</h2>
            <p className="more-info__description">{description}</p>

            <div className="more-info__facts">
                <h3 className='more-info__factHeading'>Facts</h3>
                <p className="more-info__acidity">PH Level: {ph}</p>
                <p className="more-info__brewed">First Brewed: {first_brewed}</p>
                <p className="more-info__alcohol">Alcohol By Volume: {abv}</p>
                <p className="more-info__tips">Brewers Tips: {brewers_tips}</p>
            </div>
            
            <div className='more-info__foods'>
                <h3>Delicious when paired with:</h3>
                <ul className='more-info__list'>
                    {foodPairingsJSX}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default MoreInfo