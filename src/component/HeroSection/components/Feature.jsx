import { useEffect, useState, useCallback } from 'react';
import JobCard from './JobCard/JobCard';

const Feature = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [cards, setCards] = useState([]);
    const [filteredCards, setFilteredCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState(''); // State to store selected category
    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 10;

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch('https://letsremote.letsresource.in/api/v1/getCompany');
            const data = await response.json();
            setLoading(false);
            setCards(data.data);
            setFilteredCards(data.data); // Initially, set filteredCards to all jobs
        } catch (error) {
            setLoading(false);
            setCards([]);
            setFilteredCards([]);
            // console.error('Error fetching data', error);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    // Handle category change
    const handleCategoryChange = (event) => {
        const selectedCategory = event.target.value;
        setCategory(selectedCategory);

        // Filter jobs based on category
        if (selectedCategory === '') {
            setFilteredCards(cards); // Show all jobs if no category is selected
        } else {
            const filtered = cards.filter((job) => job.category.toLowerCase() === selectedCategory.toLowerCase());
            setFilteredCards(filtered);
        }
    };

    // Calculate the jobs to be displayed on the current page
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = filteredCards.slice(indexOfFirstJob, indexOfLastJob);

    // Handle pagination
    const paginate = (pageNumber) => {
        window.scrollTo(0, 1100);
        setCurrentPage(pageNumber);
    };

    return (
        <div className="flex flex-col items-center justify-center bg-white ">
            {/* Category Filter */}
            <div className="mb-4">
                <label htmlFor="category" className="text-lg font-semibold">Choose Job Category:</label>
                <select
                    id="category"
                    name="category"
                    value={category}
                    onChange={handleCategoryChange}
                    className="ml-4 p-2 border  rounded-md"
                >
                    <option value="">All Categories</option>
                    <option value="engineer">Engineer</option>
                    <option value="marketing">Marketing</option>
                    <option value="human resource">Human Resource</option>
                    <option value="project manager">Project Manager</option>
                </select>
            </div>

            {/* Job Cards */}
            {loading ? (
                <span className="loading loading-spinner text-success"></span>
            ) : (
                <div className="grid grid-cols-1 gap-6">
                    {currentJobs.length > 0 ? (
                        currentJobs.map((item, index) => (
                            <JobCard
                                key={item._id}
                                company={item.CompanyName}
                                position={item.Roles}
                                apply={item.ApplyLink}
                              
                                salary={item.ExpectedSalary}
                                role={item.JobType}
                                category={item.category}
                                exp={item.Experience}
                            />
                        ))
                    ) : (
                        <p>No jobs available for the selected category.</p>
                    )}
                </div>
            )}

            {/* Pagination */}
            <div className="mt-4">
                <nav>
                    <ul className="flex justify-center space-x-4">
                        {Array.from({ length: Math.ceil(filteredCards.length / jobsPerPage) }, (_, index) => (
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
        </div>
    );
};

export default Feature;
