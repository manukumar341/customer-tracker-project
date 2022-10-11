/* eslint-disable import/no-anonymous-default-export */
import React, { useCallback, useState, createContext } from "react";
import styled from "styled-components";
import CardsContainer, { StyledDiv } from "./CardContainer/CardsContainer";
import dbConnector, { Itask, IDataArr, TaksStatus } from "./DbConnector";
import Profile from "./Profile";
import UserInput from "./UserInput";



function Kanbanboard() {


  

  const [toggle, setToggle] = useState(false);
  const [toggleUser, setToggleUser] = useState(false);
  const [objStore, setObjStore] = useState(dbConnector().get());

  const toggleButton = useCallback(() => {
    toggle ? setToggle(false) : setToggle(true);
  }, [toggle]);

  const toggleProfile = useCallback(() => {
    toggleUser ? setToggleUser(false) : setToggleUser(true);
  }, [toggleUser]);

  const prepareTask = (title: string, descrip: string, priority: number) => {
    const taskObj: Itask = {
      task: title,
      description: descrip,
      priority: priority,
      id: Date.now(),
      status: "requested",
    };
    // FunHandler().insertDataToDB(taskObj);
    dbConnector().insert(taskObj);
    setObjStore(dbConnector().get());
    console.log(objStore);
    toggleButton();
  };

  // const FunHandler = () => {
  //   const InsertDataToDB = (obj: Itask) => {
  //     dbConnector().insert(obj);
  //   };
  //   const UpdateDB = (
  //     id: number,
  //     currentState: TaksStatus,
  //     targetState: TaksStatus
  //   ) => {
  //     dbConnector().update(id, currentState, targetState);
  //   };
  //   const setState = () => {
  //     setObjStore(dbConnector().get());
  //   };
  //   return {
  //     setObjState: setState,
  //     insertDataToDB: InsertDataToDB,
  //     updateDB: UpdateDB,
  //   };
  // };

  // const functionObj={
  //   setObjState(){
  //     setObjStore(dbConnector().get)
  //     },
  //   insertDataToDB(obj:Itask){
  //     dbConnector().insert(obj)
  //     },
  //   updateDB(id:number,currentState:TaksStatus,targetState:TaksStatus){
  //     dbConnector().update(id,currentState,targetState)
  //   },
  // }

  return (
    <StyledBody>
      <h1>Kanbanboard</h1>
     
   
      <div>
        <StyledAddBtn onClick={toggleButton} >
          Add Card
        </StyledAddBtn>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="avtar"
          style={{ width: 40, height: 40, float: "right" }}
          onClick={toggleProfile}
        />
        {toggleUser && <Profile />}
        {toggle && <UserInput prepareTask={prepareTask} />}
      </div>
      {/* <CardsContainer obj={objStore.boardArr}  DataHandler={FunHandler}/> */}
      <CardsContainer obj={objStore.boardArr} />
    </StyledBody>
  );
}

export default Kanbanboard;

const StyledAddBtn = styled.button`
  background-color: #5771c5;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 7px;
  margin: 2px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: larger;
`;

const StyledBody = styled(StyledDiv)`
  display: block;
`;
