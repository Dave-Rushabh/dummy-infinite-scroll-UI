import React from "react";
import SelectionDropdown from "../../common/SelectionDropdown";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import "./index.css";

const Filters = () => {
  const employeesOption = [
    "1-10",
    "11-20",
    "21-50",
    "51-200",
    "201-500",
    "500+",
  ];

  const experienceOptions = Array.from({ length: 11 }, (_, index) =>
    index.toString()
  );

  const rolesOptions = [
    "Backend Developer",
    "Frontend Developer",
    "Full Stack Developer",
    "DevOps Engineer",
    "Software Engineer",
    "UI/UX Designer",
    "Data Scientist",
    "Database Administrator",
    "Systems Administrator",
    "Network Engineer",
    "Quality Assurance Engineer",
  ];

  const typeOfWorkOptions = ["Hybrid", "Remote", "In Office"];

  const minBaseSalaryOptions = Array.from(
    { length: 10 },
    (_, idx) => `${(idx + 1) * 10} L`
  );

  return (
    <div className="filters-main">
      <div className="filter-wrapper">
        <SelectionDropdown
          options={rolesOptions}
          label="Roles"
          onSelectionClick={() => {}}
        />
        <SelectionDropdown
          options={employeesOption}
          label="Number of Employees"
          onSelectionClick={() => {}}
          multiSelect={true}
        />
        <SelectionDropdown
          options={experienceOptions}
          label="Experience"
          onSelectionClick={() => {}}
        />
        <SelectionDropdown
          options={typeOfWorkOptions}
          label="Type of work"
          onSelectionClick={() => {}}
        />
        <SelectionDropdown
          options={minBaseSalaryOptions}
          label="Minimum base salary"
          onSelectionClick={() => {}}
        />
        <FormControl
          sx={{
            width: "auto",
            height: "60px",
            minWidth: "150px",
            fontFamily: `"Lexend", sans-serif`,
          }}
        >
          <TextField
            id="filled-search"
            label="Search Company Name"
            type="search"
            InputLabelProps={{
              style: { fontFamily: `"Lexend", sans-serif`, fontSize: "12px" },
            }}
            inputProps={{
              style: {
                fontFamily: `"Lexend", sans-serif`,
                fontSize: "12px",
                height: "22px",
                width: "160px",
              },
            }}
          />
        </FormControl>
      </div>

      <FormControlLabel
        control={<Checkbox />}
        label={
          <Typography
            sx={{
              fontFamily: `"Lexend", sans-serif`,
              fontSize: "12px",
            }}
          >
            Show jobs with referrals available
          </Typography>
        }
      />
    </div>
  );
};

export default Filters;
