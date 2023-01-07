import {useAxios} from '../ExerciceN°2/Posts';
import {useParams} from 'react-router-dom';
import React from 'react';

const PostParId = () => {
    const {id} = useParams();
    const data = useAxios("https://jsonplaceholder.typicode.com/posts?_limit=10")
      //const data = useAxios('api/posts.json');
    console.log(data)
    // const post =  data.find(p => p.id === parseInt(id));
    return (
        <div>
             {    
               data.filter(post => post.id === parseInt(id)).map(post => 
                <div>
                  <p>{post.title}</p>
                  <p>{post.body}</p>
                </div>
               )}
        </div>
    )
}

export default PostParId;
