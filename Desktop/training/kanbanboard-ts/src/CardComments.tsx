import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import dbConnector, { Itask } from "./DbConnector";

let newCommentValue: string = "";
function CardComments({ text }: { text: Itask }) {
  const portal: HTMLElement = document.getElementById(
    "cardComments"
  ) as HTMLElement;
  const [comments, setComments] = useState<string[]>([]);


  const handleOnchange = (val: string) => {
    newCommentValue = val;
  };
console.log(newCommentValue)
  const handleOnclick = () => {
    text.comment?.push(newCommentValue);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    newCommentValue
    ? setComments((preState) => [...preState, newCommentValue])
    : "";
    // dbConnector().saveComment(text.id,text.status,newCommentValue)
};

  const editComment = (e: string) => {
    console.log(e);
  };

  const addComments = () => {
    const commentsArr = comments.map((element, index) => {
      return (
        <Comments
          key={index}
          id={index.toString()}
          onClick={(e) => {
            editComment((e.target as HTMLParagraphElement).id);
          }}
        >
          {element}
          <button>delete</button>
          <button>edit</button>
        </Comments>
      );
    });
    return commentsArr;
  };

const handleCommentsDelete=(id: string)=>{

    const num=parseInt(id)
    let count=0;
dbConnector().deleteComment(text.id,newCommentValue,text.status)
// text.comment?.splice(num/3,1);

    
}
  return ReactDOM.createPortal(
<ParentDiv>
      <Div >
        <h4>{text.task}</h4>
        <p>{text.description}</p>
        <h2>Comments</h2>
        {text.comment?.map((element,index) => {
          return <p key={index*3} id={(index*3).toString()} className={text.status}  onClick={(e) => {
            handleCommentsDelete((e.target as HTMLParagraphElement).id);
          }}>{element}</p>;
        })}
        {/* {addComments()} */}
        <ParentDiv>
        <IDiv>
        <CommentInputDiv>
          <Input type="text" onChange={(e) => handleOnchange(e.target.value)} />
          <PlusBtn  onClick={handleOnclick}>Add</PlusBtn>
{/* <h3> Lets go for a <FaBeer /></h3> */}
        </CommentInputDiv>
        </IDiv>
        </ParentDiv>
      </Div>
    </ParentDiv>,
    portal
  );
}

export default CardComments;

const ParentDiv = styled.div`

  z-index: 2;
  justify-content: flex-start;

justify-items: center;
align-items: center;
justify-self: center;
       align-content: center;
  /* justify-content: center; */


`;

const Comments = styled.p`
  border: 1px solid black;
  border-radius: 5px;
  margin: 7px;
  font-size: medium;
  text-align: left;
  word-wrap: break-word;
  white-space: pre-wrap;
  word-break: break-word;
`;

const Div = styled.div`
margin-top: 18px;
margin-left: 400px;
  border-radius: 10px;
  width: 600px;
  height: auto;
  border: solid 1px #555;
  background-color: #eed;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  -o-box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
`;

const IDiv= styled.div`
margin-left: 190px;
justify-items: center;
align-items: center;
justify-self: center;
       align-content: center;
`
const CommentInputDiv = styled.div`
  border-radius: 15px;
  border: 1px solid black;
  width: 235px;
`;

const Input = styled.input`
  padding: 5px;
  border-radius: 15px;
  border: none;
  outline: none;
`;

const PlusBtn = styled.button`
  border: none;
  border-radius: 16px;
  font-weight: bolder;
  background-color: lightgray;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-right: 13px;
  padding-left: 13px;
`;
