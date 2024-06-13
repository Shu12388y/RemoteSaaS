import { useEffect, useState, lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import parse from 'html-react-parser';

function FetchJob() {
  const [detail, setDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchJobs();
  }, []);

  async function fetchJobs() {
    try {
      const { data } = await axios.get(`https://remoteapping.onrender.com/api/v1/getCompanyById/${id}`);
      setDetail(data.data);
    } catch (error) {
      setDetail({});
    }
  }

  // Function to handle sharing job details
  const shareJob = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Check out this job at ${detail.CompanyName}`,
          text: `Role: ${detail.Roles}\nDescription: ${detail.description}`,
          url: window.location.href,
        });
      } catch (error) {
        console.error('Error sharing job:', error);
      }
    } else {
      console.log('Sharing not supported');
    }
  };

  return (
    <>
     <div className='flex flex-col items-center justify-center py-[1rem] px-[20rem]'>
  <h1 className='font-bold text-3xl py-1'>{detail.CompanyName}</h1>
  <span className='font-semibold text-xl py-2'>Role: {detail.Roles}</span>
  <p className='py-3'>{detail.description ? parse(detail.description) : ''}</p>
  <div className="flex justify-center gap-4 w-full">
    <a href={detail.ApplyLink}>
      <button
        type="button"
        className="rounded-full bg-black text-[24px] px-3 py-2  font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Apply
      </button>
    </a>
    {/* Share button */}
    <button
      onClick={shareJob}
      className="rounded-full bg-blue-500 px-3 py-2 text-[24px]  font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      Share
    </button>
  </div>
</div>
    </>
  );
}

function Jobs() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <FetchJob/>
      </Suspense>
    </>
  );
}

export default Jobs;
