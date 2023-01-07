import React from "react";

export default function AfficherInfoV(props){
   return(
       <div>
            <p>Matricule :{props.Matricule} </p>
            <p>Modèle :{props.Modele} </p>
            <p>Marque :{props.Marque} </p> 
            <p>Couleur:{props.Couleur}</p>
       </div>
   )
}

/* export default function AfficherInfoV({Matricule,Modele,Marque,Couleur}){
    return(
        <div>
             <p>Matricule :{Matricule} </p>
             <p>Modèle :{Modele} </p>
             <p>Marque :{Marque} </p> 
             <p>Couleur:{Couleur}</p>
        </div>
    )
 } */