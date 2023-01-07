import React, {useState,useEffect } from "react";

export default function Clock(){
    const [date,setDate] = useState(new Date());
    const [timerId,setTimerId] = useState();

    function changerDate(){
        setDate(new Date());
    }
    
    useEffect(() => {
        setTimerId(
            setInterval(() => changerDate(),1000))
            console.log(timerId)
    },[])
    useEffect(() => {
        if(timerId)
           clearInterval(timerId)
        setTimerId(setInterval(() => changerDate(),1000))
        console.log(timerId)
    },[timerId])

    useEffect(() => {
        return () => {
            clearInterval(timerId);
        }
    },[timerId])

    return(
        <div>
            <h2>it is {date.toLocaleDateString()}</h2>
            {date.getMonth() < 12 ? null : <F1/>}
        </div>
    )
}

function F1(){
    return(
        <div>Hello world</div>
    )
}