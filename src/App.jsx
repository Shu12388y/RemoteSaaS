import { Routes, Route } from "react-router-dom";
import { Navbar } from "./component/Navbar/Navbar";
import AboutContent from "./about/AboutContent";
import Footer from "./component/Footer/Footer";
import ContactContent from "./contact/ContactContent";
import { ParallaxProvider } from 'react-scroll-parallax';
import ServiceContent from "./component/Service/ServiceContent";
import Resources from "./component/Resources/Resource";
import Login from "./login/Login";
import JobDetail from "./jobDetail/JobDetail";
import "./App.css";
import HeroSection from "./component/HeroSection/HeroSection";
import PrivacyPolicy from "./PrivacyPolicy/Privacy";
import Terms from "./Term/Terms";


const images = ["img/carousel-1.jpg", "img/carousel-2.jpg"];

const App = () => {
     return (
    <ParallaxProvider>
      <div>
        <Navbar className="navbar" />
        <Routes>
          <Route path="/" element={<HeroSection images={images} />} />
          <Route path="/about" element={<AboutContent />} />
          <Route path="/contact" element={<ContactContent />} />
          <Route path="/service" element={<ServiceContent />} />
          <Route path="/resource" element={<Resources />} />
          <Route path="/login" element={<Login />} />
          <Route path="/jobs/:id" element={<JobDetail/>} />
          <Route path="/privacy"  element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />}/>
        </Routes>
        <Footer className="footer" />
      </div>
    </ParallaxProvider>
  );
};

export default App;
