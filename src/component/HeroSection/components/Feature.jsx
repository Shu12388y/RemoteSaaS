import { useEffect, useState, useCallback } from 'react';
import { Card } from './Card';
import Skeleton from 'react-loading-skeleton';

const Feature = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({
        Experience: '',
        category: '',
        Role: '',
        Company: '',
    });
    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 10;

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch('https://remotebackend-2.onrender.com/api/v1/getCompany');
            const data = await response.json();
            setCards(data.data);
        } catch (error) {
            setCards([]);
            // console.error('Error fetching data', error);
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleFilterChange = (event) => {
        setFilters({
            ...filters,
            [event.target.name]: event.target.value,
        });
    };

    // Calculate the jobs to be displayed on the current page
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = cards.slice(indexOfFirstJob, indexOfLastJob);

    // Handle pagination
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="flex flex-col items-center justify-center">
            {/* Search input */}
            <div className="flex items-center justify-center mb-4">
                <input
                    type="text"
                    placeholder="Search job"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="border border-gray-300 rounded-md px-3 py-2 w-full"
                />
            </div>

            {/* Filters */}
            <div className="flex mb-4 space-x-4">
                <select
                    name="Experience"
                    value={filters.Experience}
                    onChange={handleFilterChange}
                    className="border border-gray-300 rounded-md px-3 py-2"
                >
                    <option value="">Select Experience</option>
                    <option value="1 year">1 year</option>
                    <option value="2 years">2 years</option>
                    <option value="3 years">3 years</option>
                </select>
                <select
                    name="Role"
                    value={filters.Role}
                    onChange={handleFilterChange}
                    className="border border-gray-300 rounded-md px-3 py-2"
                >
                    <option value="">Select Role</option>
                    <option value="Role 1">Role 1</option>
                    <option value="Role 2">Role 2</option>
                    <option value="Role 3">Role 3</option>
                </select>
                <select
                    name="Company"
                    value={filters.Company}
                    onChange={handleFilterChange}
                    className="border border-gray-300 rounded-md px-3 py-2"
                >
                    <option value="">Select Company</option>
                    <option value="Company 1">Company 1</option>
                    <option value="Company 2">Company 2</option>
                    <option value="Company 3">Company 3</option>
                </select>
                <select
                    name="category"
                    value={filters.category}
                    onChange={handleFilterChange}
                    className="border border-gray-300 rounded-md px-3 py-2"
                >
                    <option value="">Select Category</option>
                    <option value="Category 1">Category 1</option>
                    <option value="Category 2">Category 2</option>
                    <option value="Category 3">Category 3</option>
                </select>
            </div>

            {/* Cards */}
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4'>
                    {currentJobs.map((item, index) => (
                        <Card 
                            key={item._id + '-' + index}
                            CompanyName={item.CompanyName}
                            ExpectedSalary={item.ExpectedSalary}
                            type={item.JobType}
                            Skills={item.Skills}
                            Role={item.Roles}
                            apply={item._id} 
                        />
                    ))}
                </div>
            )}

            {/* Pagination */}
            <div className="mt-4">
                <nav>
                    <ul className="flex justify-center space-x-4">
                        {Array.from({ length: Math.ceil(cards.length / jobsPerPage) }, (_, index) => (
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
