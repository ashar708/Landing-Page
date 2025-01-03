import React from 'react'
import {image} from './import.js';
import "./information.css";

function Information() {
  return (
    <>
    <div className='landingpage__information'>
        <div className='ladingpage__information-image'>
            <img src={image} alt='logo'/>
        </div>
        <div className='landingpage__information-headings'>
            <h2>The unseen of spending three years at Pixelgrade</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
            <div className='landingpage__information-button'>
            <button type='button'>Learn More</button>
        </div>
        </div>
    </div>
    </>
  )
}

export default Information
