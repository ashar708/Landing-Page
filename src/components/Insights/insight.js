import React from 'react'
import insight_page from '../../assets/Illustration.png';
import "./insight.css";
import "../../App.css";

function insight() {
  return (
    <div className='landingpage__insight' id='home'>
        <div className='landingpage__insight-heading'>
            <h1 className='landingpage__insight-mainheading'>Lessons and insights</h1>
            <h1 className='landingpage__insight-mainheadingpart2'>from 8 years</h1>
            <h4 className='landingpage__insight-subheading'>Where to grow your business as a photographer: site or social media?</h4>
            <div className='landingpage__insight-btn'>
              <button type='button'>Register</button>
            </div>
        </div>
        
        <div className='landingpage__insight-image'>
            <img src={insight_page} alt='insight_page'/>
        </div>
    </div>
  )
}

export default insight
