import React from 'react'
import "./feature.css";

function Features({logo,title,paragraph}) {
  return (
    <div className='landingpage__features-container'>
        <div className='landingpage__features-logos'>
            <img src={logo} alt='logos'/>
        </div>
        <div className='landingpage__features-content'>
            <h2>{title}</h2>
            <p>{paragraph}</p>
        </div>
    </div>
  )
}

export default Features
