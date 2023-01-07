import Voiture from './Voiture';

export default function Stagiaires()
{
    const data = [
        {matricule:1,marque:'Fiat',modele:"2022",couleur:"noir",prix:180000},
        
    ]

    return(
        <div>
            {data.map(v => <Voiture key={v.matricule} {...v} />)}
        </div>
    )
}