import Styled from 'styled-components';

const Div = Styled.div`
   font-family :verdana;
   line-height :1.5px;
   margin:10px;
   font-size:1em;
`;

const Lien = Styled.a`
     color:#8870FF;
     margin-left:20px;
`
export default function ChangerStyle(){
  return(
      <Div>
         <h1>Web Mobile</h1>
         <p>D'apres wikipédia : le Web Mobile ....</p>
         <blockquote>
            <p>
              L'initiative du Web mobile est importante  
            </p>
         </blockquote>
            <Lien href="#">Plus de détail</Lien>
       </Div>
  )
}
