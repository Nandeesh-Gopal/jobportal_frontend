import { useEffect, useState } from "react";
import API from "../services/api";

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    API.get("/jobs").then((res) => setJobs(res.data));
  }, []);

  return (
    <div>
      {jobs.map((job) => (
        <h3 key={job._id}>{job.title}</h3>
      ))}
    </div>
  );
}

export default Jobs;
