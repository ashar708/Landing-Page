import React from 'react'
import "./product.css";
import { brand1,brand2,brand3,brand4,brand5 } from './import';

function Product() {
    const t = "Meeting all Customers"
  return (
    <div>
        <div className='landingpage__product' id='product'>
        <div className='landingpage__product-headings'>
            <p>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
            <h2>Tim Smith</h2>
            <p className='ptag'>British Dragon Boat Racing Association</p>
            <div className='landingpage__product-logos'>
                <img src={brand1} alt='b1'/>
                <img src={brand2} alt='b2'/>
                <img src={brand3} alt='b3'/>
                <img src={brand4} alt='b4'/>
                <img src={brand5} alt='b5'/>
                <p>{t}</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Product
