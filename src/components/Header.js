import React, {useState} from "react";

import Button from "@mui/material/Button";

import HomeIcon from "@mui/icons-material/Home";

import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";
import "./css/Header.css";
import Modal from "react-responsive-modal";
import CloseIcon from '@mui/icons-material/Close';


function Header() {

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const Close=<CloseIcon></CloseIcon>

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
          
          <input type="text" placeholder="Search Question"></input>
        </div>
        <div className="Header__rem">
          <Avatar></Avatar>
        </div>
        <Button onClick={() => setIsModalOpen(true)}>Add Question</Button>

       
     
      <div>
      <button onClick={onOpenModal}>Open modal</button>
      <Modal open={open} onClose={onCloseModal} center>
        <h2>Simple centered modal</h2>
      </Modal>
  
    </div>
      </div>
    </div>
  );
}

export default Header;
