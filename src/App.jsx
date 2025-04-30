import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import HeaderNav from './components/Header/HeaderNav';
import Home from './pages/Home/Home';
import HeaderTop from './components/Header/HeaderTop';
import Footer from './components/Footer/Footer';
import AboutUs from './pages/AboutUs/AboutUs';
import Service from './pages/Service/Service';
import ContactUs from './pages/ContactUs/ContactUs';
import Blog from './pages/Blog/Blog';
import OurFeature from './pages/OurFeature/OurFeature';
import OurTeam from './pages/OurTeam/OurTeam';
import OurOffer from './pages/OurOffer/OurOffer';
import Faqs from './pages/Faqs/Faqs';
import TestimonialPage from './pages/TestimonialPage/TestimonialPage';
import JobConsultancy from './pages/JobConsultancy/JobConsultancy';
import ItTraining from './pages/ItTraining/ItTraining';
import PayRoll from './pages/PayRoll/PayRoll';
import Internship from './pages/Internship/Internship';

function App() {
  
  return (

    <>

        <BrowserRouter>
          <HeaderTop />
          <HeaderNav />
          <Routes>
            
            <Route path={"/"} exact={true} element={<Home />} />
            <Route path="/about" exact={true}  element={<AboutUs />} />
            <Route path="/service" exact={true} element={<Service />} />
            <Route path="/contact" exact={true} element={<ContactUs />} />
            <Route path="/blog" exact={true} element={<Blog />} />
            <Route path="/ourfeature" exact={true} element={<OurFeature />} />
            <Route path="/ourteam" exact={true} element={<OurTeam />} />
            <Route path="/testimonial" exact={true}  element={<TestimonialPage />} />
            <Route path="/ouroffer" exact={true} element={<OurOffer />} />
            <Route path="/faqs" exact={true} element={<Faqs />} />
            <Route path="/service/job-consultancy" exact={true} element={<JobConsultancy />} />
            <Route path="/service/internship" exact={true} element={<Internship />} />
            <Route path="/service/IT-traning" exact={true} element={<ItTraining />} />
            <Route path="/service/pay-roll" exact={true} element={<PayRoll />} />
            {/*<Route path="/service" element={<Service />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/team" element={<Team />} />
            <Route path="/offer" element={<Offer />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/404" element={<NotFound />} /> */}
          </Routes>
          <Footer />
        </BrowserRouter>
</>

  );
}

export default App
