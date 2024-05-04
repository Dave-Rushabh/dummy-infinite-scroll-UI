import React from "react";
import "./index.css";
import JobCard from "./JobCard";
import { Grid } from "@mui/material";

const JobList = ({ jobsList }) => {
  return (
    <>
      {jobsList.length ? (
        <div className="jobs-list-container">
          <Grid container spacing={2}>
            {jobsList.map((job) => {
              const { jdUid } = job;
              return (
                <JobCard
                  key={jdUid + Math.random().toFixed(2)}
                  {...{ jobInfo: job }}
                />
              );
            })}
          </Grid>
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
