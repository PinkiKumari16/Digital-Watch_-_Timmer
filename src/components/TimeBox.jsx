import React from 'react'

export const TimeBox = ({ recordTime, deleteRecord }) => {
  return (
    <>
      <div className='timeList'>
        <h1>{recordTime}</h1>
        <button className='crossBtn' onClick={()=>deleteRecord(recordTime)}>X</button>
      </div>
    </>
  )
}
