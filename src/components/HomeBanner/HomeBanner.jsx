import React, { useEffect, useRef } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router';
import TextMotion from '../Motion/TextMotion';
import TextMotionBottomTop from '../Motion/TextMotionBottomTop';
import { motion, useInView } from 'framer-motion';

const HomeBanner = () => {

  const ref = useRef(null);
  
  const isInView = useInView(ref, { once: true });
  
  const variants={
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  }
  
  useEffect(() => {
    console.log(isInView);
  }, [isInView]);
  
  

    
  const options = {
    animateOut: 'fadeOut',
    items: 1,
    margin: 0,
    stagePadding: 0,
    autoplay: true,
    smartSpeed: 500,
    dots: true,
    loop: true,
    nav : true,
    navText : [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>'
    ],
  };

  return (
    <>
     <div className="hero container-fluid position-relative p-0">
         {/* Carousel Start */}
          <OwlCarousel  className="header-carousel owl-carousel" {...options}>
            <div className="header-carousel-item">
              <img src="../assets/img/carousel-1.webp" className="img-fluid w-100" alt="Image" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row gy-0 gx-5">
                    <div className="col-lg-0 col-xl-5"></div>
                    <div className="col-xl-7 animated fadeInLeft">
                      <div className="text-sm-center text-md-end">
                        <h4 className="text-primary text-uppercase fw-bold mb-4">
                          Welcome To Stocker
                        </h4>
                        <h1 className="display-4 text-uppercase text-white mb-4">
                          Invest your money with higher return
                        </h1>
                        <p className="mb-5 fs-5">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the industry's
                          standard dummy...
                        </p>
                        <div className="d-flex justify-content-center justify-content-md-end flex-shrink-0 mb-4">
                          <a
                            className="btn btn-light rounded-pill py-3 px-4 px-md-5 me-2"
                            href="#"
                          >
                            <i className="fas fa-play-circle me-2" /> Watch Video
                          </a>
                          <a
                            className="btn btn-primary rounded-pill py-3 px-4 px-md-5 ms-2"
                            href="#"
                          >
                            Learn More
                          </a>
                        </div>
                        <div className="d-flex align-items-center justify-content-center justify-content-md-end">
                          <h2 className="text-white me-2">Follow Us:</h2>
                          <div className="d-flex justify-content-end ms-2">
                            <a
                              className="btn btn-md-square btn-light rounded-circle me-2"
                              href=""
                            >
                              <i className="fab fa-facebook-f" />
                            </a>
                            <a
                              className="btn btn-md-square btn-light rounded-circle mx-2"
                              href=""
                            >
                              <i className="fab fa-twitter" />
                            </a>
                            <a
                              className="btn btn-md-square btn-light rounded-circle mx-2"
                              href=""
                            >
                              <i className="fab fa-instagram" />
                            </a>
                            <a
                              className="btn btn-md-square btn-light rounded-circle ms-2"
                              href=""
                            >
                              <i className="fab fa-linkedin-in" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

      
            </div>
            
            <div className="header-carousel-item">
              <img src="../assets/img/carousel-3.webp" className="img-fluid w-100" alt="Image" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row g-5">
                    <div className="col-12 animated fadeInUp">
                      <div className="text-center">
                        <h4 className="text-primary text-uppercase fw-bold mb-4">
                          Welcome To Stocker
                        </h4>
                        <h1 className="display-4 text-uppercase text-white mb-4">
                          Invest your money with higher return
                        </h1>
                        <p className="mb-5 fs-5">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the industry's
                          standard dummy...
                        </p>
                        <div className="d-flex justify-content-center flex-shrink-0 mb-4">
                          <a
                            className="btn btn-light rounded-pill py-3 px-4 px-md-5 me-2"
                            href="#"
                          >
                            <i className="fas fa-play-circle me-2" /> Watch Video
                          </a>
                          <a
                            className="btn btn-primary rounded-pill py-3 px-4 px-md-5 ms-2"
                            href="#"
                          >
                            Learn More
                          </a>
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                          <h2 className="text-white me-2">Follow Us:</h2>
                          <div className="d-flex justify-content-end ms-2">
                            <a
                              className="btn btn-md-square btn-light rounded-circle me-2"
                              href=""
                            >
                              <i className="fab fa-facebook-f" />
                            </a>
                            <a
                              className="btn btn-md-square btn-light rounded-circle mx-2"
                              href=""
                            >
                              <i className="fab fa-twitter" />
                            </a>
                            <a
                              className="btn btn-md-square btn-light rounded-circle mx-2"
                              href=""
                            >
                              <i className="fab fa-instagram" />
                            </a>
                            <a
                              className="btn btn-md-square btn-light rounded-circle ms-2"
                              href=""
                            >
                              <i className="fab fa-linkedin-in" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>
        {/* Carousel End */}

        <TextMotion>
        <div className="mt-5 icon-boxes position-relative aos-init aos-animate" data-aos="fade-up" data-aos-delay={200}>
              <div className="container position-relative">
                <div className="row gy-4 mt-5">
                  {/* <div className="col-xl-3 col-md-6"> */}
                  <motion.div
                    className="col-xl-3 col-md-6" ref={ref}
                    initial="hidden"
                    animate={ isInView ? "visible" : "hidden"}
                    transition={{ duration: 0.5, delay: 0.4, ease: 'easeInOut' }}
                    variants={variants}>
                    <div className="icon-box">
                      {/* <div className="icon"><i className="bi bi-easel" /></div> */}
                      <div className="icon">
                        <i className="bi bi-people" />
                      </div>
                      <h4 className="title"><Link to="/service/job-consultancy" className="stretched-link">Job Consultancy</Link></h4>
                    </div>
                  </motion.div>{/*End Icon Box */}
                  <motion.div className="col-xl-3 col-md-6" ref={ref}
                    initial="hidden"
                    animate={ isInView ? "visible" : "hidden"}
                    transition={{ duration: 0.6, delay: 0.6, ease: 'easeInOut' }}
                    variants={variants}>
                      
                    <div className="icon-box">
                       {/* <div className="icon"><i className="bi bi-gem" /></div> */}
                      <div className="icon"><i className="bi bi-briefcase" /></div>
                      <h4 className="title"><Link to="/service/internship" className="stretched-link">Internships</Link></h4>
                    </div>
                  </motion.div>{/*End Icon Box */}
                  <motion.div className="col-xl-3 col-md-6" ref={ref}
                    initial="hidden"
                    animate={ isInView ? "visible" : "hidden"}
                    transition={{ duration: 0.8, delay: 0.8, ease: 'easeInOut' }}
                    variants={variants}>
                    <div className="icon-box">
                      <div className="icon">
                        <i class="bi bi-pc-display-horizontal" />
                      </div>

                      {/* <div className="icon"><i className="bi bi-geo-alt" /></div> */}
                      <h4 className="title"><Link  to="/service/IT-traning" className="stretched-link">IT Training</Link></h4>
                    </div>
                    
                  </motion.div>{/*End Icon Box */}
                  <motion.div className="col-xl-3 col-md-6"ref={ref}
                  initial="hidden"
                  animate={ isInView ? "visible" : "hidden"}
                  transition={{ duration: 0.9, delay: 0.9, ease: 'easeInOut' }}
                  variants={variants}>
                    <div className="icon-box">
                      {/* <div className="icon"><i className="bi bi-command" /></div> */}
                      <div className="icon"><i className="bi bi-cash-stack" /></div>
                      <h4 className="title"><Link to="/service/pay-roll" className="stretched-link">Pay Roll</Link></h4>
                    </div>
                  </motion.div>{/*End Icon Box */}
                </div>
              </div>
              
        </div>
        </TextMotion>
      </div>
    
    </>
  )
}

export default HomeBanner