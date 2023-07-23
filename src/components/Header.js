import React from "react";

import Button from "@mui/material/Button";

import HomeIcon from "@mui/icons-material/Home";

import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Search } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import "./css/Header.css";

function Header() {
  return (
    <div className="Header">
      <div className="Header-content">
        <div className="Header__logo">
          <h1>VIT SPOT</h1>
        </div>
        <div className="Header__icons">
          <div className="Header__icon">
            <HomeIcon></HomeIcon>
          </div>
          <div className="Header__icon">
            <FeaturedPlayListIcon></FeaturedPlayListIcon>
          </div>
          <div className="Header__icon">
            <AssignmentIcon></AssignmentIcon>
          </div>
          <div className="Header__icon">
            <PeopleAltIcon></PeopleAltIcon>
          </div>
          <div className="Header__icon">
            <NotificationsIcon></NotificationsIcon>
          </div>
        </div>
        <div className="Header__input">
          <Search></Search>
          <input type="text" placeholder="Search Question"></input>
        </div>
        <div className="Header__rem">
          <Avatar></Avatar>
        </div>
        <Button>Add Question</Button>
      </div>
    </div>
  );
}

export default Header;
