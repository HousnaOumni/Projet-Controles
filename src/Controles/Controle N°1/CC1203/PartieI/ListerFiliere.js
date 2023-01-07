import React from 'react';

export default function ListerFiliere(props){
    return(
        <ul>
            {props.filieres.map((filiere,index) => <li key={index}>{filiere}</li>)}
        </ul>
    )
}

/* export default function ListerFiliere(props){
    const filieres = filieres.map((filiere,index) => `<li key=${index}>${filiere}</li>`)
    return(
        <ul>
            {filieres}
        </ul>
    )
} */