import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Chip,
  Box,
  ListItem,
} from "@mui/material";

const SelectionDropdown = ({
  options,
  label,
  onSelectionClick,
  multiSelect = false,
}) => {
  const [selectedOption, setSelectedOption] = useState(multiSelect ? [] : "");

  const handleChange = (event) => {
    const newValue = event.target.value;
    setSelectedOption(newValue);
    onSelectionClick(newValue);
  };

  return (
    <>
      <FormControl
        sx={{
          my: 1,
          width: "auto",
          height: "60px",
          minWidth: "150px",
          fontFamily: `"Lexend", sans-serif`,
        }}
      >
        <InputLabel
          id="demo-multiple-chip-label"
          sx={{ fontFamily: `"Lexend", sans-serif`, fontSize: "13px" }}
        >
          {label}
        </InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple={multiSelect}
          value={selectedOption}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label={label} />}
          renderValue={(selected) =>
            multiSelect ? (
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 0.5,
                  fontFamily: `"Lexend", sans-serif`,
                  fontSize: "12px",
                }}
              >
                {selected.map((value) => (
                  <Chip
                    key={value}
                    label={value}
                    sx={{
                      fontFamily: `"Lexend", sans-serif`,
                      fontSize: "12px",
                    }}
                  />
                ))}
              </Box>
            ) : (
              <p
                style={{ fontFamily: `"Lexend", sans-serif`, fontSize: "12px" }}
              >
                {selected}
              </p>
            )
          }
        >
          {options.map((option) => (
            <MenuItem
              key={option}
              value={option}
              sx={{ fontFamily: `"Lexend", sans-serif`, fontSize: "12px" }}
            >
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default SelectionDropdown;
