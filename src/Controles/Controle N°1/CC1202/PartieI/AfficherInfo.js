import React from "react";

export default function AfficherInfo(props){
   return(
       <p>Bonjour {props.Nom} {props.Prenom} agé de {props.Age}</p>
   )
}