import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  params: {
    limit: 30,
    offset: 0,
  },
  filters: {
    roles: [],
    experience: [],
  },
  totalJobs: 0,
  jobsList: [],
};

const searchJonSectionSlice = createSlice({
  name: "SEARCH_JOB_SECTION",
  initialState,
  reducers: {
    // handles appending the new fetched jobs with existing jobs
    updateJobsList: (state, action) => {
      const { data } = action.payload;
      state.jobsList = [...state.jobsList, ...data];
    },
    // handles updating the total jobs count
    updateTotalJobsCount: (state, action) => {
      state.totalJobs = action.payload;
    },
    // handles updating the params for limit and offset
    updateOffset: (state, action) => {
      state.params = { ...state.params, offset: action.payload };
    },
  },
});

export default searchJonSectionSlice.reducer;

export const { updateJobsList, updateTotalJobsCount, updateOffset } =
  searchJonSectionSlice.actions;
