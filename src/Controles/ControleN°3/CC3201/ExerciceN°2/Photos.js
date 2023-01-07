import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

const useFetch = (url) => {
    const [apiData,setApiData] = useState([]);

    const getData = async(url) => {
        await fetch(url).then(res => res.json()).then(data => setApiData(data))
         .catch(error => console.log(error))
    }
    useEffect(() => {
        getData(url)
    },[url])

    return apiData;
}
export {useFetch}

export default function Photos(){
    const liste = useFetch('https://jsonplaceholder.typicode.com/photos?_limit=10');
    console.log(liste)
    return(
        <div>
           <table>
               <tbody>
               <tr><th>Title</th><th>Url</th><th>Image</th></tr>
               {liste.map((photo,index) => {
                   return (
                       <tr key={index}>
                           <td>{photo.title}</td>
                           <td>{photo.url}</td>
                           <td><Link to={`/PhotoParId/${photo.id}`}><img src={photo.url} alt='' width="50%"/></Link></td>  
                       </tr>
                   )
                 }
                )}
                </tbody>
           </table>
        </div>
    )
}