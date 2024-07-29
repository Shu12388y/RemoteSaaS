// import React from 'react';

// const Footer = () => {
//   return (
//     <div className="bg-gray-900 text-white py-12">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           <div className="mb-8">
//             <h5 className="text-white mb-4">Company</h5>
//             <a className="text-gray-400 block mb-2" href="#">Services</a>
//             <a className="text-gray-400 block mb-2" href="#">Community</a>
//             <a className="text-gray-400 block mb-2" href="#">Products</a>
//             <a className="text-gray-400 block mb-2" href="#">About</a>
//             <a className="text-gray-400 block mb-2" href="#">Terms & Condition</a>
//           </div>
//           <div className="mb-8">
//             <h5 className="text-white mb-4">Quick Links</h5>
//             <a className="text-gray-400 block mb-2" href="#">Account</a>
//             <a className="text-gray-400 block mb-2" href="#">Help </a>
//             <a className="text-gray-400 block mb-2" href="#">Contacts</a>
//             <a className="text-gray-400 block mb-2" href="#">Customer Support</a>
//           </div>
//           <div className="mb-8">
//             <h5 className="text-white mb-4">About Lets Remote</h5>
//             <p className="text-gray-400 mb-2">As the Lets Code community, our unwavering mission is to empower and support every job  <br/> seeker and tech enthusiast on their journey towards success. </p>
          
//             <div className="flex pt-4 space-x-3">
//               <a  href="https://twitter.com/Lets__Code" className="text-gray-400 me-2 hover:text-gray-200" ><i className="fab fa-twitter"></i></a>
//               <a  href="https://www.facebook.com/letscodeforever" className="text-gray-400 me-2 hover:text-gray-200" ><i className="fab fa-facebook-f"></i></a>
//               <a  href="https://www.youtube.com/channel/UC8yrWVx-ezAW0jh8hlFUFUQ" className="text-gray-400 me-2 hover:text-gray-200" ><i className="fab fa-youtube"></i></a>
//               <a href="https://www.linkedin.com/company/lets-code-forever" className="text-gray-400 hover:text-gray-200" ><i className="fab fa-linkedin-in"></i></a>
//               <a href="https://www.instagram.com/letscodeforever" className="text-gray-400 hover:text-gray-200"><i className="fab fa-instagram"></i></a>
//             </div>
//           </div>
         
        
//         </div>
//       </div>
//       <div className="container mx-auto mt-8 px-4">
//         <div className="text-center md:text-left">
        
           
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;



import React from 'react'

export default function Footer() {
  return (
    <section className="relative pb-10 overflow-hidden py-10 bg-blue-950 text-white">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                
                <span className="ml-4 text-lg font-bold text-green-500">Let's Remote</span>
              </div>
              <div>
                <p className="mb-4  text-base font-medium"></p>
                <p className="text-sm text-white">
                  &copy; Copyright 2024. All Rights Reserved by Let's Remote.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-white">
                Company
              </h3>
              <ul>
                <li className="mb-4">
                  <a className=" text-base font-medium text-slate-300 " href="#">
                    Features
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-slate-300" href="#price">
                    Pricing
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-slate-300" href="#">
                    Affiliate Program
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-white">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <a className=" text-base font-medium text-slate-300" href="#">
                    Account
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-slate-300" href="#">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a className=" text-base font-medium text-slate-300" href="#">
                    Customer Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-white">
                Legals
              </h3>
              <ul>
                <li className="mb-4">
                  <a className=" text-base font-medium text-slate-300" href="#">
                    Terms &amp; Conditions
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-base font-medium text-slate-300" href="#">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className=" text-base font-medium text-slate-300" href="#">
                    Licensing
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

