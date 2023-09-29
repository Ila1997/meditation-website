import React from 'react';
import lotus from '../img/lotus.png';
import { IconContext } from "react-icons";
import { PiGithubLogoBold, PiInstagramLogoBold, PiLinkedinLogoBold } from "react-icons/pi";




const Header = () => {
  return (
    <header className="App-header">
      <img src={lotus} alt="lesa" className="lotus" />

    <div className='header-section'>


  <h2 className="header-title"> Meditation
  </h2>
  <div className='social-icons'>
  <IconContext.Provider value={{ className:"social-icons" }}>
  <a href="https://github.com/Ila1997" rel="noopener" target="_blank" className='social-icon'>
    <PiGithubLogoBold />
    </a> 
    <a href="https://www.instagram.com/ilaria.nuzzaco/" rel="noopener" target="_blank"className='social-icon' >
    <PiInstagramLogoBold />
    </a>
    <a href="https://it.linkedin.com/in/ilaria-nuzzaco-front-end-developer" rel="noopener" target="_blank" className='social-icon'>
    <PiLinkedinLogoBold />
    </a>
  </IconContext.Provider>
        </div>

      </div>
      <img src={lotus} alt="lesa" className="lotus" />
    </header>
  );
};


export default Header;