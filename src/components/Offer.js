import React from 'react'

const Offer = ({src,link,indax}) => {
  return (
   <a href={link}><img src={src} alt={`${indax} offer`}/></a>
  )
}

export default Offer;
