import React,{useState} from 'react';

const useVal = (initVal) => {
    const [val,setVal] = useState(initVal);
    
    const changerVal = () => {
         setVal( v => v % 3 === 0 ? v%2 : v);
    }
    return [val,changerVal]
}

export default function RecupererVal(){
    const [val,changerVal] = useVal(3);

    return(
        <div>
            <button onClick={changerVal}>Changer</button>
            <p>{val}</p>
        </div>
    )
}