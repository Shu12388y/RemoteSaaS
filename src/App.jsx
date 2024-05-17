import Footer from "./component/Footer/Footer"
import Navbar from "./component/Navbar/Navbar"
import HeroSection from "./component/HeroSection/HeroSection";


const images = [
  'img/carousel-1.jpg',
  'img/carousel-2.jpg',
];
const App = () => {
  return (
    <div className="flex flex-col justify-center">
      <Navbar/>
      <div className="flex flex-col items-center justify-center">

      <HeroSection images={images}/>
      </div>

      {/* <Footer/> */}
    </div>
  )
}

export default App