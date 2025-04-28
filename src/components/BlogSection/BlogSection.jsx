import React from 'react'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';
import BoxMotion from '../Motion/BoxMotion';
import TextMotion from '../Motion/TextMotion';

const BlogSection = () => {

  
  const blogOptions = {
    autoplay: true,
    smartSpeed: 1500,
    center: false,
    dots: false,
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
      <div className="container-fluid blog pb-5">
        <div className="container pb-5">
          {/* <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{ maxWidth: 800 }}
          > */}
          <TextMotion>
            <div
              className="text-center mx-auto pb-5"
              style={{ maxWidth: 800 }}
            >
              <h4 className="text-primary">Our Blog &amp; News</h4>
              <h1 className="display-5 mb-4">Articles For Pro Traders</h1>
              <p className="mb-0">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
                adipisci facilis cupiditate recusandae aperiam temporibus corporis
                itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
                obcaecati, ipsam mollitia hic.
              </p>
            </div>
          </TextMotion>
          <BoxMotion>
            <OwlCarousel
              className="owl-carousel blog-carousel wow fadeInUp" {...blogOptions}
              data-wow-delay="0.2s"
            >
              <div className="blog-item p-4">
                <div className="blog-img mb-4">
                  <img
                    src="../assets/img/service-1.webp"
                    className="img-fluid w-100 rounded"
                    alt=""
                  />
                  <div className="blog-title">
                    <a href="#" className="btn">
                      Dividend Stocks
                    </a>
                  </div>
                </div>
                <a href="#" className="h4 d-inline-block mb-3">
                  Options Trading Business?
                </a>
                <p className="mb-4">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore aut
                  aliquam suscipit error corporis accusamus labore....
                </p>
                <div className="d-flex align-items-center">
                  <img
                    src="../assets/img/testimonial-1.jpg"
                    className="img-fluid rounded-circle"
                    style={{ width: 60, height: 60 }}
                    alt=""
                  />
                  <div className="ms-3">
                    <h5>Admin</h5>
                    <p className="mb-0">October 9, 2025</p>
                  </div>
                </div>
              </div>
              <div className="blog-item p-4">
                <div className="blog-img mb-4">
                  <img
                    src="../assets/img/service-2-3.webp"
                    className="img-fluid w-100 rounded"
                    alt=""
                  />
                  <div className="blog-title">
                    <a href="#" className="btn">
                      Non-Dividend Stocks
                    </a>
                  </div>
                </div>
                <a href="#" className="h4 d-inline-block mb-3">
                  Options Trading Business?
                </a>
                <p className="mb-4">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore aut
                  aliquam suscipit error corporis accusamus labore....
                </p>
                <div className="d-flex align-items-center">
                  <img
                    src="../assets/img/testimonial-2.jpg"
                    className="img-fluid rounded-circle"
                    style={{ width: 60, height: 60 }}
                    alt=""
                  />
                  <div className="ms-3">
                    <h5>Admin</h5>
                    <p className="mb-0">October 9, 2025</p>
                  </div>
                </div>
              </div>
              <div className="blog-item p-4">
                <div className="blog-img mb-4">
                  <img
                    src="../assets/img/service-3-1.jpg"
                    className="img-fluid w-100 rounded"
                    alt=""
                  />
                  <div className="blog-title">
                    <a href="#" className="btn">
                      Dividend Stocks
                    </a>
                  </div>
                </div>
                <a href="#" className="h4 d-inline-block mb-3">
                  Options Trading Business?
                </a>
                <p className="mb-4">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore aut
                  aliquam suscipit error corporis accusamus labore....
                </p>
                <div className="d-flex align-items-center">
                  <img
                    src="../assets/img/testimonial-3.jpg"
                    className="img-fluid rounded-circle"
                    style={{ width: 60, height: 60 }}
                    alt=""
                  />
                  <div className="ms-3">
                    <h5>Admin</h5>
                    <p className="mb-0">October 9, 2025</p>
                  </div>
                </div>
              </div>
              <div className="blog-item p-4">
                <div className="blog-img mb-4">
                  <img
                    src="../assets/img/service-4.jpg"
                    className="img-fluid w-100 rounded"
                    alt=""
                  />
                  <div className="blog-title">
                    <a href="#" className="btn">
                      Non-Dividend Stocks
                    </a>
                  </div>
                </div>
                <a href="#" className="h4 d-inline-block mb-3">
                  Options Trading Business?
                </a>
                <p className="mb-4">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore aut
                  aliquam suscipit error corporis accusamus labore....
                </p>
                <div className="d-flex align-items-center">
                  <img
                    src="../assets/img/testimonial-1.jpg"
                    className="img-fluid rounded-circle"
                    style={{ width: 60, height: 60 }}
                    alt=""
                  />
                  <div className="ms-3">
                    <h5>Admin</h5>
                    <p className="mb-0">October 9, 2025</p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </BoxMotion>
        </div>
      </div>

    </>
  )
}

export default BlogSection