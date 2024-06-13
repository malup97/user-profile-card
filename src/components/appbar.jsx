import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "./appbar.css";

export const AppBarItem = () => {
  return (
    <AppBar className="App-Bar">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          User Profile
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
