import React from 'react'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';

const HomeBanner = () => {

    
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
     <div className="container-fluid position-relative p-0">
         {/* Carousel Start */}
          <OwlCarousel  className="header-carousel owl-carousel" {...options}>
            <div className="header-carousel-item">
              <img src="../img/carousel-1.webp" className="img-fluid w-100" alt="Image" />
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
              <img src="../img/carousel-3.webp" className="img-fluid w-100" alt="Image" />
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
        </div>
    
    </>
  )
}

export default HomeBanner