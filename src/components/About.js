import React from 'react'
import art from '../images/art.png'
function About() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 text-center'>
          <img src={art} className = 'artpng' alt='...'/>
          
        </div>
        <div className='col-md-6 m-auto'>
        <p className='aboutme m-auto'>Hello, Iam SAICHARAN a graphic designer. I will create social media posts such as CDP, Flyers, Logos, Banners. I design eye-catching and creative posts. If you have any work then discuss it with me. I am available to solve your problem with my skills and experience.

Feel free to get in touch with me.I am always open to discussing new projects, creative ideas or opportunities to be a part of your vision.

</p>
<h6 className='mt-4 tag text-center'>My creative mind is my strongest weapon</h6>

        </div>
      </div>


     


     
    </div>
  )
}

export default About