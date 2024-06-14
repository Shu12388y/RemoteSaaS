// import HeroSections from "./components/HeroSection/HeroSection";
import { HeroOne } from "./components/HeroSection/Upper";
import Price from "../../price/Price";
import Feature from "./components/Feature";
const HeroSection = () => {
 

  return (
    <><div className="flex flex-col items-center justify-center overflow-x-hidden">
      <HeroOne/>    
      {/* Category section */}
      <div className="container-xxl py-5">
        <div className="container">
          <h1
            className="text-center font-bold dark:text-white text-3xl text-black uppercase mb-5 animate__animated animate__fadeInUp"
            style={{ animationDelay: "0.1s" }}
          >
            Explore By Category
          </h1>
          <div className="grid grid-rows-1 lg:grid-cols-4 md:grid-cols-2 gap-4 items-center justify-center">
            <div
              className="animate__animated animate__fadeInUp flex flex-col items-center  lg:block lg:items-center"
              style={{ animationDelay: "0.1s" }}
              >
              <a className="cat-item rounded py-[4rem] px-[6.5rem] lg:p-[1.8rem] bg-white block" href="">
                <i className="fa fa-3x fa-mail-bulk text-primary mb-4"></i>
                <h6 className="mb-3">Marketing</h6>
               
              </a>
            </div>
            <div
              className="animate__animated animate__fadeInUp flex flex-col items-center lg:block lg:items-center"
              style={{ animationDelay: "0.3s" }}
            >
              <a className="cat-item rounded py-[4rem] px-[5rem] lg:p-4 bg-white block" href="">
                <i className="fa fa-3x fa-headset text-primary mb-4"></i>
                <h6 className="mb-3">Engineering and Techology</h6>
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
              <a className="cat-item rounded py-[4rem] px-[5rem] lg:p-[1.8rem] bg-white block" href="">
                <i className="fa fa-3x fa-tasks text-primary mb-4"></i>
                <h6 className="mb-3">Project Management</h6>
               
              </a>
            </div>
            <div
              className="animate__animated animate__fadeInUp flex flex-col items-center lg:block lg:items-center"
              style={{ animationDelay: "0.1s" }}
            >
              <a className="cat-item rounded py-[4rem] px-[5rem]  lg:p-[1.8rem] bg-white block" href="">
                <i className="fa fa-3x fa-chart-line text-primary mb-4"></i>
                <h6 className="mb-3">Business Development</h6>
                
              </a>
            </div>
            <div
              className="animate__animated animate__fadeInUp flex flex-col items-center lg:block lg:items-center"
              style={{ animationDelay: "0.3s" }}
              >
              <a className="cat-item rounded py-[4rem] px-[5rem]  lg:p-[1.8rem] bg-white block" href="">
                <i className="fa fa-3x fa-hands-helping text-primary mb-4"></i>
                <h6 className="mb-3">Sales & Communication</h6>
                
              </a>
            </div>
           
            <div
              className="animate__animated animate__fadeInUp flex flex-col items-center lg:block lg:items-center"
              style={{ animationDelay: "0.7s" }}
            >
              <a className="cat-item rounded py-[4rem] px-[6.5rem]  lg:p-[1.8rem] bg-white block" href="">
                <i className="fa fa-3x fa-drafting-compass text-primary mb-4"></i>
                <h6 className="mb-3">Design & Creative</h6>
              
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
       
      </div>

      {/* About Section */}

      

      {/* Job Section */}

      <div className="w-full px-4 sm:px-6  lg:px-8 pb-10">
  <div>
    <h1 className="text-center dark:text-white font-bold text-3xl mb-3 uppercase   text-black">Job for you</h1>
  </div>
   <Feature/>
 
</div>


      {/* Testinomial */}
      <div>
     

      </div>

      {/* price */}
      <div>
        <Price/>

      </div>

      <div>
       
      </div>
    {/* </div> */}
    </div>
            </>
  );
};

export default HeroSection;


