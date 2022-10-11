// import React, { useState } from 'react'
// import CardComments from './CardComments'
// import  { Itask } from "./DbConnector";
// import styled from "styled-components";
// import ReactDOM from "react-dom";

// function CardCommentsContainer({ text }: { text: Itask }) {
   
//     const [comment, setcomment] = useState<JSX.Element>()
//     const portal: HTMLElement = document.getElementById(
//         "cardComments"
//       ) as HTMLElement;
// setcomment(<CardComments text={text}/> )
//   return ReactDOM.createPortal(
//     <ParentDiv>
//         {comment}
//         </ParentDiv>,
//           portal
//           );
  
// }

// export default CardCommentsContainer

// const ParentDiv = styled.div`
// justify-items: center;
// align-items: center;
// justify-self: center;
//        align-content: center;
//   justify-content: center;


// `;

import React from 'react'

function CardCommentsContainer() {
  return (
    <div>CardCommentsContainer</div>
  )
}

export default CardCommentsContainer