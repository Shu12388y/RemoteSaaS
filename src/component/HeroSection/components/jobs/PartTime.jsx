import React from 'react';
const PartTime = ({data}) => {
    return (
        <div className="job-item p-4 mb-4 border rounded-lg">
    {data.map((ele,index)=>{
        return(
            <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4" key={index}>
                <div className="flex items-center pb-10">
                    <img className="w-20 h-20 rounded border" src={ele.logoSrc} alt={ele.jobTitle} />
                    <div className="text-start ml-4">
                        <h5 className="mb-2">{ele.jobTitle}</h5>
                        <span className="text-truncate block mb-1"><i className="fa fa-map-marker-alt text-primary me-1"></i>{ele.location}</span>
                        <span className="text-truncate block mb-1"><i className="far fa-clock text-primary me-1"></i>{ele.employmentType}</span>
                        <span className="text-truncate block"><i className="far fa-money-bill-alt text-primary me-1"></i>{ele.salary}</span>
                    </div>
                </div>
                <div className="flex flex-col pb-10 items-center justify-between">
                    <div className="flex items-center space-x-3 md:space-x-5 mb-3 md:mb-0">
                        <a className="btn btn-light btn-square" href="#"><i className="far fa-heart text-primary"></i></a>
                        <a className="btn btn-primary" href="#">Apply Now</a>
                    </div>
                    <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-1"></i>Date Line: {ele.dateLine}</small>
                </div>
            </div>

            </>
        )
    })}
            
        </div>
    );
};

export default PartTime;
