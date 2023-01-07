import Styled from 'styled-components';

const Titre = Styled.h1`
   font-size :1.5em;
   magin-bottom :1.5em;
   color:#454545;
   font-weight:bold;
`;

const Paragraphe = Styled.p`
     color:#7a7a7a;
     margin-left:20px;
     margin-bottom:1.5em;
`;
export default function ChangerStyle(){
  return(
      <div>
         <Titre>Web Mobile</Titre>
         <Paragraphe>D'apres wikipédia : le Web Mobile ....</Paragraphe>
         <blockquote>
            <Paragraphe>
              L'initiative du Web mobile est importante  
            </Paragraphe>
         </blockquote>
            <a href="#">Plus de détail</a>
       </div>
  )
}
