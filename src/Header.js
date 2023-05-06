import React from 'react';
import './Header.css'
import {Link} from 'react-router-dom'
function Header() {
  return (
    <>
    <header>
      <nav className='nav-area'>
        <ul>
        <div className='div1'>
        <Link to="/"><a href="#" className='hello'>Header</a></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/About"><a href="#" className='hello'>About</a></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/Projects"><a href="#" className='hello'>Projects</a></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/Contact"><a href="#" className='hello'>Contact</a></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
        </ul>
      </nav>
    </header>
    <body>
    <h2 className='headh2'>Welcome to my Portfolio</h2>
    <img src="https://i-cdn.embed.ly/1/display/crop?height=300&key=fd92ebbc52fc43fb98f69e50e7893c13&url=https%3A%2F%2Fimages.adsttc.com%2Fmedia%2Fimages%2F564c%2F129b%2Fe58e%2Fce8c%2F4200%2F01a4%2Flarge_jpg%2F12270481_10153781963884380_1486050979_n.jpg%3F1447826070&width=636" className='hi'></img>
    </body>
    </>
  );
}

export default Header;