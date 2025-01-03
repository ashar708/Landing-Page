import React from 'react'
import Article from "../Article/Article";
import {map1,map2,map3,map4} from "./import";
import "./feature.css";

function Feature() {
  return (
    <>
    <div className='landingpage__feature'>
          <div className='landingpage__feature-heading'>
            <h1 className='landingpage__feature-heading-part1'>Helping a local</h1>
            <h1 className='landingpage__feature-heading-part2'>business reinvent itself</h1>
            <p>We reached here with our hard work and dedication</p>
          </div>
          <div className='landingpage__feature-logo-container'>
            <Article logo={map1} number={'2,245,341'} info={'Members'}/>
            <Article logo={map2} number={'46,328'} info={'Clubs'}/>
            <Article logo={map3} number={'828,867'} info={'Event Bookings'}/>
            <Article logo={map4} number={'1,926,436'} info={'Payments'}/>
          </div>
    </div>
    </>
  )
}

export default Feature
