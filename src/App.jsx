import { lazy } from "react";

import {Navbar} from "./component/Navbar/Navbar";
const HeroSection = lazy(()=>import("./component/HeroSection/HeroSection"));
const About = lazy(() => import("./about/About"));
const Contact = lazy(() => import("./contact/Contact"));
import {  Route, Routes } from "react-router-dom";

const images = ["img/carousel-1.jpg", "img/carousel-2.jpg"];
const App = () => {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection images={images} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </>
  );
};

export default App;
