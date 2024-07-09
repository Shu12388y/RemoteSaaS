import { lazy, useState, useEffect } from "react";
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import SubscribeJob from "./subscribeJobs/SubscribeJob";
import JobDetail from "./jobDetail/JobDetail";
import "./App.css";

const HeroSection = lazy(() => import("./component/HeroSection/HeroSection"));
import Jobs from "./jobs/Jobs";

const images = ["img/carousel-1.jpg", "img/carousel-2.jpg"];

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('theme');
    return savedMode === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.removeItem('theme');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ParallaxProvider>
      <div className={`app ${darkMode ? 'dark' : ''}`}>
        <Navbar className="navbar" />
        <button className="theme-toggle-button" onClick={toggleDarkMode}>
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
        </button>
        <Routes>
          <Route path="/" element={<HeroSection images={images} />} />
          <Route path="/about" element={<AboutContent />} />
          <Route path="/contact" element={<ContactContent />} />
          <Route path="/service" element={<ServiceContent />} />
          <Route path="/resource" element={<Resources />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/jobs/:id" element={<JobDetail/>} />
          <Route path="/subscribe" element={<SubscribeJob />} />
        </Routes>
        <Footer className="footer" />
      </div>
    </ParallaxProvider>
  );
};

export default App;
