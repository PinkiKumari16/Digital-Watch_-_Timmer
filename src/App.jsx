import { useState } from 'react'
import './App.css'
import { Clock } from './components/Clock'
import { StopWatch } from './components/StopWatch'
// import video from '/background-video.mp4'

function App() {

  return (
    <>
      <div className='videoBox'>
        <video autoPlay loop muted className='backgroundVideo'>
          <source src='/video-background.mp4' type='video/mp4' />
        </video>
        <div className='content'>
          <Clock />
          <StopWatch />
        </div>
      </div>
    </>
  )
}

export default App
