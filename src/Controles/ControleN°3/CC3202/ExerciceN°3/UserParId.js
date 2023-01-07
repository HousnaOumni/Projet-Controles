import {useFetch}  from '../ExerciceN°2/useFetch'
import {useParams} from 'react-router-dom';


const UserParId = () => {
    const {id} = useParams();
    const users= useFetch("https://jsonplaceholder.typicode.com/users?_limit=10")
    console.log(users)

    return (
        <div>
            <table>
                <tbody>
                <tr><th>name</th><th>username</th></tr> 
                {    
                 users.filter(user => user.id === parseInt(id)).map(user => {
                   return  <tr>
                      <td>{user.name}</td>
                      <td>{user.username}</td>
                    </tr>
                 })
                }
                </tbody>
            </table>
        </div>
    )
}

export default UserParId;
