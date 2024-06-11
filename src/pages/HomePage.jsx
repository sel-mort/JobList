import Hero from '../components/Hero';
import Cardlist from '../components/Cardlist';
import JobListing from '../components/JobListing';
import ViewAllJobs from '../components/ViewAllJobs';

const HomePage = () => (
    <>
        <Hero title='Become a React Dev' subtitle='Find the React job thats fits your skill set' />
        <Cardlist />
        <JobListing isHome={ true }/>
        <ViewAllJobs />
    </>
);

export default HomePage;