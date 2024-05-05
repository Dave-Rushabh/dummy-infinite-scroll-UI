import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postData } from "../../api/axiosInstance";
import Notification from "../../components/common/Notification";
import Filters from "../../components/searchJob/Filters";
import JobList from "../../components/searchJob/JobList";
import {
  getJobListFilters,
  getJobListParams,
  getJobsList,
  getTotalJobsCount,
} from "../../store/selectors/searchJobSection";
import {
  updateJobsList,
  updateTotalJobsCount,
} from "../../store/slices/searchJobSectionSlice";
import { NOTIFICATION_TYPES } from "../../utils/constants/notification";
import "./index.css";
import JobListShimmer from "../../components/searchJob/JobList/JobListShimmer";

const SearchJob = () => {
  const dispatch = useDispatch();
  const jobsList = useSelector(getJobsList);
  const jobParams = useSelector(getJobListParams);
  const jobFilters = useSelector(getJobListFilters);
  const totalJobsCount = useSelector(getTotalJobsCount);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState({
    flag: false,
    notification: false,
  });

  const handleErrorNotificationClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setIsError((prev) => ({ ...prev, notification: false }));
  };

  const fetchJobs = async () => {
    setIsLoading(true);
    try {
      const response = await postData("/adhoc/getSampleJdJSON", jobParams);
      if (response) {
        dispatch(updateJobsList({ data: response?.data?.jdList || [] }));
        dispatch(updateTotalJobsCount(response?.data?.totalCount || 0));
      }
    } catch (error) {
      setIsError({ flag: true, notification: true });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [jobParams, jobFilters]);

  return (
    <div className="search-job-page-container container">
      <div className="filters-section">
        <Filters {...{ jobFilters }} />
      </div>

      {!isLoading ? (
        <div className="job-listing-section">
          <JobList {...{ jobsList }} />
        </div>
      ) : (
        <JobListShimmer {...{ jobParams }} />
      )}

      {isError.flag && !isLoading ? (
        <Notification
          open={isError.notification}
          onClose={handleErrorNotificationClose}
          severity={NOTIFICATION_TYPES.ERROR}
          message={"Something went wrong while fetching jobs..."}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default SearchJob;
