import React from 'react'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';
const Testimonial = () => {


  const testimonialOptions = {
    autoplay: true,
    smartSpeed: 1500,
    center: false,
    dots: true,
    loop: true,
    margin: 25,
    nav : true,
    navText : [
        '<i class="fa fa-angle-right"></i>',
        '<i class="fa fa-angle-left"></i>'
    ],
    responsiveClass: true,
    responsive: {
        0:{
            items:1
        },
        576:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:2
        },
        1200:{
            items:3
        }
    }
  };
  return (
    <>
            {/* Testimonial Start */}
            <div className="container-fluid testimonial pb-5">
              <div className="container pb-5">
                <div
                  className="text-center mx-auto pb-5 wow fadeInUp"
                  data-wow-delay="0.2s"
                  style={{ maxWidth: 800 }}
                >
                  <h4 className="text-primary">Testimonial</h4>
                  <h1 className="display-5 mb-4">Our Clients Riviews</h1>
                  <p className="mb-0">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
                    adipisci facilis cupiditate recusandae aperiam temporibus corporis
                    itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
                    obcaecati, ipsam mollitia hic.
                  </p>
                </div>
                <OwlCarousel
                  className="owl-carousel testimonial-carousel wow fadeInUp"
                  data-wow-delay="0.2s" {...testimonialOptions}
                >
                  <div className="testimonial-item">
                    <div className="testimonial-quote-left">
                      <i className="fas fa-quote-left fa-2x" />
                    </div>
                    <div className="testimonial-img">
                      <img
                        src="../img/testimonial-1.jpg"
                        className="img-fluid"
                        alt="Image"
                      />
                    </div>
                    <div className="testimonial-text">
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                        blanditiis excepturi quisquam temporibus voluptatum reprehenderit
                        culpa, quasi corrupti laborum accusamus.
                      </p>
                    </div>
                    <div className="testimonial-title">
                      <div>
                        <h4 className="mb-0">Person Name</h4>
                        <p className="mb-0">Profession</p>
                      </div>
                      <div className="d-flex text-primary">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                    </div>
                    <div className="testimonial-quote-right">
                      <i className="fas fa-quote-right fa-2x" />
                    </div>
                  </div>
                  <div className="testimonial-item">
                    <div className="testimonial-quote-left">
                      <i className="fas fa-quote-left fa-2x" />
                    </div>
                    <div className="testimonial-img">
                      <img
                        src="../img/testimonial-2.jpg"
                        className="img-fluid"
                        alt="Image"
                      />
                    </div>
                    <div className="testimonial-text">
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                        blanditiis excepturi quisquam temporibus voluptatum reprehenderit
                        culpa, quasi corrupti laborum accusamus.
                      </p>
                    </div>
                    <div className="testimonial-title">
                      <div>
                        <h4 className="mb-0">Person Name</h4>
                        <p className="mb-0">Profession</p>
                      </div>
                      <div className="d-flex text-primary">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                    </div>
                    <div className="testimonial-quote-right">
                      <i className="fas fa-quote-right fa-2x" />
                    </div>
                  </div>
                  <div className="testimonial-item">
                    <div className="testimonial-quote-left">
                      <i className="fas fa-quote-left fa-2x" />
                    </div>
                    <div className="testimonial-img">
                      <img
                        src="../img/testimonial-3.jpg"
                        className="img-fluid"
                        alt="Image"
                      />
                    </div>
                    <div className="testimonial-text">
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                        blanditiis excepturi quisquam temporibus voluptatum reprehenderit
                        culpa, quasi corrupti laborum accusamus.
                      </p>
                    </div>
                    <div className="testimonial-title">
                      <div>
                        <h4 className="mb-0">Person Name</h4>
                        <p className="mb-0">Profession</p>
                      </div>
                      <div className="d-flex text-primary">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                    </div>
                    <div className="testimonial-quote-right">
                      <i className="fas fa-quote-right fa-2x" />
                    </div>
                  </div>
                  <div className="testimonial-item">
                    <div className="testimonial-quote-left">
                      <i className="fas fa-quote-left fa-2x" />
                    </div>
                    <div className="testimonial-img">
                      <img
                        src="../img/testimonial-2.jpg"
                        className="img-fluid"
                        alt="Image"
                      />
                    </div>
                    <div className="testimonial-text">
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                        blanditiis excepturi quisquam temporibus voluptatum reprehenderit
                        culpa, quasi corrupti laborum accusamus.
                      </p>
                    </div>
                    <div className="testimonial-title">
                      <div>
                        <h4 className="mb-0">Person Name</h4>
                        <p className="mb-0">Profession</p>
                      </div>
                      <div className="d-flex text-primary">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                    </div>
                    <div className="testimonial-quote-right">
                      <i className="fas fa-quote-right fa-2x" />
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </div>
            {/* Testimonial End */}
    
    </>
  )
}

export default Testimonial