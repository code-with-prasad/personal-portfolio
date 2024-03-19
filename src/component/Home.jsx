import React, { useEffect, useRef } from 'react'
import pdf from '../component/pdf/resume.pdf'

import Typed from 'typed.js'

// image import 
import hero from './data/hero.json'
export default function Home() {
  const typedRef = useRef(null)
  useEffect(()=>{
    const option = {
      strings : ["Welcome to my profile ", "My name i M Prasad", "I am Frontend Developer", "React Developer "],
      typeSpeed : 50,
      backSpeed : 50,
      loop:true
    }

    const typed = new Typed(typedRef.current, option)

    return()=>{
      typed.destroy();
    }
  },[])
  return (
    <div id='home' className='container home'>
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
            <h1 ref={typedRef}></h1>
            <a href={pdf} download="resume.pdf" className="btn btn-outline-warning my-3">Download Resume</a>
        </div>
        <div className="right" data-aos="fade-up-left" data-aos-duration="1000">
            <div className="img">
                <img src={`/assets/${hero.imgSrc}`} alt="hero image" />
            </div>
        </div>
    </div>
  )
}
