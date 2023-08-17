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

  import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import axios from "axios";
import { useSelector } from "react-redux";

  


function Header() {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    height: '60%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    zIndex: 9999, // Set the zIndex higher to place the modal in front
  };


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [inputUrl, setInputUrl]= useState("");
  const [question,setQuestion]=useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const tags = ['#Academic', '#HigherStudies', 'Clubs', 'Scholoarship'];
  const [selectedTags, setSelectedTags] = useState([]);
  
  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

 

  const handleSubmit = async()=>{
    if(question!==""){

      const config={
        headers: {
          "Content-Type": "application/json"
        }
      }

      const body={
        questionName: question,
        questionUrl: inputUrl,
        tags: selectedTags,
      }
      await axios.post('/api/questions' , body,config).then((res)=>{
        console.log(res.data)
        alert(res.data.message);
        window.location.href="/";
      }).catch((e)=>{
        console.log(e)
      })
    }
  }

   const toggleTag = (tagText) => {
    if (selectedTags.includes(tagText)) {
      setSelectedTags(selectedTags.filter(tag => tag !== tagText));
    } else {
      setSelectedTags([...selectedTags, tagText]);
    }
  };
  

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
      <div>

      <Button onClick={handleOpen}>Add Question</Button>
      <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          closeOnEsc
        >
          <Box sx={style}>
            <IconButton
              onClick={handleClose}
              style={{ position: 'absolute', top: 5, right: 5 }}
            >
              <CloseIcon />
            </IconButton>
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
              value={question}
                onChange = {(e)=>setQuestion(e.target.value)}
                type="text"
                placeholder="Start your question with 'What', 'How', 'Why', etc. "
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <input
                 onChange = {(e)=>setInputUrl(e.target.value)}
                  type="text"
                  style={{
                    margin: "5px 0",
                    border: "1px solid lightgray",
                    padding: "10px",
                    outline: "2px solid #000",
                  }}
                  placeholder="Optional: include a link that gives context"
                />
              </div>

              <div
              style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "20px",
                }}
              >    
      <div id="selectedTags">
        {selectedTags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
      <div id="tagContainer">
      {tags.map((tag, index) => (
          <span
            key={index}
            className={`tag ${selectedTags.includes(tag) ? 'selected' : ''}`}
            onClick={() => toggleTag(tag)}
          >
            {tag}
          </span>
        ))}
         </div>
    </div>
            </div>
            <div className="modal__buttons">
              <button className="cancel" onClick={handleClose}>
                Cancel
              </button>
              <button onClick={handleSubmit} type="submit" className="add">
                Add Question
              </button>
            </div>
          </Box>
        </Modal>
  
    </div>
      </div>
    </div>
  );
}

export default Header;
