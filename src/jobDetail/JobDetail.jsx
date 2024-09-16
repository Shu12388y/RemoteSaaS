import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';

// Random images
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

function JobDetail() {
    const navigate = useNavigate();
    const index = Math.floor(Math.random() * randomImages.length);
    const [detail, setDetail] = useState({});
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const { isSignedIn } = useAuth();

    const checkSignIn = () =>{
        if (!isSignedIn){
            navigate('/login')
          }
          else{
            navigate(`/jobs/${id}`)
          }
    }

    useEffect(() => {
        checkSignIn()
        window.scrollTo(0,0)
        async function fetchJobs() {
            try {
                const { data } = await axios.get(`https://letsremote.letsresource.in/api/v1/getCompanyById/${id}`);
                setDetail(data.data);
                setLoading(false);
            } catch (error) {
                setDetail({});
                setLoading(true);
            }
        }
        fetchJobs();
    }, [id]);

    const handleApply = () => {
        window.open(detail.ApplyLink, '_blank');
    };

    const handleShare = () => {
        const url = window.location.href;
        const title = 'Check out this job!';
        const text = `
            Job Title: ${detail.Roles}
            Role: ${detail.JobType}
            Experience: ${detail.Experience}
            Expected Salary: ${detail.ExpectedSalary}
            Description: ${detail.description ? parse(detail.description) : ''}
        `;

        if (navigator.share) {
            navigator.share({
                title,
                text,
                url,
            }).then(() => {
                console.log('Job link shared successfully');
            }).catch((error) => {
                console.error('Error sharing job link:', error);
            });
        } else {
            navigator.clipboard.writeText(`${title}\n${text}\n${url}`).then(() => {
                alert('Job link copied to clipboard!');
            }, (err) => {
                console.error('Could not copy text: ', err);
            });
        }
    };

    return (
        <div className='flex flex-col items-center justify-center overflow-x-hidden bg-white text-black'>
            {/* Header part */}
            <div className='flex flex-col lg:flex-row items-center justify-between py-4 lg:px-32 px-1 bg-[#ecf9f8] w-full lg:gap-8'>
                <div className='flex flex-col md:flex-row items-center gap-10'>
                    <img className='h-[90px] w-[90px]' src={randomImages[index]} alt="Company Logo" />
                    <div className='text-center md:text-left'>
                        <h1 className='text-4xl font-semibold'>{detail.Roles}</h1>
                        <h2 className='font-light text-lg'>{detail.CompanyName}</h2>
                    </div>
                </div>

                <div className='mt-4 lg:mt-0 font-semibold text-lg flex flex-col  items-center gap-2'>
                    <span className='mr-3'>Excepted Salary</span>
                    <span className='text-black'>
                        {detail.ExpectedSalary} K
                        {/* {detail.createdAt?.slice(0, 10)} */}
                    </span>
                </div>
            </div>

            {/* More detail */}
            <div className='bg-white w-full flex flex-col items-center justify-center py-4'>
                <div className='flex flex-col sm:flex-row flex-wrap items-center justify-around w-full px-4 lg:px-0'>
                    <div className='flex items-center gap-3 my-2'>
                        <img  className='w-16 lg:w-10' src="https://jobhire-next.vercel.app/img/icons/user.svg" alt="Experience Icon" />
                        <div className='text-center'>
                            <span className='block'>Experience</span>
                            <span className='font-semibold text-black'>{detail.Experience}</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 my-2'>
                        <img className='w-16 lg:w-10' src="https://jobhire-next.vercel.app/img/icons/handshake.svg" alt="Job Type Icon" />
                        <div className='text-center'>
                            <span className='block'>Job Type</span>
                            <span className='font-semibold text-black'>{detail.JobType}</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 my-2'>
                        <img className='w-16 lg:w-10' src="https://jobhire-next.vercel.app/img/icons/globe.svg" alt="Location Icon" />
                        <div className='text-center'>
                            <span className='block'>Location</span>
                            <span className='font-semibold text-black'>Remote</span>
                        </div>
                    </div>
                </div>
            </div>

            <hr className='w-4/5 border-gray-300' />
            {/* Body */}
            <div className='bg-white w-full px-5 lg:px-[8rem] py-8'>
                <h2 className='text-2xl font-semibold mb-4'>Overview</h2>
                <div className=' text-sm lg:text-lg lg:text-left'>
                    {detail.description ? parse(detail.description) : ''}
                </div>
            </div>

            {/* Apply and Share buttons */}
            <div className='flex flex-col items-center justify-center pb-6 pt-6 bg-white w-full'>
                <div className='flex flex-wrap justify-center gap-4'>
                    <button
                        onClick={handleApply}
                        className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        Apply Now
                    </button>
                    <button
                        onClick={handleShare}
                        className="px-6 py-3 bg-gray-800 text-white rounded-md shadow-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
                    >
                        Share Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default JobDetail;
