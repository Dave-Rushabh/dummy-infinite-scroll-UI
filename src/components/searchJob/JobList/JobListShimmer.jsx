import { Grid } from "@mui/material";
import React from "react";
import "./JobListShimmer.css";

const JobListShimmer = ({ jobParams }) => {
  const { limit } = jobParams;

  return (
    <Grid container spacing={2}>
      {Array.from({ length: limit }, (_, idx) => (
        <Grid
          key={idx}
          item
          xs={12}
          md={4}
          sm={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <div className="shimmer-job-card-wrapper">
            <div className="shimmer-top-section">
              <div className="shimmer-logo-name-wrapper">
                <div className="shimmer-logo shimmer">&nbsp;</div>
                <div className="shimmer-company-and-role">
                  <p className="shimmer-company shimmer">&nbsp;</p>
                  <p className="shimmer-role shimmer">&nbsp;</p>
                  <p className="shimmer-location shimmer">&nbsp;</p>
                </div>
              </div>

              <div className="shimmer-estimation shimmer">
                <p>&nbsp;</p>
              </div>
              <div className="shimmer-about">
                <p className="shimmer-label shimmer">&nbsp;</p>
                <p className="shimmer-header shimmer">&nbsp;</p>
                <p className="shimmer-description shimmer">&nbsp;</p>
              </div>
            </div>
            <div className="shimmer-card-footer">
              <p className="shimmer-experience shimmer">&nbsp;</p>
              <p className="shimmer-exp-value shimmer">&nbsp;</p>
              <div className="shimmer-easy-apply shimmer">&nbsp;</div>
              <div className="shimmer-unlock-referrals shimmer">&nbsp;</div>
            </div>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default JobListShimmer;
