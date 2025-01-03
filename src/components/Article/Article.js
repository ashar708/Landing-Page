import React from 'react'
import "./article.css";

function Article({logo,number,info}) {
  return (
    <div className='landingpage__article-container'>
        <div className='landingpage__article-logos'>
            <img src={logo} alt='i'/>
        </div>
        <div className='landingpage__article-headings'>
            <h1>{number}</h1>
            <p>{info}</p>
        </div>
    </div>
  )
}

export default Article
