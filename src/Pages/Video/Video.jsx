import React from 'react'
import "./Video.css"
import PlayVideo from '../../components/PlayVideo/PlayVideo'
import Recommend from '../../components/Recommend/Recommend'

const Video = () => {
  return (
    <div className='play-container'>
      <PlayVideo />
      <Recommend />
    </div>
  )
}

export default Video
