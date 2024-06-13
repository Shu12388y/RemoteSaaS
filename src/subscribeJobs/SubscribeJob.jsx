import React, { useEffect, useState } from 'react'
import {Card} from "../component/HeroSection/components/Card"
function SubscribeJob() {
    const [card,setCards] =  useState([])
    const jobsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(()=>{
        async function fetchData() {
            try {
                const response = await fetch('https://remotebackend-2.onrender.com/api/v1/getCompany');
                const data = await response.json();
                setCards(data.data);
            } catch (error) {
                setCards([]);
                console.error('Error fetching data', error);
        }
    }
    fetchData()
},[])

const paginate = (pageNumber) => setCurrentPage(pageNumber);
 
  return (
    <>
    <div className='text-center text-3xl font-bold pt-[3rem]'>List of Jobs</div>
    <div className='grid grid-rows-1 lg:grid-cols-3 content-center justify-items-center px-[6rem] py-[4rem]'>
        {card.map((item,index)=>{
            return(
                <>
                <div className='py-[3rem]' key={item._id + "-" +index}>
                    <Card 
                        CompanyName={item.CompanyName}
                        ExpectedSalary={item.ExpectedSalary}
                        type={item.JobType}
                        Skills={item.Skills}
                        Role={item.Roles}
                        apply={item._id} 
                    />
                </div>
                </>
            )
        })}
             
    </div>


{/* pagination */}

<div className="mt-4">
                <nav>
                    <ul className="flex justify-center space-x-4">
                        {Array.from({ length: Math.ceil(card.length / jobsPerPage) }, (_, index) => (
                            <li key={index} className="cursor-pointer">
                                <button
                                    onClick={() => paginate(index + 1)}
                                    className={`px-4 py-2 rounded-md ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
                                >
                                    {index + 1}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
    </>
  )
}

export default SubscribeJob