import React from "react";
import { Typography, AppBar, Toolbar } from "@mui/material";
import { AccessAlarmTwoTone } from "@mui/icons-material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const Toolbarr = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <AppBar position="relative">
        <Toolbar>
          <CameraAltIcon className="icon" />
          <Typography variant="h6">Photo Gallery</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Toolbarr;
