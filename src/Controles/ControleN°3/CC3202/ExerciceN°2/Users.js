import React from 'react';
import {useFetch} from './useFetch';
import {Link} from 'react-router-dom';

export default function Users(){
    const users = useFetch('https://jsonplaceholder.typicode.com/users?_limit=10');
    //const users = useFetch('api/users.json');
    console.log(users)
    return(
        <div>
         <table>
             <tbody>
                 <tr><th>id</th><th>name</th><th>username</th></tr> 
                {
                    users.map((user,index) => {
                        return (
                                <tr key={index}>
                                  <td><Link to={`/UserParId/${user.id}`}>{user.id}</Link></td>
                                  <td>{user.name}</td>
                                  <td>{user.username}</td>
                                </tr>
                             )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}