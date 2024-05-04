import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  limit: 24,
  offset: 0,
  jobsList: [],
  filters: {
    roles: [],
    experience: [],
  },
};

const searchJonSectionSlice = createSlice({
  name: "SEARCH_JOB_SECTION",
  initialState,
  reducers: {
    // handles appending the new fetched jobs with existing jobs
    updateJobsList: (state, action) => {
      const { data } = action.payload;
      state.jobsList = [...state.jobsList, data];
    },
  },
});

export default searchJonSectionSlice.reducer;

export const { updateJobsList } = searchJonSectionSlice.actions;
