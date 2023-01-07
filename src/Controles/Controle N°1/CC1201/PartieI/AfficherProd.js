import React from "react";

export default function AfficherProd(props){
   return(
       <div>
            <p>Le produit dont la référence est {props.Ref},le libelle est {props.Libelle} et son prix est {props.Prix}</p>
       </div>
   )
}

/* export default function AfficherProd({Ref,Libelle,Prix}){
   return(
       <div>
            <p>Le produit dont la référence est {Ref},le libelle est {Libelle} et son prix est {Prix}</p>
       </div>
   )
} */