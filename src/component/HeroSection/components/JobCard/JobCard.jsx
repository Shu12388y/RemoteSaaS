import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin } from 'lucide-react';
import { useAuth } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';


const randomImages = [
  'https://cdn-icons-png.freepik.com/256/9072/9072328.png?uid=R155124616&ga=GA1.1.107076403.1719854617&semt=ais_hybrid',
  'https://cdn-icons-png.freepik.com/256/8386/8386177.png?uid=R155124616&ga=GA1.1.107076403.1719854617&semt=ais_hybrid',
  'https://cdn-icons-png.freepik.com/256/7686/7686589.png?uid=R155124616&ga=GA1.1.107076403.1719854617&semt=ais_hybrid',
  'https://cdn-icons-png.freepik.com/256/7598/7598594.png?uid=R155124616&ga=GA1.1.107076403.1719854617&semt=ais_hybrid',
  'https://cdn-icons-png.freepik.com/256/4300/4300059.png?uid=R155124616&ga=GA1.1.107076403.1719854617&semt=ais_hybrid',
  'https://cdn-icons-png.freepik.com/256/14234/14234812.png?uid=R155124616&ga=GA1.1.107076403.1719854617&semt=ais_hybrid',
  'https://cdn-icons-png.freepik.com/256/3465/3465654.png?uid=R155124616&ga=GA1.1.107076403.1719854617&semt=ais_hybrid',
  'https://cdn-icons-png.freepik.com/256/13492/13492919.png?uid=R155124616&ga=GA1.1.107076403.1719854617&semt=ais_hybrid'
];

function JobCard({ company, position, apply, salary }) {
    const index = Math.floor(Math.random() * randomImages.length);
    const { getToken, isLoaded, isSignedIn } = useAuth();
    const navigator = useNavigate()


    const handleClick = () => { 
      if (!isSignedIn){
        navigator('/login')
      }
      else{
        navigator(`/jobs/${apply}`)
      }
    }

  return (
    <div className='group flex flex-col items-center justify-center px-10 py-6 shadow-md box-border hover:border-1 rounded-md'>
        <div className='w-full max-w-[100rem]'>
        <div className='flex  flex-col  lg:flex-row items-center justify-between gap-4'>
          <div className='flex flex-col lg:flex-row items-center justify-start gap-3 lg:gap-0 w-[300px]'>
            <img className='h-[30px]' src={randomImages[index]} alt="img" />
            <div>
              <h1 className='lg:text-left'>{position}</h1>
              <h2 className='lg:text-left'>{company}</h2>
            </div>
          </div>
          <div>
            <div className='flex flex-row items-center gap-3'>
              <MapPin size={20} color="#8a8a8a" strokeWidth={0.85} />
              <h2>Remote</h2>
            </div>
          </div>

          <div className='flex flex-col lg:flex-row items-center gap-3'>
            <span>{salary}</span>
            {/* <Link to={`/jobs/${apply}`}> */}
              <button onClick={handleClick} className='border rounded-2xl font-semibold py-2 px-4 group-hover:bg-yellow-300 text-black'>Apply</button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
