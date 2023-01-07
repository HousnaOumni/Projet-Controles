import {useState} from "react";

export default function Filiere() {
    const[filieres,setFilieres] = useState(["DEVOWFS","DEVOWAM","DD","ID"]);
    const [data,setData] = useState('')
       
    const handleAdd = () => {
        setFilieres(prev => [...prev,data])
    }
    
    //Amimar
    const handleDel = (id) => {
        const res = filieres.filter((m,index) => index !== id)
        setFilieres(res)
    }

        return(
           <div>
               <form onSubmit={(e) =>e.preventDefault()}>
                   <input type="text" name="data" 
                          value={data}
                          onChange = {(e) => setData(e.target.value)} />
                    <button onClick={() => handleAdd()}>Ajouter Loisir</button>
                </form>
                <div>
                    <ul>
                    {filieres.map((l,index) => {
                            return(
                            <li key={index}>
                                {l}
                               <button onClick={() => handleDel(index)}>Supprimer Filiere</button>
                            </li>
                            )
                        })}
                    </ul>
                </div>
           </div>

        )
    }