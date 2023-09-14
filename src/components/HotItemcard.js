import React from 'react';
import "../styles/HotItemcard.css"

const HotItemcard = ({index,name,price,image}) => {
  return (
    <div className='HotItemcard'>
      <img src={image} alt={`${index} product`}/>
      <p>{name}</p>
      <span>{price}</span>

    </div>
  )
}

export default HotItemcard;
