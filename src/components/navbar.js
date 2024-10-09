import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <div className='navbar'>

        <h1>My <span>Portfolio</span> </h1>
        <a href="#about">About</a>
        <a href="https://github.com/projects">Projects</a>
        <a href="#contact">Contact</a>
        
      
    </div>
  );
}

export default Navbar;
