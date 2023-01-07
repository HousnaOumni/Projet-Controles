
export default function Voiture(props){
    return (
        <div>
          <p>Matricule :{props.matricule}</p>
          <p>Marque :{props.marque}</p>
          <p>Modele :{props.modele}</p>
          <p>Couleur  :{props.couleur}</p>
          <p>Prix  :{props.prix}</p>
        </div>
    )
}