import React from 'react';

const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-white mb-4">Company</h5>
            <a className="btn btn-link text-white-50 d-block mb-2" href="#">About Us</a>
            <a className="btn btn-link text-white-50 d-block mb-2" href="#">Contact Us</a>
            <a className="btn btn-link text-white-50 d-block mb-2" href="#">Our Services</a>
            <a className="btn btn-link text-white-50 d-block mb-2" href="#">Privacy Policy</a>
            <a className="btn btn-link text-white-50 d-block mb-2" href="#">Terms & Condition</a>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-white mb-4">Quick Links</h5>
            <a className="btn btn-link text-white-50 d-block mb-2" href="#">About Us</a>
            <a className="btn btn-link text-white-50 d-block mb-2" href="#">Contact Us</a>
            <a className="btn btn-link text-white-50 d-block mb-2" href="#">Our Services</a>
            <a className="btn btn-link text-white-50 d-block mb-2" href="#">Privacy Policy</a>
            <a className="btn btn-link text-white-50 d-block mb-2" href="#">Terms & Condition</a>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-white mb-4">Contact</h5>
            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
            <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social me-2" href="#"><i className="fab fa-twitter"></i></a>
              <a className="btn btn-outline-light btn-social me-2" href="#"><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-outline-light btn-social me-2" href="#"><i className="fab fa-youtube"></i></a>
              <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Newsletter</h5>
            <p className="mb-2">Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <div className="position-relative" style={{ maxWidth: "400px" }}>
              <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5 mb-2" type="text" placeholder="Your email"/>
              <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright text-center text-md-start py-4">
          <div className="row">
            <div className="col-md-6 mb-3 mb-md-0">
              &copy; <a className="border-bottom" href="#">Your Site Name</a>, All Rights Reserved. Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                <a href="#">Home</a>
                <a href="#">Cookies</a>
                <a href="#">Help</a>
                <a href="#">FAQs</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
