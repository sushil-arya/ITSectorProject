import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import TextMotionTopBottom from '../../components/Motion/TextMotionTopBottom';
import TextMotionBottomTop from '../../components/Motion/TextMotionBottomTop';
import InternshipSector from '../../components/ServiceSector/InternshipSector';
import FeatureSection from '../../components/FeatureSection/FeatureSection';
import TeamSection from '../../components/TeamSection/TeamSection';


const Internship = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>

       {/* Navbar & Hero Start */}
      <div className="container-fluid position-relative p-0">
      
          {/* Header Start */}
          <div className="container-fluid bg-breadcrumb">
            <div className="container text-center py-5" style={{maxWidth: '900px'}}>
              {/* <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">About Us</h4> */}
              <TextMotionTopBottom>
                <h4 className="text-white display-4 mb-4">Internship</h4>
              </TextMotionTopBottom>
              {/* <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s"> */}
              <TextMotionBottomTop>
              <ol className="breadcrumb d-flex justify-content-center mb-0">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                {/* <li className="breadcrumb-item"><a href="#">Pages</a></li> */}
                <li className="breadcrumb-item"><Link to="/service">Service</Link></li>
                <li className="breadcrumb-item active text-primary">Internship</li>
              </ol>  
              </TextMotionBottomTop>  
            </div>
          </div>
          {/* Header End */}
        </div>
        {/* Navbar & Hero End */}
        {/* Abvout Start */}
        <InternshipSector />
        {/* About End */}
        {/* Features Start */}
        <FeatureSection />
        {/* Features End */}
        {/* Team Start */}
        <TeamSection />
        {/* Team End */}

    </>
  )
}

export default Internship