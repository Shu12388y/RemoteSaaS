import React, { useState, useEffect } from "react";
import { data } from "./components/jobs/data/data";
import Feature from "./components/jobs/Feature";
import FullTime from "./components/jobs/FullTime";
import PartTime from "./components/jobs/PartTime";
import Testimonials from "./components/testinomial/Testinomial";
import Footer from "../Footer/Footer";
import Slider from "./components/slider/Slider";
const HeroSection = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab, setActiveTab] = useState(<Feature data={data} />);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
    <div className="flex flex-col items-center justify-center overflow-x-hidden">

   <div className="w-4/5">
      <Slider/>

   </div>
    {/* <div className="h-full md:h-96"> */}
     
      <div className="w-4/5">
        <div className="bg-green-400 p-9">
          <div className="flex flex-1 justify-center items-center flex-wrap">
            <input
              type="text"
              className="form-input border-0 w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 mr-4 mb-4 sm:mb-0 p-2"
              placeholder="Keyword"
            />
            <select className="form-select border-0 w-full sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 mr-4 mb-4 sm:mb-0">
              <option selected>Category</option>
              <option value="1">Category 1</option>
              <option value="2">Category 2</option>
              <option value="3">Category 3</option>
            </select>
            <select className="form-select border-0 w-full sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 mr-4 mb-4 sm:mb-0">
              <option selected>Location</option>
              <option value="1">Location 1</option>
              <option value="2">Location 2</option>
              <option value="3">Location 3</option>
            </select>
            <button className="btn btn-dark border-0 mt-[-1.5rem]">Search</button>
          </div>
        </div>
      </div>

      {/* Category section */}
      <div className="container-xxl py-5">
        <div className="container">
          <h1
            className="text-center mb-5 animate__animated animate__fadeInUp"
            style={{ animationDelay: "0.1s" }}
          >
            Explore By Category
          </h1>
          <div className="grid grid-rows-1 lg:grid-cols-4 md:grid-cols-2 gap-4 items-center justify-center">
            <div
              className="animate__animated animate__fadeInUp flex flex-col items-center lg:block lg:items-center"
              style={{ animationDelay: "0.1s" }}
              >
              <a className="cat-item rounded py-[4rem] px-[6.5rem] lg:p-4 bg-white block" href="">
                <i className="fa fa-3x fa-mail-bulk text-primary mb-4"></i>
                <h6 className="mb-3">Marketing</h6>
                <p className="mb-0">123 Vacancy</p>
              </a>
            </div>
            <div
              className="animate__animated animate__fadeInUp flex flex-col items-center lg:block lg:items-center"
              style={{ animationDelay: "0.3s" }}
            >
              <a className="cat-item rounded py-[4rem] px-[5rem] lg:p-4 bg-white block" href="">
                <i className="fa fa-3x fa-headset text-primary mb-4"></i>
                <h6 className="mb-3">Customer Service</h6>
                <p className="mb-0">123 Vacancy</p>
              </a>
            </div>
            <div
              className="animate__animated animate__fadeInUp flex flex-col items-center lg:block lg:items-center"
              style={{ animationDelay: "0.5s" }}
            >
              <a className="cat-item rounded py-[4rem] px-[5rem] lg:p-4 bg-white block" href="">
                <i className="fa fa-3x fa-user-tie text-primary mb-4"></i>
                <h6 className="mb-3">Human Resource</h6>
                <p className="mb-0">123 Vacancy</p>
              </a>
            </div>
            <div
              className="animate__animated animate__fadeInUp flex flex-col items-center lg:block lg:items-center"
              style={{ animationDelay: "0.7s" }}
            >
              <a className="cat-item rounded py-[4rem] px-[5rem] lg:p-4 bg-white block" href="">
                <i className="fa fa-3x fa-tasks text-primary mb-4"></i>
                <h6 className="mb-3">Project Management</h6>
                <p className="mb-0">123 Vacancy</p>
              </a>
            </div>
            <div
              className="animate__animated animate__fadeInUp flex flex-col items-center lg:block lg:items-center"
              style={{ animationDelay: "0.1s" }}
            >
              <a className="cat-item rounded py-[4rem] px-[5rem] lg:p-4 bg-white block" href="">
                <i className="fa fa-3x fa-chart-line text-primary mb-4"></i>
                <h6 className="mb-3">Business Development</h6>
                <p className="mb-0">123 Vacancy</p>
              </a>
            </div>
            <div
              className="animate__animated animate__fadeInUp flex flex-col items-center lg:block lg:items-center"
              style={{ animationDelay: "0.3s" }}
              >
              <a className="cat-item rounded py-[4rem] px-[5rem] lg:p-4 bg-white block" href="">
                <i className="fa fa-3x fa-hands-helping text-primary mb-4"></i>
                <h6 className="mb-3">Sales & Communication</h6>
                <p className="mb-0">123 Vacancy</p>
              </a>
            </div>
            <div
              className="animate__animated animate__fadeInUp flex flex-col items-center lg:block lg:items-center"
              style={{ animationDelay: "0.5s" }}
            >
              <a className="cat-item rounded py-[4rem] px-[5rem] lg:p-4 bg-white block" href="">
                <i className="fa fa-3x fa-book-reader text-primary mb-4"></i>
                <h6 className="mb-3">Teaching & Education</h6>
                <p className="mb-0">123 Vacancy</p>
              </a>
            </div>
            <div
              className="animate__animated animate__fadeInUp flex flex-col items-center lg:block lg:items-center"
              style={{ animationDelay: "0.7s" }}
            >
              <a className="cat-item rounded py-[4rem] px-[6.5rem] lg:p-4 bg-white block" href="">
                <i className="fa fa-3x fa-drafting-compass text-primary mb-4"></i>
                <h6 className="mb-3">Design & Creative</h6>
                <p className="mb-0">123 Vacancy</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}

      <div className="container-xxl py-5">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
            <div className="wow fadeIn" data-wow-delay="0.1s">
              <div className="grid grid-cols-2 gap-0.5 about-bg rounded overflow-hidden">
                <img
                  className="img-fluid w-full"
                  src="img/about-1.jpg"
                  alt="About 1"
                  />
                <img
                  className="img-fluid w-full"
                  src="img/about-2.jpg"
                  alt="About 2"
                  />
                <img
                  className="img-fluid w-full"
                  src="img/about-3.jpg"
                  alt="About 3"
                />
                <img
                  className="img-fluid w-full"
                  src="img/about-4.jpg"
                  alt="About 4"
                />
              </div>
            </div>
            <div className="wow fadeIn" data-wow-delay="0.5s">
              <h1 className="mb-4">
                We Help To Get The Best Job And Find A Talent
              </h1>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <p>
                <i className="fa fa-check text-primary me-3"></i>Tempor erat
                elitr rebum at clita
              </p>
              <p>
                <i className="fa fa-check text-primary me-3"></i>Aliqu diam amet
                diam et eos
              </p>
              <p>
                <i className="fa fa-check text-primary me-3"></i>Clita duo justo
                magna dolore erat amet
              </p>
              <a href="#" className="btn btn-primary py-3 px-5 mt-3">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Job Section */}

      <div className="pb-10">
        <div>
          <h1 className="text-center font-bold text-4xl">Job Listing</h1>
        </div>
        <div className="flex flex-row items-center justify-center gap-10 py-10">
          <button
            className="text-bold text-xl text-black"
            onClick={() => setActiveTab(<Feature data={data} />)}
          >
            Feature
          </button>
          <button
            className="text-bold text-xl text-black"
            onClick={() => setActiveTab(<FullTime data={data} />)}
          >
            Full Time
          </button>
          <button
            className="text-bold text-xl text-black"
            onClick={() => setActiveTab(<PartTime data={data} />)}
          >
            Part Time
          </button>
        </div>
        {activeTab}
        <div className="flex flex-col items-center justify-center">
          <button className="bg-green-500 text-white p-4 font-bold text-md rounded-sm ">
            Browser More Jobs
          </button>
        </div>
      </div>

      {/* Testinomial */}
      {/* <Testimonials />  */}

      <div>
        <Footer />
      </div>
    {/* </div> */}
    </div>
            </>
  );
};

export default HeroSection;


