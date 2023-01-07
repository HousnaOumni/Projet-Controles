import {useParams} from 'react-router-dom';
import {useFetch} from '../ExerciceN°2/Photos'

const PhotoParId = () => {
    const {id} = useParams();
    const liste = useFetch('https://jsonplaceholder.typicode.com/photos?_limit=10');
    
    return (
        <table>
            <tbody>
                {    
                 liste.filter(ph => ph.id === parseInt(id)).map(ph => 
                  <tr>
                   <td>{ph.title}</td>
                   <td>{ph.url}</td>
                   <td><img src={ph.url} alt='' width="50%"/></td> 
                 </tr>
              )
            }
            </tbody>
        </table>
    )
}

//Ayouch
/* const PhotosParId = ({data}) => {
    const {id} = useParams();
    const photo = data.find(photo => photo.id === parseInt(id))

    return (
        <div>
            <p>{photo.title}</p>
            <p>{photo.url}</p>
            <p><img src= {photo.url} alt="" /></p>
        </div>
    )
} */

export default PhotoParId;