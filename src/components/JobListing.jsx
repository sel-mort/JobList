// import jobs from '../jobs.json'
import JobItem from './JobItem';
import Spinner from './Spinner';

import { useState, useEffect } from 'react';

const JobListing = ({ isHome = false }) => {
    const num = isHome ? 3 : 6;
    const apiUrl = `/api/jobs?_limit=${num}`;
    // console.log(jobs);
    // const JobListings = isHome ? jobs.slice(0, 3) : jobs;
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                setJobs(data);
            } catch(err) {
                console.error('error : ' + err);
            } finally {
                setLoading(false);
            }
        }
        fetchJobs();
    }, []);

    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
            <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                { isHome ? 'Recent Jobs': 'Browse Jobs' }
            </h2>
                    {
                        loading 
                            ?
                                (
                                    <Spinner loading={ loading }/>
                                )
                            :
                                (
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        {
                                            jobs.map((job) => (
                                                <JobItem key={ job.id } job= { job }/>
                                            ))
                                        }
                                    </div>
                                )
                        
                    }
            </div>
        </section>
    )
}

export default JobListing;