import React from 'react';

/*export default function ListerFiliere(props){
    return(
        <select>
            {props.filieres.map((fil,index) => <option key={index} value={fil}>{fil}</option>)}
        </select>
    )
}*/

export default function ListerFiliere(props){
    const filieres = props.filieres.map((filiere,index) => <option key={index}>{filiere}</option>)
    return(
        <select>
            {filieres}
        </select>
    )
} 