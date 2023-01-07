import { useEffect } from "react";
import React,{useState} from "react";

export default function Count(){
    let intervalId = useRef(null)
    const [count,setCount] = useState(0);

    function changerCount(){
        setCount(prev => prev + 1);
    }
    
    useEffect(() => {
        intervalId.current = setInterval(changerCount(),1000)
        console.log("mount",intervalID)
    },[])
    
    useEffect(() => {
        if(intervalId.current)
           clearInterval(intervalId.current);
        
        intervalId.current= setInterval(changerCount(),1000);
        console.log("update",intervalId.current);

        return () => {
            clearInterval(intervalId.current);
            console.log("unmount",intervalId.current);
        } 
    },[count])

    return(
        <div>
            <h2> {count}</h2>
            {count > 15 ? null : <F1/>}
        </div>
    )
}

function F1(){
    return(
        <div>Hello world</div>
    )
}