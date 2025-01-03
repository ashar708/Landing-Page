import React from 'react'
import "./navbar.css";
import logo from '../../assets/mainlogo.png';
import { RiMenu3Line,RiCloseLine } from 'react-icons/ri';
import { useState } from 'react';
import "../../App.css";

const Menu = () => {
  return (
    <>
     <p><a href='#home'>Home</a></p>
     <p><a href='#service'>Service</a></p>
     <p><a href='#feature'>Feature</a></p>
     <p><a href='#product'>Product</a></p>
     <p><a href='#testimonial'>Testimonial</a></p>
     <p><a href='#faq'>FAQ's</a></p>
    </>
  )
}


function Navbar() {

  const [toggleState, setToggleState] = useState(false);

  return (
    <div className='landingpage__navbar'>
      <div className='landingpage__navbar-logo'>
        <img src={logo} alt='logo'/>
      </div>
      <div className='landingpage__navbar-links'>
       <Menu/>
      </div>
      <div className='landingpage__navbar-btn'>
        <button type='button' className='landingpage__navbar-btn_login'>Login</button>
        <button type='button' className='landingpage__navbar-btn_signup'>Sign Up</button>
      </div>
      <div className='landingpage__navbar-togglemenu'>
        {
          toggleState
          ? <RiCloseLine color='black' size={27} onClick={()=>setToggleState(false)} />
          : <RiMenu3Line color='black' size={27} onClick={()=>setToggleState(true)}/> 
        }
        {
          toggleState && (
            <div className='landingpage__navbar-links_container scale-up-center'>
              <div className='landingpage__navbar-links_toggle-container'>
              <Menu/>
                <div className='landingpage__navbar-links_toggle-container-sign'>
                  <button type='button'>Login</button>
                  <button type='button'>Sign Up</button>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar
