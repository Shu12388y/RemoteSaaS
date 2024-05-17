import React from 'react';

const Contact = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Contact For Any Query</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="wow fadeIn" data-wow-delay="0.1s">
                <div className="flex items-center bg-gray-100 rounded p-4">
                  <div className="bg-white border rounded flex-shrink-0 flex items-center justify-center mr-3" style={{ width: '45px', height: '45px' }}>
                    <i className="fa fa-map-marker-alt text-primary"></i>
                  </div>
                  <span>123 Street, New York, USA</span>
                </div>
              </div>
              <div className="wow fadeIn" data-wow-delay="0.3s">
                <div className="flex items-center bg-gray-100 rounded p-4">
                  <div className="bg-white border rounded flex-shrink-0 flex items-center justify-center mr-3" style={{ width: '45px', height: '45px' }}>
                    <i className="fa fa-envelope-open text-primary"></i>
                  </div>
                  <span>info@example.com</span>
                </div>
              </div>
              <div className="wow fadeIn" data-wow-delay="0.5s">
                <div className="flex items-center bg-gray-100 rounded p-4">
                  <div className="bg-white border rounded flex-shrink-0 flex items-center justify-center mr-3" style={{ width: '45px', height: '45px' }}>
                    <i className="fa fa-phone-alt text-primary"></i>
                  </div>
                  <span>+012 345 6789</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <iframe
              className="relative rounded w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
              frameBorder="0"
              style={{ minHeight: '400px', border: '0' }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="Google Map"
            ></iframe>
          </div>
          <div className="w-full">
            <div className="wow fadeInUp" data-wow-delay="0.5s">
              <p className="mb-4">
                The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done.{' '}
                <a href="https://htmlcodex.com/contact-form">Download Now</a>.
              </p>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="col-span-1">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="name" placeholder="Your Name" />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="form-floating">
                      <input type="email" className="form-control" id="email" placeholder="Your Email" />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="subject" placeholder="Subject" />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <div className="form-floating">
                      <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: '150px' }}></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <button className="btn btn-primary w-full py-3" type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
