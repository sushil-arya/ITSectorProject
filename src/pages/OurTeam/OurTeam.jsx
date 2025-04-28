import React from 'react';
import { Link } from 'react-router-dom';
import TeamSection from '../../components/TeamSection/TeamSection';
import TextMotionTopBottom from '../../components/Motion/TextMotionTopBottom';
import TextMotionBottomTop from '../../components/Motion/TextMotionBottomTop';


const OurTeam = () => {
  return (
    <>
        {/* Navbar & Hero Start */}
        <div className="container-fluid position-relative p-0">
        {/* <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <a href className="navbar-brand p-0">
            <h1 className="text-primary"><i className="fas fa-search-dollar me-3" />Stocker</h1>
            
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <a href="index.html" className="nav-item nav-link">Home</a>
              <a href="about.html" className="nav-item nav-link">About</a>
              <a href="service.html" className="nav-item nav-link">Services</a>
              <a href="blog.html" className="nav-item nav-link">Blogs</a>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link active" data-bs-toggle="dropdown">
                  <span className="dropdown-toggle">Pages</span>
                </a>
                <div className="dropdown-menu m-0">
                  <a href="feature.html" className="dropdown-item">Our Features</a>
                  <a href="team.html" className="dropdown-item active">Our team</a>
                  <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                  <a href="offer.html" className="dropdown-item">Our offer</a>
                  <a href="FAQ.html" className="dropdown-item">FAQs</a>
                  <a href="404.html" className="dropdown-item">404 Page</a>
                </div>
              </div>
              <a href="contact.html" className="nav-item nav-link">Contact Us</a>
            </div>
            <a href="#" className="btn btn-primary rounded-pill py-2 px-4 my-3 my-lg-0 flex-shrink-0">Get Started</a>
          </div>
        </nav> */}
        {/* Header Start */}
        <div className="container-fluid bg-breadcrumb">
          <div className="container text-center py-5" style={{maxWidth: '900px'}}>
            {/* <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Our Team</h4> */}
            <TextMotionTopBottom>
              <h4 className="text-white display-4 mb-4">Our Team</h4>
            </TextMotionTopBottom>
            <TextMotionBottomTop>
            {/* <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s"> */}
            <ol className="breadcrumb d-flex justify-content-center mb-0" >
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              {/* <li className="breadcrumb-item"><a href="#">Pages</a></li> */}
              <li className="breadcrumb-item active text-primary">Team</li>
            </ol>
            </TextMotionBottomTop>  
          </div>
        </div>
        {/* Header End */}
      </div>
      {/* Navbar & Hero End */}
        
        {/* Team Start */}
        <div className='py-5'>
        <TeamSection />
        </div>
        {/* Team End */}
    
    </>
  )
}

export default OurTeam