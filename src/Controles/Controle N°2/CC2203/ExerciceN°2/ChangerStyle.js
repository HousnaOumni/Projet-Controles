import Styled from 'styled-components';

const Article = Styled.article`
   border :1px solid rgba(0,0,0,0.03);
   border-radius :10px;
   margin:20px;
   padding:10px;
   line-height:1.5;
`;

const H2 = Styled.h2`
     border-bottom:3px dotted black;
     font-family:cursive;
`;
export default function ChangerStyle(){
  return(
      <Article>
         <H2>titre</H2>
         <div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam eos deserunt ut cum, doloribus nulla numquam velit maxime hic assumenda saepe modi earum nam quod delectus. Debitis adipisci illum inventore?</p>
            <a href="#">Plus de détail</a>
         </div>
       </Article>
  )
}
