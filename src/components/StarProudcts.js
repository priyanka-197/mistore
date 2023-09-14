import React from 'react';
import "../styles/styleProudcts.css"

const StarProudcts = ({starProudct}) => {
  return (
    <div className='starProudct'>
   <div>
   <a href={starProudct[0].url}>
<img src={starProudct[0].image} alt='1st proudct'/>
</a>
   </div>
   <div>
   <a href={starProudct[1].url}>
<img src={starProudct[1].image} alt='2st proudct'/>
</a>
<a href={starProudct[2].url}>
<img src={starProudct[2].image} alt='3st proudct'/>
</a>
<a href={starProudct[3].url}>
<img src={starProudct[3].image} alt='4t proudct'/>
</a> 
   </div>
     
    </div>
  )
}

export default StarProudcts
