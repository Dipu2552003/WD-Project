import React, { useState } from "react";
import "./css/Post.css";
import { Avatar, Input } from "@mui/material";
import {
  ArrowBackIosNewOutlined,
  ArrowDownwardOutlined,
  ArrowUpwardOutlined,
  ChatBubbleOutline,
  ChatBubbleOutlined,
  FolderSharedOutlined,
  MoreHorizOutlined,
  RepeatOnOutlined,
  RepeatOne,
  RepeatOneOnOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import ReactTimeAgo from "react-time-ago";
import TimeAgo from "javascript-time-ago";

import Modal from "react-responsive-modal";
import CloseIcon from "@mui/icons-material/Close";
import ReactModal from "react-modal";
import {
  AssignmentTurnedInOutlined,
  // Close,
  NotificationsOutlined,
  PeopleAltOutlined,
  Search,
  ExpandMore,
} from "@mui/icons-material";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import ReactHtmlParser from "html-react-parser";

function LastSeen({ date }) {
  return (
    <div>
      <ReactTimeAgo date={date} locale="en-US" timeStyle="round" />
    </div>
  );
}

function Post({ post }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    height: "60%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    zIndex: 9999, // Set the zIndex higher to place the modal in front
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [inputUrl, setInputUrl] = useState("");
  const [question, setQuestion] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [answer, setAnswer] = useState("");
  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  function isValidUrl(url) {
    const urlPattern = /^(http|https):\/\//i;
    return urlPattern.test(url);
  }

  const handleQuill = (value) => {
    setAnswer(value);
  };
  console.log(answer);

  const handleSubmit = async () => {
    if (post?._id && answer !== "") {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = {
        answer: answer,
        questionId: post?._id,
      };
      await axios
        .post("/api/answers", body, config)
        .then((res) => {
          console.log(res.data);
          alert("Answer added");

          window.location.href = "/";
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <div className="post">
      <div className="post__info">
        <Avatar></Avatar>
        <h4>User Name</h4>
        {/* //LastSeennotused */}
        <small>
          <LastSeen date={post?.createdAt}></LastSeen>
        </small>
      </div>
      <div className="post__body">
        <div className="post__question">
          <p>{post?.questionName}</p>
          <button className="post__btnAnswer" onClick={handleOpen}>
            Answer
          </button>
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
                style={{ position: "absolute", top: 5, right: 5 }}
              >
                <CloseIcon />
              </IconButton>
              <div classname="modal_question">
                <h1>{post.questionName}</h1>
                <p>
                  asked by <span>Username</span>on{" "}
                  <span className="name">
                    {new Date(post?.createdAt).toLocaleDateString()}
                  </span>
                </p>
              </div>
              <div className="modal_answer">
                <ReactQuill
                  value={answer}
                  onChange={handleQuill}
                  placeholder="Enter your answer"
                  style={{
                    height: "370px",
                    marginBottom: "60px",
                    marginTop: "10px",
                  }}
                />
              </div>
              <div className="modal__buttons" style={{ marginTop: "10px" }}>
                <button className="cancel" onClick={handleClose}>
                  Cancel
                </button>
                <button onClick={handleSubmit} type="submit" className="add">
                  Add Answer
                </button>
              </div>
            </Box>
          </Modal>
        </div>
        {post.questionUrl && isValidUrl(post.questionUrl) && (
          <img src={post.questionUrl} alt="url" />
        )}

        <div
        style={{
          margin: "5px 0px 0px 0px ",
          padding: "5px 0px 0px 20px",
          borderTop: "1px solid lightgray",
        }}
        className="post__answer"
      >
        {post?.allAnswers?.map((_a) => (
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                padding: "10px 5px",
                borderTop: "1px solid lightgray",
              }}
              className="post-answer-container"
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#888",
                }}
                className="post-answered"
              >
                <Avatar src={_a?.user?.photo} />
                <div
                  style={{
                    margin: "0px 10px",
                  }}
                  className="post-info"
                >
                  <p>{_a?.user?.userName}</p>
                  <span>
                    <LastSeen date={_a?.createdAt} />
                  </span>
                </div>
              </div>
              <div className="post-answer">{ReactHtmlParser(_a?.answer)}</div>
            </div>
          </>
        ))}
      </div>


      </div>
      <div className="post__footer">
        <div className="post__footerAction">
          <ArrowUpwardOutlined />
          <ArrowDownwardOutlined />
        </div>
        <RepeatOneOnOutlined />
        <ChatBubbleOutlined />
        <div className="post__footerleft">
          <ShareOutlined />
          <MoreHorizOutlined />
        </div>
      </div>
      <p
        style={{
          color: "rgba(0,0,0,0.5)",
          fontSize: "12px",
          fontWeight: "bold",
          margin: "10px 0",
        }}
      >
        {post?.allAnswers.length} Answer(s)
      </p>
      
    </div>
  );
}

export default Post;
