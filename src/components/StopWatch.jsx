import React, { useEffect, useState } from 'react'
import { TimeBox } from './TimeBox'

export const StopWatch = () => {
    let[sec, setSec] = useState(0)
    let[min, setMin] = useState(0)
    let[hour, setHour] = useState(0)
    let[intervalId, setIntervalId] = useState(null)
    let[timeArray, setTimeArray] = useState([])

    const start = () => {
        if(intervalId) return;

        const id = setInterval(()=>{
            setSec(prevSec => {
                if(prevSec === 59){
                    setMin(prevMin => {
                        if(prevMin === 59){
                            setHour(prevHour => prevHour + 1);
                            return 0;
                        }
                        return prevMin + 1;
                    });
                    return 0;
                }
                return prevSec + 1;
            });
        },1000);

        setIntervalId(id);
    }

    useEffect(()=>{
        return () => clearInterval(intervalId);
    },[intervalId]);

    const reStart = () =>{
        clearInterval(intervalId);
        setHour(0)
        setMin(0)
        setSec(0)
        setIntervalId(null); 
    }
    const stop = () => {
        clearInterval(intervalId)
        setIntervalId(null)
    }

    const showTime = () =>{
        const timming = `${hour < 10 ? '0' : ''}${hour} : ${min < 10 ? '0' : ''}${min} : ${sec < 10 ? '0' : ''}${sec}`;
        setTimeArray([...timeArray, timming]);
        // console.log(timming);
        // console.log("******************", timeArray);

        
    }
    
  return (
    <>
        <div className='stopWatch'>
            <h1>
                {hour<10 && 0}{hour} : {min<10 && 0}{min} : {sec<10 && 0}{sec}
            </h1>
            <div className='buttons'>
                <button onClick={reStart}>Re-Start</button>
                <button onClick={stop}>Stop</button>
                <button onClick={start}>Start</button>
            </div>
            <button className='recoadButton' onClick={showTime}>Recoad Time</button>
        </div>
        {timeArray.map((ele)=><TimeBox key={ele} recordTime={ele}/>)}
    </>
  )
}
