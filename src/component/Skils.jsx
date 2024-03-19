import React from 'react'
import skills from './data/skils.json'
export default function Skils() {
  return (
    <div id='skils' className='container skills'>
      <h1>SKILLS</h1>
      <div className='items'>
        {
          skills.map((data)=>(
            <>
            <div className='item' key={data.title} data-aos="flip-left" data-aos-duration="1000">
              <img src={`/assets/${data.imageSrc}`} alt="skill img" />
              <h3>{data.title}</h3>
            </div>
            </>
          ))
        }
      </div>
    </div>
  )
}
