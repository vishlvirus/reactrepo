import React from 'react';
import logo from '../image/logo.png';
import './NavBar.css';

const NavBar = () => {
  return (
    <section className='h-wrapper'>
      <div className='flexCenter paddings innerWidth h-container'>
        <img src={logo} alt='logo' width={70} />
        <div className='flexCenter h-menu'>
          <a href=''> Home </a>
          <a href=''> About Us </a>
          <a href=''> Services </a>
          <a href=''> Partnerships </a>
          <a href=''> Resources </a>
          <button className='button'>
            <a href=''> Contact Us </a>
          </button>
        </div>
      </div>
    </section>

  )
}

export default NavBar;