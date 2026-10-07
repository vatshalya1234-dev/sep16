import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeJob } from '../features/jobs/jobsSlice';

const JobList = () => {
  const jobs = useSelector(state => state.jobs.jobs);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Job List</h2>
      {jobs.length === 0 && <p>No jobs available</p>}
      <ul>
        {jobs.map(job => (
          <li key={job.id}>
            <span>{job.title}</span>
            <button onClick={() => dispatch(removeJob(job.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
