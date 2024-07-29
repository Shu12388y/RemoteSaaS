import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import { useNavigate } from 'react-router-dom';





// random images
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
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        async function fetchJobs() {
            try {
                const { data } = await axios.get(`https://letsremote.letsresource.in/api/v1/getCompanyById/${id}`);
                setDetail(data.data);
                setLoading(false)
                console.log(data.data)
            } catch (error) {
                setDetail({});
                setLoading(true)
            }
        }
        fetchJobs()
    }, [])



    const handleApply = () => {
        window.open(detail.ApplyLink
            , '_blank');

    }
    const handleShare = () => {
        const url = window.location.href;
        const title = 'Check out this job!';
        const text = `
            Job Title: Job Title
            Role: Role
            Experience: Experience
            Expected Salary: ExpectedSalary
            Description: Description
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
        <>
            <div className='flex flex-col items-center justify-center'>
                {/* header part */}
                <div className='flex flex-col lg:gap-[40rem] lg:flex-row  items-center justify-around p-4 bg-[#ecf9f8]'>
                    <div className='flex flex-row items-center gap-3 '>
                        <img className='h-[90px]' src={randomImages[index]} alt="" />
                        <div className='flex flex-col items-center'>
                            <h1 className='text-4xl'>{detail.Roles}</h1>
                            <h2 className='font-light'>{detail.CompanyName}</h2>
                        </div>

                    </div>

                    <div className='font-semibold text-xl'>
                        {/* {detail} */}
                        {detail.ExpectedSalary}
                    </div>

                </div>


                {/* body */}
                <div className='bg-white  lg:px-20'>
                    <h2 className='text-2xl pt-8 px-3'>Overview</h2>
                    <div className='flex flex-col items-center justify-center lg:text-left'>
                        <p className='text-xl '>
                            {detail.description ? parse(detail.description) : ''}
                        </p>
                    </div>
                </div>


                {/* Apply link */}
                <div className='flex flex-col items-center justify-center pb-6 pt-6 bg-white w-full'>
                    <div>

                        <button
                            onClick={handleApply}
                            className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mx-4"
                        >
                            Apply Now
                        </button>
                        <button
                            onClick={handleShare}
                            className="px-6 py-3 bg-gray-800 text-white rounded-md shadow-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 mx-4"
                        >
                            Share Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JobDetail