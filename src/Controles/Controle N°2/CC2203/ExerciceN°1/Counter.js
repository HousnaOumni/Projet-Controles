import React,{ useState,useEffect,useRef} from "react";

export default function Counter(){
    const [count,setCount] = useState(0);
    let intervalId = useRef(null)
    const increment = () => { setCount(prev => prev + 1); }
    
    useEffect(() => {
        intervalId.current = setInterval(increment ,1000)
        console.log("mount")
    },[])

    useEffect(() => {
        if(intervalId.current)
           clearInterval(intervalId.current);
        intervalId.current = setInterval(increment ,1000);
        console.log("update");

        return () => {
            clearInterval(intervalId.current);
            console.log("unmount");
        } 
    },[count])

    return(
        <div>
            <h2> {count}</h2>
            {count > 4 ? null : <F1/>}
        </div>
    )
}

function F1(){
    return(
        <div>Hello world</div>
    )
}