import Stagiaire from './Stagiaire';

export default function Stagiaires()
{
    const data = [
        {code:1,nom:'Alami Ali',dateNais:"1999-12-07",filiere:"DEVOWFS",groupe:203},
        {code:2,nom:'Dali Ibrahim',dateNais:"1997-09-01",filiere:"DEVOWAM",groupe:201},
    ]

    return(
        <div>
            {data.map(stg => <Stagiaire key={stg.code} {...stg} />)}
        </div>
    )
}