import React from 'react';
import Typewriter from 'typewriter-effect';

export function HeroOne() {
  return (
    <div className="relative w-full bg-white pb-8">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-14 xl:col-span-6">
          <div className="mt-4 flex max-w-max items-center space-x-2 rounded-full bg-gray-100 p-1">
            <div className="rounded-full bg-white p-1 px-2">
            </div>
          </div>
          <div className='h-[7rem]'>
          <h1 className='mt-8 text-2xl font-bold tracking-tight text-black md:text-4xl lg:text-4xl'>
            <Typewriter
              options={{
                strings: ['Discover Your Next Remote Opportunity.', 'Find Your Dream Remote Job Today', 'Unlock the Freedom of Remote Work'],
                autoStart: true,
                loop: true,
              }}
              />
          </h1>
      </div>
          <p className="mt-8 text-lg text-gray-700">
            Explore Thousands of Work-from-Anywhere Opportunities. Your Gateway to Top Remote Jobs and Careers.
          </p>
          <form action="" className="mt-8 flex items-start space-x-2">
            <div>
              <input
                className="flex w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="email"
                placeholder="Enter your email"
                id="email"
              ></input>
              <p className="mt-2 text-sm text-gray-500">We care about your privacy</p>
            </div>
            <div>
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
          <img
            className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[1/2] lg:h-[400px] xl:aspect-[16/9]"
            src="https://images.unsplash.com/photo-1698891667843-f63ce45c696c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
