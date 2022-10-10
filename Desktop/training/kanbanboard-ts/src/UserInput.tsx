import React, { useState } from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";

interface IProp {
  prepareTask: (title: string, descrip: string, priority: number) => void;
  portal?:HTMLElement;
}

interface IVariableProp {
  text: string;
  descrip: string;
  priority: number;
}


function UserInput({ prepareTask,portal }: IProp) {
  portal=document.getElementById('popWindow') as HTMLDivElement
  let varObj: IVariableProp;
  varObj = {
    text: "",
    descrip: "",
    priority: 10,
  };

  // const [variableObj,setVariableObj]=useState<IVariableProp>({
  //   text:'',
  //   descrip:'',
  //   priority:10
  // })

  const handleOnchangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    varObj.text = event.target.value;
  };
  const handleOnchangeDescrip = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    varObj.descrip = event.target.value;
  };
  const handleOnchangePriory = (event: React.ChangeEvent<HTMLInputElement>) => {
    varObj.priority = Number(event.target.value);
  };

  // return ReactDOM.createPortal(
  //   <Div>
  //   <UserInputDiv>
  //     <form
  //       onSubmit={() =>
  //         prepareTask(varObj.text, varObj.descrip, varObj.priority)
  //       }
  //     >
  //       <label htmlFor="fname">Title:</label>
  //       <br />
  //       {/* <input type="text" name="title" value="enter title" onChange={(e)=>{setVariableObj({text:e.target.value,descrip:'',priority:10})}}/><br/> */}
  //       <input
  //         type="text"
  //         name="title"
  //         placeholder="enter title"
  //         onChange={(e) => {
  //           handleOnchangeTitle(e);
  //         }}
  //       />
  //       <br /> <br />
  //       <label htmlFor="lname">Discription:</label>
  //       <br />
  //       <textarea
  //         name="description"
  //         placeholder="enter description"
  //         rows={4}
  //         cols={20}
  //         onChange={(e) => {
  //           handleOnchangeDescrip(e);
  //         }}
  //       />
  //       <br />
  //       <br />
  //       <label htmlFor="lname">Priority:</label>
  //       <br />
  //       <input
  //         type="number"
  //         max={10}
  //         min={1}
  //         placeholder="1-10"
  //         onChange={(e) => {
  //           handleOnchangePriory(e);
  //         }}
  //       />
  //       <br />
  //       <br />
  //       <StyledAddBtn type="submit" value="Submit" />
  //     </form>
  //   </UserInputDiv>
  //   </Div>,portal
  // );
  return (
    <Div>
    {/* <UserInputDiv> */}
      <form
        onSubmit={() =>
          prepareTask(varObj.text, varObj.descrip, varObj.priority)
        }
      >
        <label htmlFor="fname">Title:</label>
        <br />
        {/* <input type="text" name="title" value="enter title" onChange={(e)=>{setVariableObj({text:e.target.value,descrip:'',priority:10})}}/><br/> */}
        <input
          type="text"
          name="title"
          placeholder="enter title"
          onChange={(e) => {
            handleOnchangeTitle(e);
          }}
        />
        <br /> <br />
        <label htmlFor="lname">Discription:</label>
        <br />
        <textarea
          name="description"
          placeholder="enter description"
          rows={4}
          cols={20}
          onChange={(e) => {
            handleOnchangeDescrip(e);
          }}
        />
        <br />
        <br />
        <label htmlFor="lname">Priority:</label>
        <br />
        <input
        required
          type="number"
          max={10}
          min={1}
          placeholder="1-10"
          onChange={(e) => {
            handleOnchangePriory(e);
          }}
        />
        <br />
        <br />
        <StyledAddBtn type="submit" value="Submit" />
      </form>
    {/* </UserInputDiv> */}
    </Div>
  );
}

export default UserInput;

const UserInputDiv = styled.div`
  padding: 7px;
  width: 200px;
  border-radius: 8px;
  box-shadow: 5px 5px gray;
  /* position: relative; */
`;

const Div=styled.div`
    /* align-content: center;
  justify-content: center;
  display: grid; */

  display: flex;
  gap: 1rem;
  padding: 1rem;
  width: 325px;
  flex-wrap: wrap;
  position: fixed;
  right: 1;
  animation-duration: 4s;
  z-index: 2;
  /* justify-content: flex-start; */
  align-content: center;
  justify-content: center;
  border-radius: 5px;
  border: solid 1px #555;
  background-color: #eed;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  -o-box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
`

const StyledAddBtn = styled.input`
  background-color: #385dd8;
  align-items: center;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 4px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: medium;
`;
