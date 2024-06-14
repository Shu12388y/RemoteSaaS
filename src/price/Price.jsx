import React from 'react';

const pricingPlans = [
  {
    name: 'START',
    price: 'Free',
    features: [
      'Daily 10 Jobs Updates',
      'Exclusive OFF campus and On Campus Job updates',
     
    ],
    popular: false,
  },
  {
    name: 'PRO',
    price: '$5',
    duration: '/3mo',
    features: [
      'Daily 25 job updates for you',
      'Remote Resume Building and Guidance',
      'Remote Job Resources and Opportunities',
      'How to get a remote job',
      'Teach you how to make your github portfolio'

    ],
    popular: true,
  },
];

function Price() {
  return (
    <>
      <section>
        <section className="text-gray-600  body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-4xl dark:text-white text-3xl font-medium title-font mb-2 text-gray-900">Pricing</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
                Whatever you got the best you can get here ?.
              </p>
              
            </div>
            <div className="flex flex-wrap -m-4">
              {pricingPlans.map((plan) => (
                <div className="p-4 xl:w-1/2  md:w-1/2 w-full" key={plan.name}>
                  <div className={`h-full p-6 rounded-lg border-2 ${plan.popular ? 'border-indigo-500' : 'border-gray-300'} flex flex-col relative overflow-hidden`}>
                    {plan.popular && (
                      <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
                    )}
                    <h2 className="text-sm tracking-widest dark:text-white title-font mb-1 font-medium">{plan.name}</h2>
                    <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b dark:text-white border-gray-200 leading-none">
                      {plan.price}
                      {plan.duration && <span className="text-lg ml-1 dark:text-white font-normal text-gray-500">{plan.duration}</span>}
                    </h1>
                    {plan.features.map((feature, index) => (
                      <p className="flex items-center dark:text-white text-gray-600 mb-2" key={index}>
                        <span className="w-4 h-4 mr-2 inline-flex  dark:text-white items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2.5"
                            className="w-3 h-3"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 6L9 17l-5-5"></path>
                          </svg>
                        </span>
                        {feature}
                      </p>
                    ))}
                    <button className={`flex items-center mt-auto text-white ${plan.popular ? 'bg-indigo-500 hover:bg-indigo-600' : 'bg-gray-400 hover:bg-gray-500'} border-0 py-2 px-4 w-full focus:outline-none rounded`}>
                      Subscribe
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4 ml-auto"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </button>
                   
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Price;
