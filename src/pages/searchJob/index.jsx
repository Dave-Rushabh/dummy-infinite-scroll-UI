import React, { useEffect, useState } from "react";
import "./index.css";
import Filters from "../../components/searchJob/Filters";
import JobList from "../../components/searchJob/JobList";
import { useDispatch, useSelector } from "react-redux";
import { postData } from "../../api/axiosInstance";
import { updateJobsList } from "../../store/slices/searchJobSectionSlice";
import {
  getJobListFilters,
  getJobListParams,
  getJobsList,
  getTotalJobsCount,
} from "../../store/selectors/searchJobSection";

const SearchJob = () => {
  const dispatch = useDispatch();
  const jobsList = useSelector(getJobsList);
  const jobParams = useSelector(getJobListParams);
  const jobFilters = useSelector(getJobListFilters);
  const totalJobsCount = useSelector(getTotalJobsCount);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      setIsLoading(true);
      try {
        const response = await postData("/adhoc/getSampleJdJSON", jobParams);
        if (response) {
          dispatch(updateJobsList({ data: response?.data?.jdList || [] }));
        }
      } catch (error) {}
    };
    fetchJobs();
  }, [jobParams, jobFilters]);

  return (
    <div className="search-job-page-container container">
      <div className="filters-section">
        <Filters {...{ jobFilters }} />
      </div>
      <div className="job-listing-section">
        <JobList {...{ jobsList }} />
      </div>
    </div>
  );
};

export default SearchJob;
