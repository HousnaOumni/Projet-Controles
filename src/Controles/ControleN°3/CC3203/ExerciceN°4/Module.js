import {useState} from "react";

export default function Module() {
    const[modules,setModules] = useState(["Developpement front-end","Developpement back-end","Méthode Agile","Créer une application cloud native"])
    const [data,setData] = useState('')
       
    const handleAdd = () => {
        setModules(prev => [...prev,data])
    }
    

    /*
    const handleDel = (id) => {
        modules.map((m,index) => {
                                   if(index === id)
                                    setModules(modules.filter(e => e!== m))
                                
                            }) ;
    }
  */
 
    function deleteMod(id){
        setModules(prev => prev.filter((e,ind) => ind !== id ))
    }

    const handleChange = (e) => {
        setData(e.target.value);
    }
        return(
           <div>
               <form onSubmit={(e) =>e.preventDefault()}>
                   <input type="text" name="data" 
                          value={data}
                          onChange = {(e) => handleChange(e)} />
                    <button onClick={() => handleAdd()}>Ajouter Module</button>
                </form>
                <div>
                    <ul>
                    {modules.map((l,index) => { 
                        return (
                            <li key={index}> {l}
                               <button onClick={() => deleteMod(index)}>Supprimer Module</button>
                            </li>
                        )
                    })}
                    </ul>
                </div>
           </div>

        )
    }