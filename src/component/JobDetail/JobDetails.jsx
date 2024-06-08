import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'tailwindcss/tailwind.css'; // Ensure TailwindCSS is imported

const JobDetails = () => {
    const navigate = useNavigate();
    const backgroundImageUrl = 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG9naW4lMjBwYWdlfGVufDB8fDB8fHww';

    const handleApply = () => {
        console.log('Clicked Apply Button');
        const applyLink = ''; // Placeholder for apply link
        const user = null; // Placeholder for user

        if (!user) {
            const url = window.location.href;
            localStorage.setItem('applyLink', applyLink);
            localStorage.setItem('jobID', url);

            navigate('/signup');
            return;
        }

        if (!applyLink) {
            alert('This job application link is not available.');
            return;
        }

        window.open(applyLink, '_blank'); // Open the apply link in a new tab
    };

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
        <div className="min-h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${backgroundImageUrl}')` }}>
            <div className="container mx-auto py-10 px-5 md:py-20 lg:py-24">
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden relative">
                    <div className="p-4 sm:p-6">
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <h2 className="text-2xl font-semibold">John Doe</h2>
                                <p className="text-sm text-gray-600">Senior Software Engineer</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Phone: (123) 456-7890</p>
                                <p className="text-sm text-gray-600">Email: john.doe@example.com</p>
                                <p className="text-sm text-gray-600">Location: San Francisco, CA</p>
                            </div>
                        </div>
                        <hr className="my-4" />
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Summary</h3>
                            <p className="text-sm leading-relaxed">Results-oriented Senior Software Engineer with 20 years of experience
                                designing, developing, and deploying complex software solutions. Proficient in a variety of
                                programming languages and technologies. Proven track record of leading teams and delivering
                                high-quality products.</p>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold mb-2">Experience</h3>
                            <div>
                                <h4 className="text-md font-semibold">ABC Corporation</h4>
                                <p className="text-sm text-gray-600">Senior Software Engineer | 2015 - Present</p>
                                <ul className="list-disc list-inside text-sm">
                                    <li>Lead a team of developers in designing and implementing a scalable microservices
                                        architecture.</li>
                                    <li>Developed and maintained critical components of the company's flagship product, resulting
                                        in increased reliability and performance.</li>
                                    <li>Collaborated with product managers to define project requirements and timelines.</li>
                                </ul>
                            </div>
                            <div className="mt-4">
                                <h4 className="text-md font-semibold">XYZ Tech</h4>
                                <p className="text-sm text-gray-600">Software Engineer | 2008 - 2015</p>
                                <ul className="list-disc list-inside text-sm">
                                    <li>Contributed to the development of a cutting-edge mobile application, used by millions of
                                        users worldwide.</li>
                                    <li>Implemented continuous integration and deployment pipelines, improving team efficiency
                                        and product quality.</li>
                                    <li>Mentored junior engineers and conducted code reviews to ensure adherence to best
                                        practices.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold mb-2">Skills</h3>
                            <ul className="list-disc list-inside text-sm">
                                <li>Programming Languages: Java, Python, JavaScript</li>
                                <li>Frameworks & Libraries: Spring Boot, React, Angular</li>
                                <li>Database Systems: MySQL, PostgreSQL, MongoDB</li>
                                <li>Cloud Technologies: AWS, Azure, Google Cloud Platform</li>
                                <li>Agile Methodologies: Scrum, Kanban</li>
                                <li>DevOps Tools: Docker, Kubernetes, Jenkins</li>
                            </ul>
                        </div>
                    </div>
                    <div className="relative bottom-0 left-0 w-full flex justify-center pb-10">
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
        </div>
    );
};

export default JobDetails;
