import React from 'react'

export const TimeBox = ({recordTime}) => {
  return (
    <>
        <div className='timeList'>
            <h1>{recordTime}</h1>
            <button>X</button>
        </div>
    </>
  )
}
