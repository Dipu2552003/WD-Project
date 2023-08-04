import React from 'react'
import { Add } from "@mui/icons-material";
import './css/SidebarOptions.css'


function SidebarOptions() {
  return (
    <div className="sidebarOptions">

      <div className="sidebarOption">
        <img
          src="./img/academic.jpg"
          alt=""
        />
        <p>Academic</p>
      </div>

      <div className="sidebarOption">
        <img
         src="./img/higher.jpg"
          alt=""
        />
        <p>Higher Studies</p>
      </div>

      <div className="sidebarOption">
        <img
                   src="./img/img3.jpg"
          alt=""
        />
        <p>Clubs</p>
      </div>

      <div className="sidebarOption">
        <img src="./img/academic.jpg"
          alt=""
        />
        <p>Scholoarships</p>
      </div>

      <div className="sidebarOption">
        <img
                   src="./img/academic.jpg"
          alt=""
        />
        <p>Placement</p>
      </div>

      <div className="sidebarOption">
        <img
                   src="./img/academic.jpg"
          alt=""
        />
        <p>Sports</p>
      </div>

     
      <div className="sidebarOption">
        <Add />
        <p className="text">Discover Spaces</p>
      </div>
    </div>
  )
}

export default SidebarOptions