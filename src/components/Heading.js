import React from 'react';
import "../styles/heading.css"

const Heading = ({text}) => {
  return (
    <div className='heading'>
    <p>{text}</p> 
    </div>
  )
}

export default Heading
