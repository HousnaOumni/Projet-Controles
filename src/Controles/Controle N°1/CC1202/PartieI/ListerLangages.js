import React from 'react';

export default function ListerLangages(props){
    return(
        <ul>
            {props.langages.map((lang,index) => <li key={index}>{lang}</li>)}
        </ul>
    )
}