import React from 'react';

const About = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 items-center">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="grid grid-cols-2 gap-0 about-bg rounded overflow-hidden">
              <div className="col-span-1 text-start">
                <img className="img-fluid w-full" src="img/about-1.jpg" alt="About 1" />
              </div>
              <div className="col-span-1 text-start">
                <img className="img-fluid" src="img/about-2.jpg" alt="About 2" style={{ width: '85%', marginTop: '15%' }} />
              </div>
              <div className="col-span-1 text-end">
                <img className="img-fluid" src="img/about-3.jpg" alt="About 3" style={{ width: '85%' }} />
              </div>
              <div className="col-span-1 text-end">
                <img className="img-fluid w-full" src="img/about-4.jpg" alt="About 4" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <h1 className="mb-4 text-4xl font-bold">We Help To Get The Best Job And Find A Talent</h1>
            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
            <p><i className="fa fa-check text-primary me-3"></i>Tempor erat elitr rebum at clita</p>
            <p><i className="fa fa-check text-primary me-3"></i>Aliqu diam amet diam et eos</p>
            <p><i className="fa fa-check text-primary me-3"></i>Clita duo justo magna dolore erat amet</p>
            <a className="btn btn-primary py-3 px-5 mt-3" href="">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
