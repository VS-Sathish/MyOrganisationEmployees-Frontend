import React from "react";
import { AppBar, IconButton, Toolbar, Typography, Stack } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import { Link, NavLink, Outlet } from "react-router-dom";

function index() {
  const navLinkStyles = ({ isActive }) => {
    return {
      textDecoration: isActive ? "none" : "underlined",
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "violet" : "white",
    };
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            component={Link}
            to="/employees/list"
          >
            <GroupsIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            fontFamily="sanSerif"
            sx={{ flexGrow: 1 }}
          >
            Employee Organisation
          </Typography>
          <Stack direction="row" spacing={2}>
            <NavLink to="/employees/add" style={navLinkStyles}>
              AddEmployee
            </NavLink>
          </Stack>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
}

export default index;
