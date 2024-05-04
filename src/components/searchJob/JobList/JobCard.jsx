import { Grid } from "@mui/material";
import React from "react";
import { FlashIcon, TickIcon } from "../../../resources/icons";
import "./JobCard.css";

const JobCard = ({ jobInfo }) => {
  const {
    jobDetailsFromCompany,
    maxJdSalary,
    minJdSalary,
    salaryCurrencyCode,
    location,
    minExp,
    maxExp,
    jobRole,
    companyName,
    logoUrl,
  } = jobInfo;

  const getRange = (min, max, key) => {
    if (min !== null && max !== null) {
      return `${min} - ${max} ${key}`;
    } else if (min === null && max === null) {
      return "Not disclosed yet";
    } else {
      return !min ? `${String(max)} ${key}` : `${String(min)} ${key}`;
    }
  };

  return (
    <Grid item md={4} sm={6} sx={{ display: "flex", justifyContent: "center" }}>
      <div className="job-card-wrapper">
        <div className="top-section">
          <div className="logo-name-wrapper">
            <div className="logo">
              <img src={logoUrl} alt={companyName} />
            </div>
            <div className="company-and-role">
              <p className="company">{companyName}</p>
              <p className="role">{jobRole}</p>
              <p className="location">{location}</p>
            </div>
          </div>

          <div className="estimation">
            <p>
              Estimated Salary : {salaryCurrencyCode}{" "}
              {getRange(minJdSalary, maxJdSalary, "k")}
            </p>
            <div>
              <TickIcon />
            </div>
          </div>
          <div className="about">
            <p className="label">About Company :</p>
            <p className="header">About us</p>
            <p className="description">{jobDetailsFromCompany}</p>
          </div>
        </div>
        <div className="card-footer">
          <div className="view-job" onClick={() => {}}>
            View job
          </div>
          <p className="experience">Minimum Experience</p>
          <p className="exp-value">{getRange(minExp, maxExp, "years")}</p>
          <div className="easy-apply">
            <div>
              <FlashIcon />
            </div>
            <p>Easy Apply</p>
          </div>
          <div className="unlock-referrals">
            <div className="users">
              <div className="user">
                <img src="/assets/dummy-user.jpg" alt="dummy-user" />
                <div className="dot"></div>
              </div>
              <div className="user">
                <img src="/assets/dummy-user.jpg" alt="dummy-user" />
                <div className="dot"></div>
              </div>
            </div>
            <p>Unlock referral asks</p>
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default JobCard;
