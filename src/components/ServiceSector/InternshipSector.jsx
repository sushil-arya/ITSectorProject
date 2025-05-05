import React, { useEffect, useRef } from 'react';
import TextMotion from '../Motion/TextMotion';
import { motion, useInView } from 'framer-motion';

const InternshipSector = () => {
  const ref = useRef(null);
      
    const isInView = useInView(ref, { once: true });
    
    const variantsLeft={
      hidden: { opacity: 0, x: -75 },
      visible: { opacity: 1, x: 0 },
    }
  
    const variantsRight={
      hidden: { opacity: 0, x: 75 },
      visible: { opacity: 1, x: 0 },
    }
    
    useEffect(() => {
      console.log(isInView);
    }, [isInView]);
  

  return (
    <>
            {/* Internship Start */}
            <div className="container-fluid feature">
              <div className="container py-5">
                <div className="row g-5 align-items-center">
                
                  <motion.div className="col-xl-7" ref={ref}
                    initial="hidden"
                    animate={ isInView ? "visible" : "hidden"}
                    transition={{ duration: 0.4, delay: 0.2, ease: 'easeInOut' }}
                    variants={variantsLeft}>
                    <div>
                      <h4 className="text-primary">Internship Program</h4>
                      <h1 className="display-5 mb-4">
                        Meet our company unless miss the opportunity
                      </h1>
                      <p className="mb-4">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
                        velit temporibus repudiandae ipsa, eaque perspiciatis cumque
                        incidunt tenetur sequi reiciendis.
                      </p>
                      <div className="row g-4">
                        <div className="col-md-6 col-lg-6 col-xl-6">
                          <div className="d-flex">
                            <div>
                              <i className="fas fa-lightbulb fa-3x text-primary" />
                            </div>
                            <div className="ms-4">
                              <h4>Business Consuluting</h4>
                              <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-6">
                          <div className="d-flex">
                            <div>
                              <i className="bi bi-bookmark-heart-fill fa-3x text-primary" />
                            </div>
                            <div className="ms-4">
                              <h4>Year Of Expertise</h4>
                              <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <a
                            href="#"
                            className="btn btn-primary rounded-pill py-3 px-5 flex-shrink-0"
                          >
                            Discover Now
                          </a>
                        </div>
                        <div className="col-sm-6">
                          <div className="d-flex">
                            <i className="fas fa-phone-alt fa-2x text-primary me-4" />
                            <div>
                              <h4>Call Us</h4>
                              <p className="mb-0 fs-5" style={{ letterSpacing: 1 }}>
                                +01234567890
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div
                   className="col-md-6 col-lg-6 col-xl-5" ref={ref}
                  initial="hidden"
                  animate={ isInView ? "visible" : "hidden"}
                  transition={{ duration: 0.4, delay: 0.2, ease: 'easeInOut' }}
                  variants={variantsRight}>
                  <div className="feature-item p-4">
                    <div className="p-4 mb-4">
                      <img src="../assets/img/academic_internship.png" alt="" height="150px" />
                    </div>
                    
                    
                    <h4>Academic Internship</h4>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic
                      laborum odit pariatur...
                    </p>
                    <a className="btn btn-primary rounded-pill py-2 px-4" href="#">
                      Learn More
                    </a>
                  </div>
                </motion.div>
                </div>
              </div>
            </div>
            {/* Internship End */}

    </>
  )
}

export default InternshipSector