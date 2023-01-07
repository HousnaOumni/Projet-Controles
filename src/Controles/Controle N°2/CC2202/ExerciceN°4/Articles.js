import Article from './Article';

export default function Articles()
{
    const elements = [
        {reference:1,libelle:'Article1',prix:1500,quantite:14},
        {reference:2,libelle:'Article2',prix:1000,quantite:7}
    ]

    return(
        <div>
            {elements.map(e => <Article key={e.reference} {...e} />)}
        </div>
    )
}