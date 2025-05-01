import React, { useEffect, useRef } from 'react';
import TextMotion from '../Motion/TextMotion';

import { motion, useInView } from 'framer-motion';

const JobConsultancySector = () => {
  
    const ref = useRef(null);
  
    const isInView = useInView(ref, { once: true });
    
    const variants={
      hidden: { opacity: 0, y: 100 },
      visible: { opacity: 1, y: 0 },
    }
    
    useEffect(() => {
      console.log(isInView);
    }, [isInView]);
    
    
    return (
      <>
         {/* JobConsultancySector Start */}
        <div className="container-fluid feature py-5 pb-5">
          <div className="container py-5 pb-5">
          
            <TextMotion>
              <div
                className="text-center mx-auto pb-5"
                style={{ maxWidth: 800 }}
              >
                <h4 className="text-primary">Job Consultancy</h4>
                <h1 className="display-5 mb-4">
                  Connecting businesses, ideas, and people for greater impact.
                </h1>
                <p className="mb-0">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
                  adipisci facilis cupiditate recusandae aperiam temporibus corporis
                  itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
                  obcaecati, ipsam mollitia hic.
                </p>
              </div>
  
            </TextMotion>
            <div className="row g-4">
              {/* <div
                className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
                data-wow-delay="0.2s"
              > */}
              <motion.div
                className="col-md-6 col-lg-6 col-xl-4" ref={ref}
                initial="hidden"
                animate={ isInView ? "visible" : "hidden"}
                transition={{ duration: 0.4, delay: 0.2, ease: 'easeInOut' }}
                variants={variants}>
                <div className="feature-item p-4">
                  {/* <div className="feature-icon p-4 mb-4">
                    <i className="fas fa-chart-line fa-4x text-primary" />
                    <img src="../assets/img/teamwork-interview-svgrepo-com.svg" alt="" />
                  </div> */}
                  <div className="p-4 mb-2">
                    <img src="../assets/img/interview.svg" alt="" height="150px" />
                  </div>
                  
                  <h4>Interview Preparation</h4>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic
                    laborum odit pariatur...
                  </p>
                  <a className="btn btn-primary rounded-pill py-2 px-4" href="#">
                    Learn More
                  </a>
                </div>
              </motion.div>
              {/* <div
                className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
                data-wow-delay="0.4s"
              > */}
              <motion.div className="col-md-6 col-lg-6 col-xl-4" ref={ref}
                initial="hidden"
                animate={ isInView ? "visible" : "hidden"}
                transition={{ duration: 0.6, delay: 0.6, ease: 'easeInOut' }}
                variants={variants}>
  
                <div className="feature-item p-4">
                  {/* <div className="feature-icon p-4 mb-4">
                    <i className="fas fa-university fa-4x text-primary" />
                  </div> */}
                  <div className="p-4 mb-2">
                    <img src="../assets/img/teamwork-interview-svgrepo-com.svg" alt="" height="150px" />
                  </div>
                  <h4>Placement Consulting</h4>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic
                    laborum odit pariatur...
                  </p>
                  <a className="btn btn-primary rounded-pill py-2 px-4" href="#">
                    Learn More
                  </a>
                </div>
              </motion.div>
              {/* <div
                className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
                data-wow-delay="0.6s"
              > */}
              <motion.div className="col-md-6 col-lg-6 col-xl-4" ref={ref}
                initial="hidden"
                animate={ isInView ? "visible" : "hidden"}
                transition={{ duration: 0.8, delay: 0.8, ease: 'easeInOut' }}
                variants={variants}>
  
                <div className="feature-item p-4">
                  {/* <div className="feature-icon p-4 mb-4">
                    <i className="fas fa-file-alt fa-4x text-primary" />
                  </div> */}
                  <div className="p-4 mb-2">
                    <img src="../assets/img/recruitment-ondemand.svg" alt="" height="150px" />
                  </div>
                  <h4>Recruitment On-Demand</h4>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic
                    laborum odit pariatur...
                  </p>
                  <a className="btn btn-primary rounded-pill py-2 px-4" href="#">
                    Learn More
                  </a>
                </div>
              </motion.div>
              {/* <div
                className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
                data-wow-delay="0.8s"
              > */}
              {/* <motion.div className="col-md-6 col-lg-6 col-xl-3" ref={ref}
                initial="hidden"
                animate={ isInView ? "visible" : "hidden"}
                transition={{ duration: 0.9, delay: 0.8, ease: 'easeInOut' }}
                variants={variants}>
  
                <div className="feature-item p-4">
                  <div className="feature-icon p-4 mb-4">
                    <i className="fas fa-hand-holding-usd fa-4x text-primary" />
                  </div>
                  <h4>Investment Bank</h4>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic
                    laborum odit pariatur...
                  </p>
                  <a className="btn btn-primary rounded-pill py-2 px-4" href="#">
                    Learn More
                  </a>
                </div>
              </motion.div> */}
            </div>
          </div>
        </div>
        {/* JobConsultancySector End */}
      
      </>
  )
}

export default JobConsultancySector