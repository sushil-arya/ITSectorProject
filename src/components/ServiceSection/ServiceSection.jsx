import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import TextMotion from '../Motion/TextMotion';
import { Link } from 'react-router';



const ServiceSection = () => {

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
        {/* Services Start */}
        <div className="container-fluid service">
          <div className="container">
            {/* <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: '800px'}}> */}
            {/* <div className="text-center mx-auto pb-5" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" style={{maxWidth: '800px'}}> */}
          <TextMotion>
                  <div className="text-center mx-auto pb-5"
                  style={{maxWidth: '800px'}}>
                    <h4 className="text-primary">Our Services</h4>
                    <h1 className="display-5 mb-4">We Services provided best offer</h1>
                    <p className="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.
                    </p>
                  </div>
            </TextMotion>
            <motion.div className="row g-4"  ref={ref}>

              <motion.div className="col-md-6 col-lg-6" ref={ref}
                initial="hidden"
                animate={ isInView ? "visible" : "hidden"}
                
                transition={{ duration: 0.4, delay: 0.2, ease: 'easeInOut' }}
                variants={variants}>
            
                <div className="service-item">
                  <div className="service-img">
                    <img src="../assets/img/service-1.webp" className="img-fluid rounded-top w-100" alt="Image" />
                  </div>
                  <div className="rounded-bottom p-4">
                    <Link to="/service/job-consultancy" className="h4 d-inline-block mb-4">Job Consultancy</Link>
                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sint? Excepturi facilis neque nesciunt similique officiis veritatis,
                    </p>
                    <Link to="/service/job-consultancy" className="btn btn-primary rounded-pill py-2 px-4">Learn More</Link>
                  </div>
                </div>
            
              </motion.div>
              <motion.div className="col-md-6 col-lg-6" ref={ref}
                initial="hidden"
                animate={ isInView ? "visible" : "hidden"}
                
                transition={{ duration: 0.4, delay: 0.4, ease: 'easeInOut' }}
                variants={variants}>
                <div className="service-item">
                  <div className="service-img">
                    <img src="../assets/img/service-4.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                  </div>
                  <div className="rounded-bottom p-4">
                    <Link to="/service/internship" className="h4 d-inline-block mb-4">Internships</Link>
                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sint? Excepturi facilis neque nesciunt similique officiis veritatis,
                    </p>
                    <Link className="btn btn-primary rounded-pill py-2 px-4" to="/service/internship">Learn More</Link>
                  </div>
                </div>
              </motion.div>
              <motion.div className="col-md-6 col-lg-6" ref={ref}
                initial="hidden"
                animate={ isInView ? "visible" : "hidden"}
                
                transition={{ duration: 0.8, delay: 0.6, ease: 'easeInOut' }}
                variants={variants}>
              
                <div className="service-item">
                  <div className="service-img">
                    <img src="../assets/img/service-3.webp" className="img-fluid rounded-top w-100" alt="Image" />
                  </div>
                  <div className="rounded-bottom p-4">
                    <Link to="/service/IT-traning" className="h4 d-inline-block mb-4">IT Tranning</Link>
                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sint? Excepturi facilis neque nesciunt similique officiis veritatis,
                    </p>
                    <Link className="btn btn-primary rounded-pill py-2 px-4" to="/service/IT-traning">Learn More</Link>
                  </div>
                </div>
              
              </motion.div>
              <motion.div className="col-md-6 col-lg-6" ref={ref}
                initial="hidden"
                animate={ isInView ? "visible" : "hidden"}
                
                transition={{ duration: 0.6, delay: 0.4, ease: 'easeInOut' }}
                variants={variants}>
              
                <div className="service-item">
                  <div className="service-img">
                    <img src="../assets/img/service-2.webp" className="img-fluid rounded-top w-100" alt="Image" />
                  </div>
                  <div className="rounded-bottom p-4">
                    <Link to="/service/pay-roll" className="h4 d-inline-block mb-4">Payroll</Link>
                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sint? Excepturi facilis neque nesciunt similique officiis veritatis,
                    </p>
                    <Link className="btn btn-primary rounded-pill py-2 px-4" to="/service/pay-roll">Learn More</Link>
                  </div>
              
              </div>
              </motion.div>

              {/* <motion.div className="col-md-6 col-lg-4" ref={ref}
                initial="hidden"
                animate={ isInView ? "visible" : "hidden"}
                
                transition={{ duration: 0.6, delay: 0.6, ease: 'easeInOut' }}
                variants={variants}>
                <div className="service-item">
                  <div className="service-img">
                    <img src="../assets/img/service-5.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                  </div>
                  <div className="rounded-bottom p-4">
                    <a href="#" className="h4 d-inline-block mb-4">Hr Consulting</a>
                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sint? Excepturi facilis neque nesciunt similique officiis veritatis,
                    </p>
                    <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
                  </div>
                </div>
              </motion.div>
              <motion.div className="col-md-6 col-lg-4" ref={ref}
                initial="hidden"
                animate={ isInView ? "visible" : "hidden"}
                
                transition={{ duration: 0.8, delay: 0.8, ease: 'easeInOut' }}
                variants={variants}>
                <div className="service-item">
                  <div className="service-img">
                    <img src="../assets/img/service-6.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                  </div>
                  <div className="rounded-bottom p-4">
                    <a href="#" className="h4 d-inline-block mb-4">Marketing Consulting</a>
                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sint? Excepturi facilis neque nesciunt similique officiis veritatis,
                    </p>
                    <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
                  </div>
                </div>
              </motion.div> */}
            </motion.div>
          </div>
        </div>
        {/* Services End */}
    </>
  )
}

export default ServiceSection