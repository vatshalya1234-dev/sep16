import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import JobList from './components/JobList';
import AddJob from './components/AddJob';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Job Portal</h1>
        <AddJob />
        <JobList />
      </div>
    </Provider>
  );
};

export default App;
