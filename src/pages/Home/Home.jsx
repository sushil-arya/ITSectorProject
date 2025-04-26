import React from 'react'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';
// import WOW from 'wowjs';
// import '/public/libs/wow/wow.min.js';
// import '/public/libs/wow/animate.css';
import $ from 'jquery';
import Testimonial from '../../components/Testimonial/Testimonial';
import HomeBanner from '../../components/HomeBanner/HomeBanner';
import OfferSection from '../../components/Offer/OfferSection';
import FaqSection from '../../components/FaqSection/FaqSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import TeamSection from '../../components/TeamSection/TeamSection';
import FeatureSection from '../../components/FeatureSection/FeatureSection';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import AboutUsSection from '../../components/AboutUsSection/AboutUsSection';

const Home = () => {

   // Spinner
//  var spinner = function () {
//   setTimeout(function () {
//       if ($('#spinner').length > 0) {
//           $('#spinner').removeClass('show');
//       }
//   }, 1);
// };
// spinner(0);

  // new WOW.WOW({
  //       live: false
  //   }).init();



  return (
    
    <>
      {/* Spinner Start */}
      {/* <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div
          className="spinner-border text-primary"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div> */}

      {/* Spinner End */}

      {/* Topbar Start */}
      {/* <HeaderTop /> */}
      {/* Topbar End */}
      {/* Navbar & Hero Start */}
      {/* <Header /> */}

      {/* Carousel Start */}
      <HomeBanner />
      {/* Carousel End */}
      {/* Navbar & Hero End */}
      {/* About Start */}
      <AboutUsSection />
      {/* About End */}
      {/* Services Start */}
      <ServiceSection />
      {/* Services End */}
      {/* Features Start */}
      <FeatureSection />
      {/* Features End */}
      {/* Offer Start */}
      <OfferSection />
      {/* Offer End */}
      {/* Blog Start */}
      <BlogSection/>
      {/* Blog End */}
      {/* FAQs Start */}
      <FaqSection />
      {/* FAQs End */}
      {/* Team Start */}
      <TeamSection />
      {/* Team End */}
      {/* Testimonial Start */}
      <Testimonial />
      {/* Testimonial End */}
      


    </>
  )
}

export default Home