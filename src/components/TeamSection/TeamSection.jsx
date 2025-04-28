import React, { useEffect, useRef } from 'react';
import TextMotion from '../Motion/TextMotion';

import { motion, useInView } from 'framer-motion';

const TeamSection = () => {

  
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });
  
  const variants={
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  }
  
  useEffect(() => {
    console.log(isInView);
  }, [isInView]);
  
  
  return (
    <>
      {/* Team Start */}
      <div className="container-fluid team pb-5">
        <div className="container pb-5">
          {/* <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{ maxWidth: 800 }}
          > */}
          <TextMotion>
            <div
              className="text-center mx-auto pb-5 wow fadeInUp"
              data-wow-delay="0.2s"
              style={{ maxWidth: 800 }}
            >
              <h4 className="text-primary">Our Team</h4>
              <h1 className="display-5 mb-4">Meet Our Advisers</h1>
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
              className="col-md-6 col-lg-6 col-xl-3" ref={ref}
              initial="hidden"
              animate={ isInView ? "visible" : "hidden"}
              transition={{ duration: 0.4, delay: 0.2, ease: 'easeInOut' }}
              variants={variants}>
              <div className="team-item">
                <div className="team-img">
                  <img src="./assets/img/team-1.jpg" className="img-fluid" alt="" />
                </div>
                <div className="team-title">
                  <h4 className="mb-0">David James</h4>
                  <p className="mb-0">Profession</p>
                </div>
                <div className="team-icon">
                  <a
                    className="btn btn-primary btn-sm-square rounded-circle me-3"
                    href=""
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square rounded-circle me-3"
                    href=""
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square rounded-circle me-3"
                    href=""
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square rounded-circle me-0"
                    href=""
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </motion.div>
            {/* <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.4s"
            > */}
            <motion.div
              className="col-md-6 col-lg-6 col-xl-3" ref={ref}
              initial="hidden"
              animate={ isInView ? "visible" : "hidden"}
              transition={{ duration: 0.6, delay: 0.4, ease: 'easeInOut' }}
              variants={variants}>
              <div className="team-item">
                <div className="team-img">
                  <img src="./assets/img/team-2.jpg" className="img-fluid" alt="" />
                </div>
                <div className="team-title">
                  <h4 className="mb-0">David James</h4>
                  <p className="mb-0">Profession</p>
                </div>
                <div className="team-icon">
                  <a
                    className="btn btn-primary btn-sm-square rounded-circle me-3"
                    href=""
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square rounded-circle me-3"
                    href=""
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square rounded-circle me-3"
                    href=""
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square rounded-circle me-0"
                    href=""
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </motion.div>
            {/* <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.6s"
            > */}
            <motion.div
              className="col-md-6 col-lg-6 col-xl-3" ref={ref}
              initial="hidden"
              animate={ isInView ? "visible" : "hidden"}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeInOut' }}
              variants={variants}
            >
              <div className="team-item">
                <div className="team-img">
                  <img src="./assets/img/team-3.jpg" className="img-fluid" alt="" />
                </div>
                <div className="team-title">
                  <h4 className="mb-0">David James</h4>
                  <p className="mb-0">Profession</p>
                </div>
                <div className="team-icon">
                  <a
                    className="btn btn-primary btn-sm-square rounded-circle me-3"
                    href=""
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square rounded-circle me-3"
                    href=""
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square rounded-circle me-3"
                    href=""
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square rounded-circle me-0"
                    href=""
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </motion.div>
            {/* <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.8s"
            > */}
            <motion.div
              className="col-md-6 col-lg-6 col-xl-3" ref={ref}
              initial="hidden"
              animate={ isInView ? "visible" : "hidden"}
              transition={{ duration: 0.9, delay: 0.8, ease: 'easeInOut' }}
              variants={variants}
            >
              <div className="team-item">
                <div className="team-img">
                  <img src="./assets/img/team-4.jpg" className="img-fluid" alt="" />
                </div>
                <div className="team-title">
                  <h4 className="mb-0">David James</h4>
                  <p className="mb-0">Profession</p>
                </div>
                <div className="team-icon">
                  <a
                    className="btn btn-primary btn-sm-square rounded-circle me-3"
                    href=""
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square rounded-circle me-3"
                    href=""
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square rounded-circle me-3"
                    href=""
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square rounded-circle me-0"
                    href=""
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Team End */}
    </>
  )
}

export default TeamSection