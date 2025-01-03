import React from 'react'
import "./footercontent.css";

function FooterContent({title, content}) {
  return (
    <div className='landingpage__footercontent'>
        <h2>{title}</h2>
        {
            content.map((item)=>(
                <div className='landingpage__footercontent-content'>
                    {
                        item
                    }
                </div>
            ))
        }
    </div>
  )
}

export default FooterContent
