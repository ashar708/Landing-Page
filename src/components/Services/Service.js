import React from 'react'
import { Features } from '..'
import { peoples,buildings,hands } from './import';
import "./service.css";

function Service() {
  return (
    <div className='landingpage__service' id='service'>
      <div className='landingpage__service-headings_container'>
        <h1 className='landingpage__service-headings-part1'>Manage your entire community</h1>
        <h1 className='landingpage__service-headings-part2'>in a single system</h1>
        <p>Who is Nextcent suitable for?</p>
      </div>
      <div className='landingpage__service-features-container'>
        <Features logo={peoples} title={'Membership Organisations'} paragraph={'Our membership management software provides full automation of membership renewals and payments'}/>
        <Features logo={buildings} title={'National Associations'} paragraph={'Our membership management software provides full automation of membership renewals and payments'}/>
        <Features logo={hands} title={'Clubs And Groups'} paragraph={'Our membership management software provides full automation of membership renewals and payments'}/>
      </div>
    </div>
  )
}

export default Service
