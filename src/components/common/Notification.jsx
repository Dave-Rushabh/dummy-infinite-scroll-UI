import { Alert, Snackbar } from "@mui/material";
import React from "react";

const Notification = ({ open, onClose, severity, message }) => {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
      <Alert onClose={onClose} severity={severity} variant="filled">
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
