import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from "react-router";


const Header = () => {


  useEffect(() => {

    
    const navLinks = document.querySelectorAll('.nav-link, .dropdown-item');
    const navbarCollapse = document.getElementById('navbarCollapse');

    const collapseNavbar = (e) => {

      const isDropdownToggle = e.target.closest('.dropdown-toggle');
      if (isDropdownToggle) return; // Don't collapse if it's the dropdown toggle
    
      if (window.innerWidth < 992) {
        const bsCollapse = new window.bootstrap.Collapse(navbarCollapse, {
          toggle: false,
        });
        bsCollapse.hide();
      }
    };

    navLinks.forEach(link => {
      link.addEventListener('click', collapseNavbar);
    });

    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', collapseNavbar);
      });
    };
  }, []);

  return (
    <>
            {/* Navbar & Hero Start */}
            <div className="container-fluid position-relative p-0">
              <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <Link to="/" className="navbar-brand p-0">
                  <h1 className="text-primary">
                    <i className="fas fa-search-dollar me-3" />
                    Stocker
                  </h1>
                  {/* <img src="img/logo.png" alt="Logo"> */}
                </Link>
                
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarCollapse"
                >
                  <span className="fa fa-bars" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                  <div className="navbar-nav ms-auto py-0">
                    <NavLink to="/" className="nav-item nav-link" exact={true} activeClassName="isActive">
                      Home
                    </NavLink>
                    {/* <NavLink to="/service" className="nav-item nav-link" exact={true} activeClassName="isActive">
                      Services
                    </NavLink> */}

                    <div className="nav-item dropdown">
                      <NavLink to="/service" className='nav-link' data-bs-toggle="dropdown" >
                        <span className="dropdown-toggle">Services</span>
                      </NavLink>
                      <div className="dropdown-menu m-0">
                        {/* <NavLink to="/service/job-consultancy" className={`dropdown-item ${(navData)=>navData.isActive ? 'active' : ''}`} >
                          Job Consultancy
                        </NavLink> */}
                      
                        <NavLink to="/service/job-consultancy" className={`dropdown-item ${(navData)=>navData.isActive ? 'active' : ''}`} >
                          Job Consultancy
                        </NavLink>
                          



                        <NavLink to="/service/internship"  className={`dropdown-item ${(navData)=>navData.isActive ? 'active' : ''}`} >
                          Internship
                        </NavLink>
                        <NavLink to="/service/IT-traning"  className={`dropdown-item ${(navData)=>navData.isActive ? 'active' : ''}`} >
                          IT Training
                        </NavLink>
                        <NavLink to="/service/pay-roll"  className={`dropdown-item ${(navData)=>navData.isActive ? 'active' : ''}`} >
                          Pay Roll
                        </NavLink>
                        {/* <NavLink to="/faqs"  className={`dropdown-item ${(navData)=>navData.isActive ? 'active' : ''}`} >
                          FAQs
                        </NavLink> */}
                      </div>
                    </div>
                    <NavLink to="/about" className="nav-item nav-link" exact={true} activeClassName="isActive">
                      About
                    </NavLink>
                    {/* <NavLink to="/blog" className="nav-item nav-link" exact={true} activeClassName="isActive">
                      Blogs
                    </NavLink> */}
                    {/* <div className="nav-item dropdown">
                      <a to="#" className='nav-link' data-bs-toggle="dropdown" >
                        <span className="dropdown-toggle">More Info</span>
                      </a>
                      <div className="dropdown-menu m-0">
                        <NavLink to="/ourfeature" className={`dropdown-item ${(navData)=>navData.isActive ? 'active' : ''}`} >
                          Our Features
                        </NavLink>
                        <NavLink to="/ourteam"  className={`dropdown-item ${(navData)=>navData.isActive ? 'active' : ''}`} >
                          Our team
                        </NavLink>
                        <NavLink to="/testimonial"  className={`dropdown-item ${(navData)=>navData.isActive ? 'active' : ''}`} >
                          Testimonial
                        </NavLink>
                        <NavLink to="/ouroffer"  className={`dropdown-item ${(navData)=>navData.isActive ? 'active' : ''}`} >
                          Our offer
                        </NavLink>
                        <NavLink to="/faqs"  className={`dropdown-item ${(navData)=>navData.isActive ? 'active' : ''}`} >
                          FAQs
                        </NavLink>
                      </div>
                    </div> */}
                    {/* <a href="404.html"  className={`dropdown-item ${(navData)=>navData.isActive ? 'active' : ''}`} >
                      404 Page
                    </a> */}
                    <NavLink to="/contact" className="nav-item nav-link" exact={true} activeClassName="isActive">
                      Contact Us
                    </NavLink>
                  </div>
                  <Link
                    to="/enquirenow"
                    className="btn btn-primary rounded-pill py-2 px-4 my-3 my-lg-0 flex-shrink-0"
                  >
                    Enquire Now
                  </Link>
                </div>
              </nav>

            </div>
            {/* Navbar & Hero End */}
    
    </>
  )
}

export default Header