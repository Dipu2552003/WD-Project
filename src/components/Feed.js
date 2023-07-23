import React from 'react'
import MainBox from './MainBox'
import Post from './Post'
import './css/Feed.css'

function Feed() {
  return (
    <div className="feed">
   <MainBox></MainBox>
   <Post></Post>
   <Post></Post>
   <Post></Post>
    </div>
  )
}

export default Feed