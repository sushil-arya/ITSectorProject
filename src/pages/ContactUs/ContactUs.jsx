import React from 'react'
import { Link } from 'react-router-dom'

const ContactUs = () => {
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
                <Link to="/index" className="nav-item nav-link">Home</Link>
                <Link to="/about" className="nav-item nav-link">About</Link>
                <Link to="/service" className="nav-item nav-link">Services</Link>
                <Link to="/blog" className="nav-item nav-link">Blogs</Link>
                <div className="nav-item dropdown">
                  <a href="#" className="nav-link" data-bs-toggle="dropdown">
                    <span className="dropdown-toggle">Pages</span>
                  </a>
                  <div className="dropdown-menu m-0">
                    <a href="feature.html" className="dropdown-item">Our Features</a>
                    <a href="team.html" className="dropdown-item">Our team</a>
                    <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                    <a href="offer.html" className="dropdown-item">Our offer</a>
                    <a href="FAQ.html" className="dropdown-item">FAQs</a>
                    <a href="404.html" className="dropdown-item">404 Page</a>
                  </div>
                </div>
                <Link to="/contact" className="nav-item nav-link active">Contact Us</Link>
              </div>
              <a href="#" className="btn btn-primary rounded-pill py-2 px-4 my-3 my-lg-0 flex-shrink-0">Get Started</a>
            </div>
          </nav> */}
          {/* Header Start */}
          <div className="container-fluid bg-breadcrumb">
            <div className="container text-center py-5" style={{maxWidth: '900px'}}>
              <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Contact Us</h4>
              <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                {/* <li className="breadcrumb-item"><a href="#">Pages</a></li> */}
                <li className="breadcrumb-item active text-primary">Contact</li>
              </ol>    
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
                <div className="wow fadeInUp" data-wow-delay="0.2s">
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
                  <div className="bg-light p-5 rounded h-100 wow fadeInUp" data-wow-delay="0.2s">
                    <h4 className="text-primary">Send Your Message</h4>
                    <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax &amp; PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a className="text-primary fw-bold" href="#">Download Now</a>.</p>
                    <form>
                      <div className="row g-4">
                        <div className="col-lg-12 col-xl-6">
                          <div className="form-floating">
                            <input type="text" className="form-control border-0" id="name" placeholder="Your Name" />
                            <label htmlFor="name">Your Name</label>
                          </div>
                        </div>
                        <div className="col-lg-12 col-xl-6">
                          <div className="form-floating">
                            <input type="email" className="form-control border-0" id="email" placeholder="Your Email" />
                            <label htmlFor="email">Your Email</label>
                          </div>
                        </div>
                        <div className="col-lg-12 col-xl-6">
                          <div className="form-floating">
                            <input type="phone" className="form-control border-0" id="phone" placeholder="Phone" />
                            <label htmlFor="phone">Your Phone</label>
                          </div>
                        </div>
                        <div className="col-lg-12 col-xl-6">
                          <div className="form-floating">
                            <input type="text" className="form-control border-0" id="project" placeholder="Project" />
                            <label htmlFor="project">Your Project</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-floating">
                            <input type="text" className="form-control border-0" id="subject" placeholder="Subject" />
                            <label htmlFor="subject">Subject</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-floating">
                            <textarea className="form-control border-0" placeholder="Leave a message here" id="message" style={{height: '160px'}} defaultValue={""} />
                            <label htmlFor="message">Message</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <button className="btn btn-primary w-100 py-3">Send Message</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.2s">
                <div className="rounded h-100">
                  <iframe className="rounded h-100 w-100" style={{height: '400px'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Contact End */}
    </>
  )
}

export default ContactUs