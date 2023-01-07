
export default function Article(props){
    return (
        <div>
          <p>Reference :{props.reference}</p>
          <p>Libelle :{props.libelle}</p>
          <p>Prix :{props.prix}</p>
          <p>Quantite :{props.quantite}</p>
        </div>
    )
}