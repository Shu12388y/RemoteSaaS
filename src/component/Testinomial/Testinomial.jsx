import React from 'react'

function Testinomial({img="https://dummyimage.com/302x302",name,content}) {
    return (
        <>
            <div>
                {/* <div className="flex flex-wrap -m-4"> */}
                    <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                        <div className="h-full text-center">
                            <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={img || "https://dummyimage.com/302x302"} />
                            <p className="leading-relaxed">{content}</p>
                            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">{name}</h2>
                            {/* <p className="text-gray-500">Senior Product Designer</p> */}
                        </div>
                    </div>
                {/* </div> */}
            </div>
        </>
    )
}

export default Testinomial