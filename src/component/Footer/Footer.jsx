import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="mb-8">
            <h5 className="text-white mb-4">Company</h5>
            <a className="text-gray-400 block mb-2" href="#">About Us</a>
            <a className="text-gray-400 block mb-2" href="#">Contact Us</a>
            <a className="text-gray-400 block mb-2" href="#">Our Services</a>
            <a className="text-gray-400 block mb-2" href="#">Privacy Policy</a>
            <a className="text-gray-400 block mb-2" href="#">Terms & Condition</a>
          </div>
          <div className="mb-8">
            <h5 className="text-white mb-4">Quick Links</h5>
            <a className="text-gray-400 block mb-2" href="#">About Us</a>
            <a className="text-gray-400 block mb-2" href="#">Contact Us</a>
            <a className="text-gray-400 block mb-2" href="#">Our Services</a>
            <a className="text-gray-400 block mb-2" href="#">Privacy Policy</a>
            <a className="text-gray-400 block mb-2" href="#">Terms & Condition</a>
          </div>
          <div className="mb-8">
            <h5 className="text-white mb-4">Contact</h5>
            <p className="text-gray-400 mb-2"><i className="fas fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
            <p className="text-gray-400 mb-2"><i className="fas fa-phone-alt me-3"></i>+012 345 67890</p>
            <p className="text-gray-400 mb-2"><i className="fas fa-envelope me-3"></i>info@example.com</p>
            <div className="flex pt-2">
              <a className="text-gray-400 me-2 hover:text-gray-200" href="#"><i className="fab fa-twitter"></i></a>
              <a className="text-gray-400 me-2 hover:text-gray-200" href="#"><i className="fab fa-facebook-f"></i></a>
              <a className="text-gray-400 me-2 hover:text-gray-200" href="#"><i className="fab fa-youtube"></i></a>
              <a className="text-gray-400 hover:text-gray-200" href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div>
            <h5 className="text-white mb-4">Newsletter</h5>
            <p className="text-gray-400 mb-2">Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <div className="relative" style={{ maxWidth: "400px" }}>
              <input className="bg-transparent w-full py-3 px-4 mb-2 border border-gray-400 rounded" type="text" placeholder="Your email"/>
              <button type="button" className="bg-blue-500 text-white py-2 px-4 absolute top-0 right-0">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 px-4">
        <div className="text-center md:text-left">
        
           
        </div>
      </div>
    </div>
  );
};

export default Footer;
