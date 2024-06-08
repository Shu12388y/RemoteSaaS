import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Feature = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({
        experience: '',
        category: '',
        role: '',
        company: '',
    });
    const cardsPerPage = 10;

    // Dummy data for cards
    const dummyData = Array.from({ length: 50 }, (_, index) => ({
        id: index + 1,
        title: `Card ${index + 1}`,
        description: `This is the description for Card ${index + 1}`,
        category: `Category ${index + 1}`,
        experience: `Experience ${index + 1} years`,
        salary: `Expected Salary: $${(index + 1) * 1000}`,
        role: `Role ${index + 1}`,
        company: `Company ${index + 1}`,
    }));

    // Logic for pagination
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const filteredCards = dummyData.filter(
        (card) =>
            card.experience.includes(filters.experience) &&
            card.category.includes(filters.category) &&
            card.role.includes(filters.role) &&
            card.company.includes(filters.company) &&
            card.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Handle search input change
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1); // Reset pagination when search term changes
    };

    // Handle filter change
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
        setCurrentPage(1); // Reset pagination when filter changes
    };

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
                <select name="experience" value={filters.experience} onChange={handleFilterChange} className="border border-gray-300 rounded-md px-3 py-2">
                    <option value="">Select Experience</option>
                    <option value="1 year">1 year</option>
                    <option value="2 years">2 years</option>
                    <option value="3 years">3 years</option>
                    {/* Add other experience options */}
                </select>
                <select name="role" value={filters.role} onChange={handleFilterChange} className="border border-gray-300 rounded-md px-3 py-2">
                    <option value="">Select Role</option>
                    <option value="Role 1">Role 1</option>
                    <option value="Role 2">Role 2</option>
                    <option value="Role 3">Role 3</option>
                    {/* Add other role options */}
                </select>
                <select name="company" value={filters.company} onChange={handleFilterChange} className="border border-gray-300 rounded-md px-3 py-2">
                    <option value="">Select Company</option>
                    <option value="Company 1">Company 1</option>
                    <option value="Company 2">Company 2</option>
                    <option value="Company 3">Company 3</option>
                    {/* Add other company options */}
                </select>
                <select name="category" value={filters.category} onChange={handleFilterChange} className="border border-gray-300 rounded-md px-3 py-2">
                    <option value="">Select Category</option>
                    <option value="Category 1">Category 1</option>
                    <option value="Category 2">Category 2</option>
                    <option value="Category 3">Category 3</option>
                    {/* Add other category options */}
                </select>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
                {currentCards.map((card) => (
                    <div key={card.id} className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
                        {/* Card content */}
                        <p className="text-xl font-semibold my-2">{card.title}</p>
                        <p className="text-gray-600 mb-2">{card.description}</p>
                        <div className="flex justify-between items-center mb-4">
                            <p className="text-sm text-gray-500">{card.category}</p>
                            <p className="text-sm text-gray-500">{card.experience}</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-sm text-gray-500">{card.salary}</p>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Apply Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {/* Pagination */}
            <div className="flex justify-center mt-4">
                {Array.from({ length: Math.ceil(filteredCards.length / cardsPerPage) }, (_, index) => (
                    <Link key={index} to={`/job`}>
                        <button
                            onClick={() => paginate(index + 1)}
                            className={`mx-1 px-3 py-1 rounded-md ${
                                currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
                            }`}
                        >
                            {index + 1}
                        </button>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Feature;
