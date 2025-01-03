import React from 'react'
import {pana} from './import';
import "./designing.css";

function Designing() {
  return (
    <div className='landingpage__information' id='feature'>
        <div className='ladingpage__information-image'>
            <img src={pana} alt='logo'/>
        </div>
        <div className='landingpage__information-headings'>
            <h2>How to design your site footer like we did</h2>
            <p>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
            <div className='landingpage__information-button'>
            <button type='button'>Learn More</button>
        </div>
        </div>
    </div>
  )
}

export default Designing
