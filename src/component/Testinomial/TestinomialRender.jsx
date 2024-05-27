import React from 'react'
import Testimonials from './Testinomial'
import {data} from "./data/data"
function TestinomialRender() {
  return (
    <>
    <section>
        <div className='grid grid-cols-3 items-center justify-center gap-10 '>

        {data.map((ele,index)=>{
            return(
                <>
                <div key={index + "-" + index}>
                <Testimonials name={ele.name} img={ele.img} content={ele.content}/>

                </div>
                </>
            )
            
        })}
        </div>
    </section>
    </>
  )
}

export default TestinomialRender