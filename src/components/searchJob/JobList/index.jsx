import React from "react";
import "./index.css";
import JobCard from "./JobCard";

const JobList = ({ jobsList }) => {
  return (
    <>
      {jobsList.length ? (
        <div className="jobs-list-container">
          {jobsList.slice(0, 1).map((job) => {
            const { jdUid } = job;
            return <JobCard key={jdUid} {...{ jobInfo: job }} />;
          })}
        </div>
      ) : (
        <div className="no-jobs-found-wrapper">
          <img
            className="not-found-img"
            src="/assets/not-found-img.png"
            alt="Not Found"
          />
          <p className="no-jobs-found-text">No jobs found ...</p>
        </div>
      )}
    </>
  );
};

export default JobList;
