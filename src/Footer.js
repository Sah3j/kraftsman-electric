import React from 'react';
import './Footer.css'
import { CgSmartphone } from 'react-icons/cg'
import { MdOutlineMailOutline } from 'react-icons/md'
import { BsInstagram } from 'react-icons/bs'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <h3 className="footer-title">GET <br/>IN TOUCH.</h3>
        <div className="footer-contact">
            <a href="tel:+17788831313" className='footer-phone'><CgSmartphone size={25} style={{verticalAlign: 'middle'}}/>(778) 883-1313</a>
            <a href="mailto:kelectric17@gmail.com" className="footer-email"><MdOutlineMailOutline size={25} style={{verticalAlign: 'middle'}}/> <span style={{paddingLeft:'0.3rem'}}>kelectric17@gmail.com</span></a>
            <a href="https://www.instagram.com/kraftsmanelectric" className="footer-instagram"><BsInstagram size={23} style={{verticalAlign: 'middle'}}/><span style={{paddingLeft:'0.3rem'}}>kraftsmanelectric</span></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;