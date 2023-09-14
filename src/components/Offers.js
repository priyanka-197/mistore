import React from 'react';
import Offer from './Offer';
import "../styles/offers.css"

const Offers = ({offer}) => {
  return (
    <div className='offersection'>
      {
        offer.map((item,i)=>{
return <Offer key={item.image} indax={i} src={item.image} link={item.url}/>
        })
      }
      
    </div>
  )
}

export default Offers
