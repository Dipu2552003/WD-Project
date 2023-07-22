//rfce

import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widget from './Widget'
import "./css/Main.css"

function Main() {
  return (
    <div className="Main">
    <Header></Header>
    <div className="Main__contents">
      <div className='Main__content'>
        <Sidebar></Sidebar>
        <Feed></Feed>
        <Widget></Widget>
      </div>
    </div>
    </div>
  )
}

export default Main