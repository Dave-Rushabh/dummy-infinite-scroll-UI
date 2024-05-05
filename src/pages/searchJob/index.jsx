import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postData } from "../../api/axiosInstance";
import Notification from "../../components/common/Notification";
import Filters from "../../components/searchJob/Filters";
import JobList from "../../components/searchJob/JobList";
import JobListShimmer from "../../components/searchJob/JobList/JobListShimmer";
import {
  getJobListFilters,
  getJobListParams,
  getJobsList,
  getTotalJobsCount,
} from "../../store/selectors/searchJobSection";
import {
  updateJobsList,
  updateOffset,
  updateTotalJobsCount,
} from "../../store/slices/searchJobSectionSlice";
import { NOTIFICATION_TYPES } from "../../utils/constants/notification";
import "./index.css";

const SearchJob = () => {
  const dispatch = useDispatch();
  const jobsList = useSelector(getJobsList);
  const jobParams = useSelector(getJobListParams);
  const jobFilters = useSelector(getJobListFilters);
  const totalJobsCount = useSelector(getTotalJobsCount);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchJobs = async (params) => {
    if (isLoading) return;

    try {
      setIsLoading(true);
      const response = await postData("/adhoc/getSampleJdJSON", params);
      if (response) {
        dispatch(updateJobsList({ data: response?.data?.jdList || [] }));
        if (!totalJobsCount) {
          dispatch(updateTotalJobsCount(response?.data?.totalCount || 0));
        }
      }
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
      if (params.offset > jobParams.offset) {
        dispatch(updateOffset(params.offset));
      }
    }
  };

  useEffect(() => {
    fetchJobs(jobParams);
  }, []);

  return (
    <div className="search-job-page-container container">
      <div className="filters-section">
        <Filters jobFilters={jobFilters} />
      </div>

      {!isLoading ? (
        <div className="job-listing-section">
          <JobList jobsList={jobsList} />
        </div>
      ) : (
        <JobListShimmer jobParams={jobParams} />
      )}

      {isError && !isLoading && (
        <Notification
          open={true}
          severity={NOTIFICATION_TYPES.ERROR}
          message={"Something went wrong while fetching jobs..."}
        />
      )}
    </div>
  );
};

export default SearchJob;
