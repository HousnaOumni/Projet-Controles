
export default function Stagiaire({code,nom,dateNais,filiere,groupe}){
    return (
        <div>
          <p>Code d'inscription :{code}</p>
          <p>Nom Complet :{nom}</p>
          <p>Date de Naissance :{dateNais}</p>
          <p>Filiere  :{filiere}</p>
          <p>Groupe  :{groupe}</p>
        </div>
    )
}