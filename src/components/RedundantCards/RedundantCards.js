import React from 'react'
import "./redundantcards.css";

function RedundantCards({para}) {
  return (
    <div className='landingpage__redundantcards-container'>
        <p>{para}</p>
        <h3>Readmore</h3>
    </div>
  )
}

export default RedundantCards
