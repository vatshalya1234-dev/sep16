# Job Portal — React + Redux Toolkit

A single-page job portal demonstrating Redux state management with Redux Toolkit,
`useSelector`, and `useDispatch`.

## Setup

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Structure

```
src/
├── app/
│   └── store.js          # Redux store setup
├── features/
│   └── jobs/
│       └── jobsSlice.js  # Jobs slice: addJob / removeJob reducers
├── components/
│   ├── JobList.jsx       # Displays job list, dispatches removeJob
│   └── AddJob.jsx        # Form to dispatch addJob
├── App.jsx               # Wraps app in <Provider store={store}>
└── main.jsx               # React root
```

## Features

- **Add Job** — enter a title and click Add; dispatches `addJob({ id, title })`.
- **Delete Job** — click Delete on any list item; dispatches `removeJob(id)`.
- **State Management** — all job data lives in the Redux store (`state.jobs.jobs`),
  read via `useSelector` and updated via `useDispatch`.

## Next steps (extensions)

- Add job filtering/search
- Add fields like company, location, description
- Persist state to localStorage
