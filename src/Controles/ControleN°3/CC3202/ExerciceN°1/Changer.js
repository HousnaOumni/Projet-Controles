import React,{useState} from 'react';

const useToggle = (initVal) => {
    const [isVal,setIsVal] = useState(initVal);
    
    const toggle = () => {
         setIsVal( prev => !prev);
    }
    return [isVal,toggle]
}

export default function Changer(){
    const [val,changerVal] = useToggle(true);

    return(
        <div>
            <button onClick={changerVal}>Changer</button>
            <p>vous avez choisi la valeur {val ? 'True' : 'false'}</p>
        </div>
    )
}