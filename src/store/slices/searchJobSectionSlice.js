import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  params: {
    limit: 100,
    offset: 0,
  },
  filters: {
    roles: [],
    employees: [],
    experience: null,
    typeOfWork: [],
    techStack: [],
    salary: null,
    companyName: null,
    sowJobsWithReferrals: false,
  },
  totalJobs: 0,
  jobsList: [],
  copyList: [],
};

const searchJonSectionSlice = createSlice({
  name: "SEARCH_JOB_SECTION",
  initialState,
  reducers: {
    // handles appending the new fetched jobs with existing jobs
    updateJobsList: (state, action) => {
      const { data } = action.payload;
      state.jobsList = [...state.jobsList, ...data];
      state.copyList = state.jobsList;
    },
    // handles updating the total jobs count
    updateTotalJobsCount: (state, action) => {
      state.totalJobs = action.payload;
    },
    // handles updating the params for limit and offset
    updateOffset: (state, action) => {
      state.params = { ...state.params, offset: action.payload };
    },
    // handles the filters
    updateFilters: (state, action) => {
      const { key, value } = action.payload;
      state.filters = { ...state.filters, [key]: value };

      if (key === "experience") {
        let newList = [...state.jobsList];
        if (value !== null) {
          newList = newList.filter(
            (job) =>
              job.minExp !== null &&
              job.maxExp !== null &&
              value >= job.minExp &&
              value <= job.maxExp
          );
        } else {
          newList = state.copyList;
        }

        state.jobsList = newList;
      }
      if (key === "techStack") {
        let newList = [...state.jobsList];
        if (value.length) {
          newList = newList.filter((job) => value.includes(job.jobRole));
        } else {
          newList = state.copyList;
        }

        state.jobsList = newList;
      }
      if (key === "companyName") {
        let newList = [...state.jobsList];
        if (value.length) {
          newList = newList.filter((job) =>
            job.companyName.toLowerCase().includes(value.toLowerCase())
          );
        } else {
          newList = state.copyList;
        }

        state.jobsList = newList;
      }
    },
  },
});

export default searchJonSectionSlice.reducer;

export const {
  updateJobsList,
  updateTotalJobsCount,
  updateOffset,
  updateFilters,
} = searchJonSectionSlice.actions;
