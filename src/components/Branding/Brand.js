import React from 'react'
import {brand1,brand2,brand3,brand4,brand5,brand6,brand7} from "./import.js";
import "./brand.css";

function Brand() {
  return (
    <div className='landingpage__brand'>
        <div className='landingpage__brand-client-container'>
           <h1 className='landingpage__client-heading'>Our Clients</h1>
           <p>We have been working with some Fortune 500+ clients</p>
        </div>
           <div className='landingpage__brand-logos'>
            <img src={brand1} alt='brand1'/>
            <img src={brand2} alt='brand2'/>
            <img src={brand3} alt='brand3'/>
            <img src={brand4} alt='brand4'/>
            <img src={brand5} alt='brand5'/>
            <img src={brand6} alt='brand6'/>
            <img src={brand7} alt='brand7'/>
           </div>
        
    </div>
  )
}

export default Brand
