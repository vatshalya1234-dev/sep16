import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  jobs: [],
};

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    addJob: (state, action) => {
      state.jobs.push(action.payload);
    },
    removeJob: (state, action) => {
      state.jobs = state.jobs.filter(job => job.id !== action.payload);
    },
  },
});

export const { addJob, removeJob } = jobsSlice.actions;
export default jobsSlice.reducer;
