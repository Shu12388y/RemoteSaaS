import React from 'react'

function Card({img,header,position}) {
  return (
    <>
    <div>
        <div className='flex gap-4 flex-col items-center justify-center bg-white p-10 rounded-lg'>
            <div className='h-[70px] w-[70px]'>
            <img src={img} alt="img" />
            </div>
            <div>
                <h2 className='text-2xl'>{header}</h2>
                <h4 className='text-md text-center font-semibold mt-2'>{position}</h4>
            </div>
        </div>
    </div>
    </>
  )
}

export default Card