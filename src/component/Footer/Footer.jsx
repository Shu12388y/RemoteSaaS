import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="mb-8">
            <h5 className="text-white mb-4">Company</h5>
            <a className="text-gray-400 block mb-2" href="#">Services</a>
            <a className="text-gray-400 block mb-2" href="#">Community</a>
            <a className="text-gray-400 block mb-2" href="#">Products</a>
            <a className="text-gray-400 block mb-2" href="#">About</a>
            <a className="text-gray-400 block mb-2" href="#">Terms & Condition</a>
          </div>
          <div className="mb-8">
            <h5 className="text-white mb-4">Quick Links</h5>
            <a className="text-gray-400 block mb-2" href="#">Account</a>
            <a className="text-gray-400 block mb-2" href="#">Help </a>
            <a className="text-gray-400 block mb-2" href="#">Contacts</a>
            <a className="text-gray-400 block mb-2" href="#">Customer Support</a>
          </div>
          <div className="mb-8">
            <h5 className="text-white mb-4">About Lets Remote</h5>
            <p className="text-gray-400 mb-2">As the Lets Code community, our unwavering mission is to empower and support every job  <br/> seeker and tech enthusiast on their journey towards success. </p>
          
            <div className="flex pt-4 space-x-3">
              <a  href="https://twitter.com/Lets__Code" className="text-gray-400 me-2 hover:text-gray-200" ><i className="fab fa-twitter"></i></a>
              <a  href="https://www.facebook.com/letscodeforever" className="text-gray-400 me-2 hover:text-gray-200" ><i className="fab fa-facebook-f"></i></a>
              <a  href="https://www.youtube.com/channel/UC8yrWVx-ezAW0jh8hlFUFUQ" className="text-gray-400 me-2 hover:text-gray-200" ><i className="fab fa-youtube"></i></a>
              <a href="https://www.linkedin.com/company/lets-code-forever" className="text-gray-400 hover:text-gray-200" ><i className="fab fa-linkedin-in"></i></a>
              <a href="https://www.instagram.com/letscodeforever" className="text-gray-400 hover:text-gray-200"><i className="fab fa-instagram"></i></a>
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
