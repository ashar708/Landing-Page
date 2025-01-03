import React from 'react';
import {logo} from "./import";
import FooterContent from '../FooterContent/FooterContent';
import "./footer.css";


function Footer() {
  return (
    <div className='landingpage__footer-container' id='faq'>
        <div className='landingpage__footer-color1'>
        <div className='landingpage__footer-headings'>
            <h1>Pellentesque suscipit fringilla libero eu.</h1>
            <button>Get a Demo</button>
        </div>
        </div>
        <div className='landingpage__footer-color2'>
        <div className='landingpage__footer-sub-container'>
            <div className='langinpage__footer-left-container'>
                <img src={logo} alt='mainlogo'/>
                <p className='para-part1'>Copyright © 2020 Nexcent ltd.</p>
                <p className='para-part2'>All rights reserved</p>
                <div className='landingpage__footer-logos'>
                    <p>Insta</p>
                    <p>Youtube</p>
                    <p>Gmail</p>
                    <p>Twitter</p>
                </div>
            </div>
            <div className='landingpage__footer-right-container'>
                <FooterContent title={"Company"} content={['About Us','Blog','Contact Us', 'Pricing','Testimonials']}/>
                <FooterContent title={"Support"} content={['Help Center', 'Terms of Service','Legal', 'Privacy Policy','Status']}/>
            </div>
            <div className='landingpage__footer-stayuptodate'>
                <p>Stay up to date</p>
                <input type='text' placeholder='Your Email Address'/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer
