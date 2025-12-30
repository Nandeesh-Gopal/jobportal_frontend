import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Home() {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await API.get("/jobs");
        setJobs(res.data.slice(0, 5)); // show latest 5 jobs
      } catch (error) {
        console.log(error);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div>
      <h1>Job Application Portal</h1>
      <p>Find and apply for jobs easily</p>

      <button onClick={() => navigate("/jobs")}>Browse Jobs</button>

      <h2>Latest Jobs</h2>

      {jobs.length === 0 && <p>No jobs available</p>}

      {jobs.map((job) => (
        <div key={job._id}>
          <h3>{job.title}</h3>
          <p>{job.company}</p>
          <button onClick={() => navigate("/login")}>
            Apply
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
