import React, { useEffect, useState } from 'react'
import digitalWatch from '/Google Photos.jpeg';
export const Clock = () => {
    let [time, setTime] = useState(new Date())

    useEffect(()=>{
        setTimeout(()=>{
            setTime(new Date())
        },1000)
    },[time])
    const formateDate = time.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
    })

  return (
    <>
        <h1 className='digitalText'>Digital Watch</h1><br></br>
        <div className='watchBox' style={{backgroundImage: `url(${digitalWatch})`}}>
            <div className='time'>
                <h1 className='currentDate'>{formateDate}</h1>
            </div>
        </div>
    </>
  )
}
