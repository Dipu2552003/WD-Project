import { Avatar } from '@mui/material';
import React from 'react'
import './css/MainBox.css'

function MainBox() {
  return (
    <div className="mainBox">
      <div className="mainBox__info">
      <Avatar></Avatar>
    </div>
    <div className="mainBox__main">
        <p>What is your Question?</p>
    </div>
    </div>
  )
}

export default MainBox;