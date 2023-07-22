import React from 'react'
import SidebarOptions from './SidebarOptions'
import "./css/Sidebar.css"
import { Add } from "@mui/icons-material";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';


function Sidebar() {
  return (
    <div className="sidebarOptions">
    <div className="sidebarOption">
      <LibraryBooksIcon />
      <p>Academic</p>
    </div>

    <div className="sidebarOption">
    <LibraryBooksIcon />

      <p>Clubs</p>
    </div>
    <div className="sidebarOption">
      <LibraryBooksIcon />
      <p>Scholarship</p>
    </div>

    <div className="sidebarOption">
    <LibraryBooksIcon />
      <p>Project</p>
    </div>

    <div className="sidebarOption">
    <LibraryBooksIcon />
      <p>Extracurricular</p>
    </div>

   

   



 

   
    <div className="sidebarOption">
      <Add />
      <p className="text">Discover Spaces</p>
    </div>
  </div>
);
}


export default Sidebar