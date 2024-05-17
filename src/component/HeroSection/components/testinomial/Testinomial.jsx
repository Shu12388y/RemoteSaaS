import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
      imgSrc: "img/testimonial-1.jpg",
      name: "Client Name",
      profession: "Profession"
    },
    {
      text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
      imgSrc: "img/testimonial-2.jpg",
      name: "Client Name",
      profession: "Profession"
    },
    {
      text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
      imgSrc: "img/testimonial-3.jpg",
      name: "Client Name",
      profession: "Profession"
    },
    {
      text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
      imgSrc: "img/testimonial-4.jpg",
      name: "Client Name",
      profession: "Profession"
    }
  ];

  return (
    <div className="py-5">
      <div className="container">
        <h1 className="text-center text-4xl font-bold mb-5">Our Clients Say!!!</h1>
        <div className='flex flex-col items-center justify-center'>

        <OwlCarousel className="owl-theme"  loop margin={10} nav items={1}>
          {testimonials.map((testimonial, index) => (
              <div key={index} className="w-[20rem] testimonial-item bg-green-600 rounded p-4">
              <i className="fa fa-quote-left fa-2x text-white mb-3"></i>
              <p className='text-white'>{testimonial.text}</p>
              <div className="flex items-center mt-4">
                <div>

                <img className=" h-10 w-10 rounded-full border-2 border-white" src={testimonial.imgSrc} alt={testimonial.name} />
                </div>
                <div className="ml-3 text-white">
                  <h5 className="mb-1">{testimonial.name}</h5>
                  <small>{testimonial.profession}</small>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
          </div>
      </div>
    </div>
  );
};

export default Testimonials;
