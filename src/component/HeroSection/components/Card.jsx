import React from 'react';
import { Link } from 'react-router-dom';

export function Card({ ExpectedSalary, type, Role, Skills, CompanyName, apply }) {
  const skillsArray = Array.isArray(Skills) ? Skills : Skills.split(',').map(skill => skill.trim());

  return (
    <div className="w-[300px] rounded-md border">
      <div className="p-4 ">
        <p className="mt-3 text-sm dark:text-white text-black">
          Package: <span className='font-bold'>{ExpectedSalary}</span>
        </p>
        <div className="mt-4 flex flex-wrap items-center">
          <span className="mb-2 mr-2 inline-block  rounded-full bg-gray-200 px-3 py-1 text-[14px] font-semibold text-black">
            Job Location: <span className='font-bold'>{type}</span>
          </span>
          <span className="mb-2 mr-2 inline-block px-3 py-1 text-[10px] font-semibold text-gray-900">
            <span className='font-bold text-black dark:text-white  text-xl'>{Role}</span>
          </span>
          {skillsArray.map((skill, index) => (
            <span key={index} className="mb-2 mr-2  inline-block rounded-full bg-gray-200 px-3 py-1 text-[10px] font-semibold text-gray-900">
              {skill}
            </span>
          ))}
        </div>
        <div className="mt-4 flex justify-between   items-center">
          <span className="inline-block rounded-full  px-3 py-1 text-[18px] font-semibold text-black">
            <span className='font-bold dark:text-white'>{CompanyName}</span>
          </span>
          <Link to={`/jobs/${apply}`}>
            <button
              type="button"
              className="rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              View
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
