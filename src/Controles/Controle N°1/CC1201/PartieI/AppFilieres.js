import React from 'react';
import ListerFiliere from './ListerFiliere';

export default function AppFilieres(){
    const fs = ["DEVOWFS","Developpement Digital","Developpement Infrastructure","DEVOWAM"];
    return(
        <div>
            <ListerFiliere filieres={fs} />
            {/* <ListerFiliere filieres={["DEVOWFS","Developpement Digital","Developpement Infrastructure","DEVOWAM"]} /> */}
        </div>
    )
}