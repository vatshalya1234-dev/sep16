import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addJob } from '../features/jobs/jobsSlice';

const AddJob = () => {
  const [jobTitle, setJobTitle] = useState('');
  const dispatch = useDispatch();

  const handleAddJob = () => {
    if (jobTitle.trim()) {
      dispatch(addJob({ id: Date.now(), title: jobTitle }));
      setJobTitle('');
    }
  };

  return (
    <div>
      <h2>Add Job</h2>
      <input
        type="text"
        value={jobTitle}
        onChange={e => setJobTitle(e.target.value)}
        placeholder="Job Title"
      />
      <button onClick={handleAddJob}>Add</button>
    </div>
  );
};

export default AddJob;
