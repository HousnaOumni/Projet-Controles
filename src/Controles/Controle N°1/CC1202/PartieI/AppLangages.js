import React from 'react';
import ListerLangages from './ListerLangages';

export default function AppLangages(){
    const langs = ["PHP","JAVA","PYTHON","JAVASCRIPT"];
    return(
        <div>
            <ListerLangages langages={langs} />
        </div>
    )
}