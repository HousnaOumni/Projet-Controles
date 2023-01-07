import {useState} from 'react';

export default function Formulaire()
{
    const [dataForm,setDataForm] = useState({
        nom:'',email:'',sexe:'',pays:'',domaines:[] });
    
    const [info,setInfo] = useState('');

    const handleChange = (e) => {
        const {name,value,type,checked} = e.target;

        setDataForm( prev => {
            if(checked){
              return {...prev,[name]: type === "checkbox" ? [...dataForm.domaines,value] : value}
            }
            else{
                return {...prev,[name]: type === "checkbox" ? [...dataForm.domaines.filter(x => x !== value)] : value}
            }
        });
    }
        const displayInfo = () => {
            setInfo(`Nom : ${dataForm.nom} , Email : ${dataForm.email} ,Sexe : ${dataForm.sexe}
            Pays : ${dataForm.pays} , Domaine d'activités : ${dataForm.domaines}`)
        }
        
        return(
            <fieldset>
                <legend>Formulaire d'inscription</legend>
                <form onSubmit={e=> e.preventDefault()}>
                 <table>
                    <tr> 
                        <td><label htmlFor='nom'>Nom</label></td>
                        <td>   <input type="text" name="nom" 
                            value={dataForm.nom} onChange={handleChange}/></td>
                    </tr>
                    <tr> 
                        <td><label htmlFor='email'>Email</label></td>
                        <td><input type="email" name="email" 
                            value={dataForm.email} onChange={handleChange}/></td>
                    </tr>
                    <tr> 
                        <td><label htmlFor='sexe'>Sexe</label></td>
                        <td>Masculin : <input type="radio" name="sexe" 
                            value="Homme" onChange={handleChange}/>
                            Feminin : <input type="radio" name="sexe" 
                            value="Femme" onChange={handleChange}/></td>
                    </tr>
                    <tr> 
                        <td><label htmlFor='pays'>Pays</label></td>
                        <td><select name="pays" onChange={handleChange}>
                              <option value="France">France</option>
                              <option value="Maroc">Maroc</option>
                             </select>
                        </td>
                    </tr>
                    <tr> 
                        <td><label htmlFor='domaines'>Domaines d'activités</label></td>
                        <td>
                            <input type="checkbox" name="domaines" value="Informatique" onChange={handleChange} /> Informatiques
                            <input type="checkbox" name="domaines" value="Gestion" onChange={handleChange} /> Gestion
                            <input type="checkbox" name="domaines" value="Pedagogie" onChange={handleChange} /> Pedagogie
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <input type="submit" value="Envoyer" onClick={displayInfo} />
                            <input type="reset" value="Annuler"/>
                        </td>
                    </tr>
                 </table>
                </form>
                <p>{info}</p>
            </fieldset>
        )
    }
