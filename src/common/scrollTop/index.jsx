import React, { useEffect, useState } from 'react'
import "./scrollTop.scss";
import {  animateScroll as scroll } from 'react-scroll';
import { FaArrowUpLong } from 'react-icons/fa6';

const ScrollTop = () => {
    const [isTop,setTop]=useState("");
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 50) {
           setTop("top")
          } else {
            setTop("");
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
  return (
    <div className={`scroll-top-li ${isTop}`}>
    <button
    onClick={() => scroll.scrollToTop({ duration: 0 })}
   className='btn-green      p-2'
  >
  <FaArrowUpLong size={30} />
  </button>
  </div>
  )
}

export default ScrollTop