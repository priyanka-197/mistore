import React from 'react';
import HotItemcard from './HotItemcard';
import "../styles/AccessoriesComponent.css"


const HotAccessories = ({music,musicCover,smartDevice,smartDeviceCover,lifeStyle,lifeStyleCover,home,homeCover,mobileAccessories,mobileAccessoriesCover}) => {
  return (
    <div className='Hotaccessories'>
     <div>
        <img src={musicCover || smartDeviceCover || mobileAccessoriesCover || homeCover || lifeStyleCover} alt="cover"></img>
        </div> 
<div>
    {
      music && music.map((item,i)=>{
            
return <HotItemcard key={item.image} name={item.name} price={item.price} image={item.image}index={i}/>
        })
    }
       {
      smartDevice && smartDevice.map((item,i)=>{
            
return <HotItemcard key={item.image} name={item.name} price={item.price} image={item.image}index={i}/>
        })
    }
     {
      home && home.map((item,i)=>{
            
return <HotItemcard key={item.image} name={item.name} price={item.price} image={item.image}index={i}/>
        })
    }
     {
      lifeStyle && lifeStyle.map((item,i)=>{
            
return <HotItemcard key={item.image} name={item.name} price={item.price} image={item.image}index={i}/>
        })
    }
     {
      mobileAccessories && mobileAccessories.map((item,i)=>{
            
return <HotItemcard key={item.image} name={item.name} price={item.price} image={item.image}index={i}/>
        })
    }
</div>
        
    </div>
  )
}

export default HotAccessories
