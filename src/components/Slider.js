import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';





const Slider = ({start}) => {
  
  return (

    <Carousel fade>

{
start.map((item,i)=>{


return (<Carousel.Item>
<img 
src={item}
className='d-block,w-100'
alt='first slide'
/>
</Carousel.Item>)
})}


    </Carousel>
  )
}

export default Slider;
