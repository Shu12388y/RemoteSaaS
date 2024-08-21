// import HeroSections from "./components/HeroSection/HeroSection";
import { HeroOne } from "./components/HeroSection/Upper";
import Price from "../../price/Price";
import Feature from "./components/Feature";
import Card from "./components/Card/Card";


// post catgories
const post = [
  {
    img: "https://cdn-icons-png.freepik.com/256/15245/15245336.png?uid=R155124616&ga=GA1.1.107076403.1719854617&semt=ais_hybrid",
    header: "Marketing",
    position: "120 openings"
  },
  {
    img: "https://cdn-icons-png.freepik.com/256/7181/7181823.png?uid=R155124616&ga=GA1.1.107076403.1719854617&semt=ais_hybrid",
    header: "Engineering",
    position: "240 openings"
  },
  {
    img: "https://cdn-icons-png.freepik.com/256/10488/10488742.png?uid=R155124616&ga=GA1.1.107076403.1719854617&semt=ais_hybrid",
    header: "Human Resource",
    position: "230 openings"
  },
  {
    img: "https://cdn-icons-png.freepik.com/256/8955/8955245.png?uid=R155124616&ga=GA1.1.107076403.1719854617&semt=ais_hybrid",
    header: "Project Manager",
    position: "250 openings"
  }
]



const HeroSection = () => {


  return (
    <>
    <div className="flex flex-col items-center justify-center overflow-x-hidden">
      <div className=" w-full">
        <HeroOne />
      </div>
      {/* Category section */}
      <div className="container-xxl py-5">
        <div className="container">
          <h1
            className="text-center font-bold dark:text-white text-3xl text-black uppercase mb-5 animate__animated animate__fadeInUp"
            style={{ animationDelay: "0.1s" }}
          >
            Explore By Category
          </h1>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 items-center justify-center">
            {post.map((ele, index) => {
              return (
                <>
                  <div key={index + "-" + index} className="hover:shadow-md">
                    <Card img={ele.img} header={ele.header} position={ele.position} />
                  </div>
                </>
              )
            })}
           
          </div>
           <div className="flex flex-col items-center justify-center mt-10">
            <button  className="rounded-md bg-yellow-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600">Explore More</button>
            </div>

        </div>
      </div>
      <div>

      </div>

      {/* About Section */}



      {/* Job Section */}

      <div className="w-full px-4 sm:px-6  lg:px-8 pb-10 bg-white">
        <div className="pt-10">
          <h1 className="text-center dark:text-white font-bold text-3xl mb-3 uppercase   text-black">Recent Available Jobs</h1>
        </div>
        <Feature />

      </div>


      {/* Testinomial */}
      <div>


      </div>

      {/* price */}
      <div className="bg-white w-full">
        <Price />

      </div>

      <div>

      </div>
      {/* </div> */}
    </div>
    </>
  );
};

export default HeroSection;


