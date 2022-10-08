import React from 'react'
import c1 from '../images/ci1.jpg'
import c2 from '../images/ci2.jpg'
import c3 from '../images/ci3.jpg'
import c4 from '../images/ci4.jpg'




function Home() {
  return (

    
    <div className='corousel-css'>

<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
<div className='welcome-text-bg'>
      <div className="welcome-text-container">
          <h3 className='welcome-text'>WELCOME TO MY PAGE</h3>
      </div>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={c1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={c3} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={c4} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={c2} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
    
  )
  
}

export default Home