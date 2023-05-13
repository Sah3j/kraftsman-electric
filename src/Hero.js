import React from 'react';
import './Hero.css';
import QuoteForm from './QuoteForm';
import { MdCable } from 'react-icons/md';
import { FaRegLightbulb } from 'react-icons/fa';
import { MdOutlineLocationOn } from 'react-icons/md'

function Hero() {
  return (
		<>
    <section className="hero">
      <header className="header">
        <div className='logo-section'>
            <img src='logo.png' alt="Company Logo" className="logo" />
						<h2>Kraftsman Electric</h2>
        </div>
        <nav className="navigation">
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Our Work</a></li>
            <li><a href="#contact-us">Contact Us</a></li>
          </ul>
        </nav>
      </header>
      <div className='hero-main'>
        <div className="introduction">
            <h1 className="tagline">Powering up your home, <br/>with <span className="highlight">expertise</span> and <span className="highlight">care</span></h1>
            <h2 className="description">From <span className='wiring'><MdCable style={{verticalAlign: 'text-bottom'}}/>wiring</span> to <span className='light'><FaRegLightbulb style={{verticalAlign: 'middle', paddingBottom:'0.4rem'}}/>light fixtures</span> <br/> 
                We provide high-quality electrical services <br/>all over <span className='light'><MdOutlineLocationOn style={{verticalAlign: 'middle', paddingBottom:'0.4rem'}}/>British Columbia</span></h2>
        </div>
      </div>
      <div className='main-form'>
            <QuoteForm/>
      </div>
      <div className='scroll-cta'>
			  <h3>Scroll to Explore our Services</h3>
		  </div>
      
    </section>
	</>
  );
}

export default Hero;