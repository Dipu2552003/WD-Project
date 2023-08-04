import React from 'react'
import SidebarOptions from './SidebarOptions'
import "./css/Sidebar.css"
import { Add } from "@mui/icons-material";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';


function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarOptions />
    </div>
);
}


export default Sidebar