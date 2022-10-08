
import React, { useEffect } from 'react'
import {useState} from 'react'
import {IoCloseCircleOutline} from 'react-icons/io5'
import images from './designs.json'

function Designs() {
  const [zoomImg, setImage] = useState("")

    return (
        <div>

            {
                zoomImg !== "" &&
                <div className='zoomImgContainer '>
                    <div className='zoomInImage'>
                        <span className='imgclosebtn' onClick={() => setImage("")} > <IoCloseCircleOutline /></span>
                        <img src={zoomImg} alt='...' className="w-100" />
                    </div>
                </div>
}
                <div className='container'>
                  <div className='row'>
                  {
                    images.map(img =>
                      <div className='col-md-3'>
                        <img src={img.url} alt='...' className="rendered-image w-100 mt-2 mb-2 rounded" onClick={() => setImage(img.url)} />
                        </div>
                        )
                  }
                  </div>
                </div>

            
        </div >
    );
}
export default Designs