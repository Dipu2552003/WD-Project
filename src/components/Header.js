import React, {useState} from "react";

import Button from "@mui/material/Button";

import HomeIcon from "@mui/icons-material/Home";

import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar, Input } from "@mui/material";
import "./css/Header.css";
import Modal from "react-responsive-modal";
import CloseIcon from '@mui/icons-material/Close';
import ReactModal from 'react-modal';
import { AssignmentTurnedInOutlined,
  // Close,
  NotificationsOutlined,
  PeopleAltOutlined,
  Search,
  ExpandMore, } from "@mui/icons-material";


function Header() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const Close = <CloseIcon />;
  

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

      <Modal open={isModalOpen}
            closeIcon={Close}
            onClose={() => setIsModalOpen(false)}
            closeOnEsc
            center
            closeOnOverlayClick={false}
            styles={{
              overlay: {
                height: "auto",
              },
            }}
          >
            <div className="modal__title">
              <h5>Add Question</h5>
              <h5>Share Link</h5>
            </div>
            <div className="modal__info">
              <Avatar className="avatar" />
              <div className="modal__scope">
                <PeopleAltOutlined />
                <p>Public</p>
                <ExpandMore />
              </div>
            </div>
            <div className="modal__Field">
           
              <Input
               
               
                type=" text"
                placeholder="Start your question with 'What', 'How', 'Why', etc. "
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <input
                  type="text"
                 
                 
                  style={{
                    margin: "5px 0",
                    border: "1px solid lightgray",
                    padding: "10px",
                    outline: "2px solid #000",
                  }}
                  placeholder="Optional: inclue a link that gives context"
                />
             
              </div>
            </div>
            <div className="modal__buttons">
              <button className="cancle" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button  className="add">
                Add Question
              </button>
            </div>
      </Modal>
  
    </div>
      </div>
    </div>
  );
}

export default Header;
