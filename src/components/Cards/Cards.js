import React from 'react'
import RedundantCards from "../RedundantCards/RedundantCards";
import "./cards.css";

function Cards() {
  return (
    <div className='landingpage__cards-container' id='testimonial'>
      <div className='landingpage__cards-headings'>
        <h1>Caring is the new marketing</h1>
        <p>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
      </div>
      <div className='landingpage__card-cards'>
        <RedundantCards para={"Creating Streamlined Safeguarding Processes with OneRen"}/>
        <RedundantCards para={"What are your safeguarding responsibilities and how can you manage them?"}/>
        <RedundantCards para={"Revamping the Membership Model with Triathlon Australia"}/>
      </div>
    </div>
  )
}

export default Cards
