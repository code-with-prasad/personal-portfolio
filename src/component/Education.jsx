import React from 'react'
import education from './data/education.json'

export default function Education() {
  return (
    <>
    <div id='experience' className="container ex">
      <h1>EDUCATION</h1>
    {
      education.map((data)=>{
        return(
          <>
          <div key={data.id} className='ex-item text-center my-5' data-aos="zoom-in" data-aos-duration="1000">
            <div className="left">
              <img src={`/assets/${data.imageSrc}`} alt="company-image" />
            </div>
            <div className="right">
              <h2>{data.name}</h2>
              <h4><span style={{color:'yellowgreen'}}>{data.startDate} {" "}{data.endDate}{" "} </span> <span style={{color:'yellow'}}>{data.location}</span></h4>
            </div>
          </div>
          </>
        )
      })
    }
    </div>
    </>
  )
}
