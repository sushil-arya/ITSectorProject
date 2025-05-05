import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router';
import TextMotionTopBottom from '../../components/Motion/TextMotionTopBottom';
import TextMotionBottomTop from '../../components/Motion/TextMotionBottomTop';
import BoxMotion from '../../components/Motion/BoxMotion';

const EnquireNow = () => {

  const ref = useRef(null);

const isInView = useInView(ref, { once: true });

const variantsRight={
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
}

useEffect(() => {
  window.scrollTo(0, 0);
  console.log(isInView);
}, [isInView]);

  return (
    <>
       {/* Navbar & Hero Start */}
      <div className="container-fluid position-relative p-0">

          {/* Header Start */}
          <div className="container-fluid bg-breadcrumb">
            <div className="container text-center py-5" style={{maxWidth: '900px'}}>
              {/* <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Contact Us</h4> */}
              <TextMotionTopBottom>
                <h4 className="text-white display-4 mb-4">Enquiry</h4>
              </TextMotionTopBottom>
              {/* <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s"> */}
              <TextMotionBottomTop>
                <ol className="breadcrumb d-flex justify-content-center mb-0">
                  <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                  {/* <li className="breadcrumb-item"><a href="#">Pages</a></li> */}
                  <li className="breadcrumb-item active text-primary">Enquire Now</li>
                </ol>
              </TextMotionBottomTop>    
            </div>
          </div>
          {/* Header End */}
        </div>
        {/* Navbar & Hero End */}
        {/* Contact Start */}
        <div className="container-fluid contact py-5">
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-xl-6">
               
                  <div className="bg-light rounded p-5 mb-5">
                    <h4 className="text-primary mb-4">Get in Touch</h4>
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="contact-add-item">
                          <div className="contact-icon text-primary mb-4">
                            <i className="fas fa-map-marker-alt fa-2x" />
                          </div>
                          <div>
                            <h4>Address</h4>
                            <p className="mb-0">123 Street New York.USA</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="contact-add-item">
                          <div className="contact-icon text-primary mb-4">
                            <i className="fas fa-envelope fa-2x" />
                          </div>
                          <div>
                            <h4>Mail Us</h4>
                            <p className="mb-0">info@example.com</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="contact-add-item">
                          <div className="contact-icon text-primary mb-4">
                            <i className="fa fa-phone-alt fa-2x" />
                          </div>
                          <div>
                            <h4>Telephone</h4>
                            <p className="mb-0">(+012) 3456 7890</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="contact-add-item">
                          <div className="contact-icon text-primary mb-4">
                            <i className="fab fa-firefox-browser fa-2x" />
                          </div>
                          <div>
                            <h4>Yoursite@ex.com</h4>
                            <p className="mb-0">(+012) 3456 7890</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              
               
              </div>

              <div className="col-xl-6">
                <motion.div className="bg-light p-5 rounded h-100 " ref={ref}
                initial="hidden"
                animate={ isInView ? "visible" : "hidden"}
                transition={{ duration: 0.4, delay: 0.9, ease: 'easeInOut' }}
                variants={variantsRight} >
                      <h4 className="text-primary">Send Your Enquiry</h4>
                      <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax &amp; PHP in a few minutes. Just copy and paste the files, add a little code and you're done. </p>
                      <form>
                        <div className="row g-4">
                          <div className="col-lg-12 col-xl-6">
                            <div className="form-floating">
                              <input type="text" className="form-control border-0" id="name" placeholder="Your Name" />
                              <label htmlFor="name">Name</label>
                            </div>
                          </div>
                          <div className="col-lg-12 col-xl-6">
                            <div className="form-floating">
                              <input type="email" className="form-control border-0" id="email" placeholder="Your Email" />
                              <label htmlFor="email">E-mail Id</label>
                            </div>
                          </div>
                          <div className="col-lg-12 col-xl-12">
                            <div className="form-floating">
                              <input type="phone" className="form-control border-0" id="phone" placeholder="Phone" />
                              <label htmlFor="phone">Contact Number</label>
                            </div>
                          </div>
                          {/* <div className="col-lg-12 col-xl-6">
                            <div className="form-floating">
                              <input type="text" className="form-control border-0" id="project" placeholder="Project" />
                              <label htmlFor="project">Your Interest</label>
                            </div>
                          </div> */}
                          <div className="col-12">
                            <div className="form-floating">
                              <input type="text" className="form-control border-0" id="subject" placeholder="Subject" />
                              <label htmlFor="subject">Enquiry For</label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-floating">
                              <textarea className="form-control border-0" placeholder="Leave a message here" id="message" style={{height: '160px'}} defaultValue={""} />
                              <label htmlFor="message">Elaborate you Enquiry</label>
                            </div>
                          </div>
                          <div className="col-12">
                            <button className="btn btn-primary w-100 py-3">Send Message</button>
                          </div>
                        </div>
                      </form>
                </motion.div>
              </div>


{/* 
              <motion.div className="col-xl-6" ref={ref}
                initial="hidden"
                animate={ isInView ? "visible" : "hidden"}
                transition={{ duration: 0.5, delay: 0.9, ease: 'easeInOut' }}
                variants={variantsRight}>
                <div className="rounded h-100">
                  <iframe className="rounded h-100 w-100" style={{height: '400px'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd" referrerPolicy="no-referrer-when-downgrade" />
                </div>
              </motion.div> */}
            </div>
          </div>
        </div>
        {/* Contact End */}
    </>
  )
}

export default EnquireNow