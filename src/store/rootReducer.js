import { combineReducers } from "@reduxjs/toolkit";
import searchJobSectionSlice from "./slices/searchJobSectionSlice";

const rootReducer = {
  searchJobs: searchJobSectionSlice,
};

export default rootReducer;
