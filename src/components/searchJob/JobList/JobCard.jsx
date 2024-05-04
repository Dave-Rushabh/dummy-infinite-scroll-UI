import React from "react";
import "./JobCard.css";

const JobCard = ({ jobInfo }) => {
  const {
    jdLink,
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

  return (
    <>
      <div className="job-card-wrapper">
        <div className="logo-name-wrapper">
          <div className="logo">
            <img src={logoUrl} alt={companyName} />
          </div>
        </div>
      </div>
    </>
  );
};

export default JobCard;
