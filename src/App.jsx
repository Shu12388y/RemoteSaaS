import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./component/Navbar/Navbar";
import AboutContent from "./about/AboutContent";
import Footer from "./component/Footer/Footer";
import ContactContent from "./contact/ContactContent";
import { ParallaxProvider } from 'react-scroll-parallax';
import ServiceContent from "./component/Service/ServiceContent";
import Resources from "./component/Resources/Resource";
import SignUp from "./signup/Signup";

import Login from "./login/Login";
import JobDetails from "./component/JobDetail/JobDetails";

const HeroSection = lazy(() => import("./component/HeroSection/HeroSection"));

const images = ["img/carousel-1.jpg", "img/carousel-2.jpg"];
const App = () => {
  return (
    <ParallaxProvider>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection images={images} />} />
          <Route path="/about" element={<AboutContent />} />
          <Route path="/contact" element={<ContactContent />} />
          <Route path="/service" element={<ServiceContent />} />
          <Route path="/Job" element={<JobDetails />} />
          <Route path="/resource" element={<Resources />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </>
    </ParallaxProvider>
  );
};

export default App;
