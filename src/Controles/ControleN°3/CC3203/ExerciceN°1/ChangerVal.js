import React,{useState} from 'react';

const useVal = (initVal) => {
    const [val,setVal] = useState(initVal);
    
    const changer = () => {
         if(val % 2 === 0)
           setVal(val /2)
         else
           setVal(val * 3 + 1 )

       // setVal(val%2 == 0 ? val / 2 : val * 3 + 1)
    }
    return [val,changer]
}

export default function ChangerVal(){
    const [val,changer] = useVal(9);

    return(
        <div>
            <button onClick={changer}>Changer</button>
            <p>{val}</p>
        </div>
    )
}