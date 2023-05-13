import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './BackToTopButton.css';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
  
      if (scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
    // Attach the scroll event listener when the component mounts
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
      <div>
        {isVisible && (
          <button className="back-to-top-button" onClick={scrollToTop}>
            <FaArrowUp />
          </button>
        )}
      </div>
    );
  };
  
  export default BackToTopButton;
  