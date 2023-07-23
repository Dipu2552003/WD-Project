//rfce

import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widget from './Widget'
import "./css/Main.css"

function Main() {
  return (
    <div className="main">
    <Header></Header>
    <div className="main__contents">
      <div className='main__content'>
        <Sidebar></Sidebar>
        <Feed></Feed>
        <Widget></Widget>
      </div>
    </div>
    </div>
  )
}

export default Main