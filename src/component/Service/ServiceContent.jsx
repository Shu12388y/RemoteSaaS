import React from 'react';
import Card from './_components/Card';
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const refData = [
    {
        img:'https://img.freepik.com/free-vector/online-interview-employee-employer_23-2148620898.jpg?t=st=1720787925~exp=1720791525~hmac=41f41689ee860d5c457792dc427cc8e531fa583c398340350bd0c2de1add4e29&w=740',
        content:'Mock Interview can help you to crack remote jobs',
        header:'Mock Interview',
        namespace:"mock-interview",
        link:"lets-remote-w7puqy/mock-interview"
    },
     {
        img:'https://img.freepik.com/free-vector/flat-design-colored-portfolio-template_23-2149215470.jpg?t=st=1720787834~exp=1720791434~hmac=311e3e4e37b413a5c21429abbe8814fb5f13fa8a6bf83b1ca2d6298e36534493&w=1060',
        content:'Portfolio Building can help you to crack remote jobs',
        header:'Porfolio Building',
        namespace:"profolio-building",
        link:"lets-remote-w7puqy/profolio-building" 
    },
     {
        img:'https://img.freepik.com/free-vector/choice-worker-concept_23-2148621781.jpg?uid=R155124616&ga=GA1.1.107076403.1719854617&semt=ais_user',
        content:'Resume Review help you to crack remote jobs',
        header:'Resume Review',
        namespace:"resume-building",
        link:"lets-remote-w7puqy/resume-building"
    },
     {
        img:'https://img.freepik.com/free-vector/online-job-interview-concept_23-2148642180.jpg?uid=R155124616&ga=GA1.1.107076403.1719854617&semt=ais_user',
        content:'Mock Interview can help you to crack remote jobs',
        header:'System Design Interview',
       namespace:"system-design-interview",
       link:"lets-remote-w7puqy/system-design-interview"
    },
]



function ServiceContent() {
  	useEffect(()=>{
	  (async function () {
		const cal = await getCalApi({"namespace":"mock-interview"});
		cal("ui", {"styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false,"layout":"month_view"});
	  })();
	}, [])
  	useEffect(()=>{
	  (async function () {
		const cal = await getCalApi({"namespace":"profolio-building"});
		cal("ui", {"styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false,"layout":"month_view"});
	  })();
	}, [])
  useEffect(()=>{
	  (async function () {
		const cal = await getCalApi({"namespace":"resume-building"});
		cal("ui", {"styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false,"layout":"month_view"});
	  })();
	}, [])
  	useEffect(()=>{
	  (async function () {
		const cal = await getCalApi({"namespace":"system-design-interview"});
		cal("ui", {"styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false,"layout":"month_view"});
	  })();
	}, [])
  return (
    <>
    <div className='bg-white'>
        <div className='text-4xl pt-10 font-bold text-center '>
            <h1>Ace Your Next Interview with Confidence</h1>
        </div>
        <div className='text-center pt-3 '>
        </div>
        <div className='flex flex-row gap-4 flex-wrap items-center justify-center  pt-10'>
            {refData.map((ele,index)=>{
                return(
                    <>
                    <div key={index + "-" + index}>
                        <Card img={ele.img} header={ele.header} content={ele.content} namespace={ele.namespace} link={ele.link}/>
                    </div>
                    </>
                )
            })}
        </div>
    </div>
    </>
  )
}

export default ServiceContent