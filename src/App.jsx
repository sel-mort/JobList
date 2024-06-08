import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cardlist from "./components/Cardlist";
import JobListing from "./components/JobListing";
import ViewAllJobs from "./components/ViewAllJobs";

const App = () => {
  
  return (
    <>
      <Navbar />
      <Hero title='Become a React Dev' subtitle='Find the React job that fits your skills and needs'/>
      <Cardlist />
      <JobListing />
      <ViewAllJobs />
    </>
  )
}

export default App;