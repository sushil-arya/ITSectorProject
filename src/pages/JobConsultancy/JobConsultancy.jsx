import React, { useEffect } from 'react'
import { Link } from 'react-router'
import TextMotionTopBottom from '../../components/Motion/TextMotionTopBottom'
import TextMotionBottomTop from '../../components/Motion/TextMotionBottomTop'
import JobConsultancySector from '../../components/ServiceSector/JobConsultancySector'


const JobConsultancy = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Navbar & Hero Start */}
      <div className="container-fluid position-relative p-0">
       
        <div className="container-fluid bg-breadcrumb">
          <div className="container text-center py-5" style={{maxWidth: '900px'}}>
            {/* <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Our Features</h4> */}
            <TextMotionTopBottom>
            <h4 className="text-white display-4 mb-4">Job Consultancy Services</h4>
            </TextMotionTopBottom>
            {/* <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s"> */}
            <TextMotionBottomTop>
            <ol className="breadcrumb d-flex justify-content-center mb-0">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              {/* <li className="breadcrumb-item"><a href="#">More Info</a></li> */}
              <li className="breadcrumb-item"><Link to="/service">Service</Link></li>
              <li className="breadcrumb-item active text-primary">Job Consultancy</li>
            </ol> 
            </TextMotionBottomTop>   
          </div>
        </div>
        {/* Header End */}
      </div>
      {/* Navbar & Hero End */}
        
        {/* Feature Start */}
        {/* <div className='py-5'> */}
          <JobConsultancySector />
          
        {/* </div> */}
        {/* Feature End */}
        
    </>
  )
}

export default JobConsultancy