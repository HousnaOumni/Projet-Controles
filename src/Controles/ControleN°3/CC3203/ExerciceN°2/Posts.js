import React,{useEffect, useState} from 'react';
import {Link} from "react-router-dom";

const useAxios = (url) => {
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
export {useAxios}


/*
const useAxios = (url) => {
    const [res,setRes] = useState([]);

    useEffect(() => {
        const getPost = async(url) =>
        {
            await axios.get(url).then(r => setRes(r.data))
            .catch(error => console.log(error))
        }
        getPost(url);
    },[url])

    return res;
}
export {useAxios}
*/
export default function Posts(){
    const data = useAxios('https://jsonplaceholder.typicode.com/posts?_limit=10');
  //  const data = useAxios('api/posts.json')
    console.log(data)

    return(
        <div>
           <table>
             <tbody>
               <tr><th>Id</th><th>Title</th><th>Body</th></tr>
               {
                data.map((post,index) => {
                   return (
                       <tr key={index}>
                           <td><Link to ={`/PostParId/${post.id}`}>{post.id}</Link></td>
                           <td>{post.title}</td>
                           <td>{post.body}</td>
                       </tr>
                   )
                 }
                )}
              </tbody>
           </table>
        </div>
    )
}
