
import Carousel from '../Crousel/Carousel'

function HeroSections() {
  return (
    <>
  
    <div>
    <Carousel/>
        <section className="text-gray-600 body-font">
  
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/12/Remote_Job.jpeg.jpg"/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">What We are doing with Lets Remote

      </h1>
      <p className="mb-8 leading-relaxed">As the Lets Code community, our unwavering mission is to empower and support every job seeker and tech enthusiast on their journey towards success. We strive to be a beacon of knowledge, sharing regular updates, opportunities, and resources that will elevate their skills and careers..</p>
      
    </div>
  </div>
</section>
    </div>
    </>
  )
}

export default HeroSections