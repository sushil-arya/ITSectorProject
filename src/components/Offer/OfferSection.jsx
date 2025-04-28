import React, { useEffect, useRef } from 'react';
import TextMotion from '../Motion/TextMotion';

import { motion, useInView } from 'framer-motion';

const OfferSection = () => {

  
    const ref = useRef(null);
  
    const isInView = useInView(ref, { once: true });
    
    const variantsLeft={
      hidden: { opacity: 0, x: -60 },
      visible: { opacity: 1, x: 0 },
    }

    const variantsRight={
      hidden: { opacity: 0, x: 60 },
      visible: { opacity: 1, x: 0 },
    }
    
    useEffect(() => {
      console.log(isInView);
    }, [isInView]);
    
  return (
    <>
            <div className="container-fluid offer-section pb-5">
        <div className="container pb-5">
          {/* <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{ maxWidth: 800 }}
          > */}
          <TextMotion>
            <div
              className="text-center mx-auto pb-5"
              data-wow-delay="0.2s"
              style={{ maxWidth: 800 }}
            >
              <h4 className="text-primary">Our Offer</h4>
              <h1 className="display-5 mb-4">Benefits We offer</h1>
              <p className="mb-0">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
                adipisci facilis cupiditate recusandae aperiam temporibus corporis
                itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
                obcaecati, ipsam mollitia hic.
              </p>
            </div>
          </TextMotion>
          <div className="row g-5 align-items-center">
            {/* <div className="col-xl-5 wow fadeInLeft" data-wow-delay="0.2s"> */}
            {/* <BoxMotionLeftRight> */}
              <motion.div className="col-xl-5" 
              ref={ref}
              initial="hidden"
              animate={ isInView ? "visible" : "hidden"}
              
              transition={{ duration: 0.4, delay: 0.2, ease: 'easeInOut' }}
              variants={variantsLeft}>
                <div className="nav nav-pills bg-light rounded p-5">
                  <a
                    className="accordion-link p-4 active mb-4"
                    data-bs-toggle="pill"
                    href="#collapseOne"
                  >
                    <h5 className="mb-0">
                      Lending money for investment of your new projects
                    </h5>
                  </a>
                  <a
                    className="accordion-link p-4 mb-4"
                    data-bs-toggle="pill"
                    href="#collapseTwo"
                  >
                    <h5 className="mb-0">
                      Lending money for investment of your new projects
                    </h5>
                  </a>
                  <a
                    className="accordion-link p-4 mb-4"
                    data-bs-toggle="pill"
                    href="#collapseThree"
                  >
                    <h5 className="mb-0">
                      Mobile payment is more flexible and easy for all investors
                    </h5>
                  </a>
                  <a
                    className="accordion-link p-4 mb-0"
                    data-bs-toggle="pill"
                    href="#collapseFour"
                  >
                    <h5 className="mb-0">
                      all transaction is kept free for the member of pro traders
                    </h5>
                  </a>
                </div>
              </motion.div>
            {/* </BoxMotionLeftRight> */}
            {/* <div className="col-xl-7 wow fadeInRight" data-wow-delay="0.4s"> */}
            <motion.div className="col-xl-7" ref={ref}
              initial="hidden"
              animate={ isInView ? "visible" : "hidden"}
              
              transition={{ duration: 0.6, delay: 0.4, ease: 'easeInOut' }}
              variants={variantsRight}>
              <div className="tab-content">
                <div id="collapseOne" className="tab-pane fade show p-0 active">
                  <div className="row g-4">
                    <div className="col-md-7">
                      <img
                        src="../assets/img/offer-1.jpg"
                        className="img-fluid w-100 rounded"
                        alt=""
                      />
                    </div>
                    <div className="col-md-5">
                      <h1 className="display-5 mb-4">
                        The stock market provides a venue...
                      </h1>
                      <p className="mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Corporis amet sequi molestiae tenetur eum mollitia,
                        blanditiis, magnam illo magni error dolore unde perspiciatis
                        tempore et totam corrupti dignissimos aut praesentium?
                      </p>
                      <a
                        className="btn btn-primary rounded-pill py-2 px-4"
                        href="#"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
                <div id="collapseTwo" className="tab-pane fade show p-0">
                  <div className="row g-4">
                    <div className="col-md-7">
                      <img
                        src="../assets/img/offer-2.jpg"
                        className="img-fluid w-100 rounded"
                        alt=""
                      />
                    </div>
                    <div className="col-md-5">
                      <h1 className="display-5 mb-4">
                        The stock market provides a venue...
                      </h1>
                      <p className="mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Corporis amet sequi molestiae tenetur eum mollitia,
                        blanditiis, magnam illo magni error dolore unde perspiciatis
                        tempore et totam corrupti dignissimos aut praesentium?
                      </p>
                      <a
                        className="btn btn-primary rounded-pill py-2 px-4"
                        href="#"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
                <div id="collapseThree" className="tab-pane fade show p-0">
                  <div className="row g-4">
                    <div className="col-md-7">
                      <img
                        src="../assets/img/offer-3.jpg"
                        className="img-fluid w-100 rounded"
                        alt=""
                      />
                    </div>
                    <div className="col-md-5">
                      <h1 className="display-5 mb-4">
                        The stock market provides a venue...
                      </h1>
                      <p className="mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Corporis amet sequi molestiae tenetur eum mollitia,
                        blanditiis, magnam illo magni error dolore unde perspiciatis
                        tempore et totam corrupti dignissimos aut praesentium?
                      </p>
                      <a
                        className="btn btn-primary rounded-pill py-2 px-4"
                        href="#"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
                <div id="collapseFour" className="tab-pane fade show p-0">
                  <div className="row g-4">
                    <div className="col-md-7">
                      <img
                        src="../assets/img/offer-4.jpg"
                        className="img-fluid w-100 rounded"
                        alt=""
                      />
                    </div>
                    <div className="col-md-5">
                      <h1 className="display-5 mb-4">
                        The stock market provides a venue...
                      </h1>
                      <p className="mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Corporis amet sequi molestiae tenetur eum mollitia,
                        blanditiis, magnam illo magni error dolore unde perspiciatis
                        tempore et totam corrupti dignissimos aut praesentium?
                      </p>
                      <a
                        className="btn btn-primary rounded-pill py-2 px-4"
                        href="#"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default OfferSection