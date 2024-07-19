import React, { useEffect, useState } from 'react'

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
        <div className='watchBox'>
            <div className='time'>
                <h1>Digital Watch</h1><br></br>
                <h1>{formateDate}</h1>
            </div>
        </div>
    </>
  )
}
