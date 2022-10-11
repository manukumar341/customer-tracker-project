/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import dbConnector, { IDataArr,Itask,TaksStatus,IdragItem,ICardIdentifier } from "../DbConnector";
import { useDrop } from "react-dnd";
import styled from "styled-components";
import Cards from "./Cards";
import {useCallback , useState} from 'react'
import CardComments from './CardComments';
interface IReturnType {
  setObjState: () => void;
  insertDataToDB: (obj: Itask) => void;
  updateDB: (id: number, currentState: TaksStatus, targetState: TaksStatus) => void;
}
interface IFun{
  DataHandler:()=>IReturnType;
}

type FunctionReturn=()=>ReturnedFun


interface ReturnedFun{
  setObjState:()=>ReturnObject,
  insertDataToDB:(obj:Itask)=>void,
  updateDB:(id:number,currentState:TaksStatus,targetState:TaksStatus)=>void,
}

interface ReturnObject {
  boardArr:IDataArr
}





function CardsContainer({ obj }: { obj: IDataArr }) {
  const cardIdentifaction:ICardIdentifier={id:0,status:'requested',toggal:false};
  const [cardToggle, setCardToggle] = useState(false)
  const cardStatus=obj[cardIdentifaction.status];

const handleOnclick=()=>{
  cardToggle?setCardToggle(false):setCardToggle(true);
}
console.log(cardStatus)

  const [, dropInpor] = useDrop(
    () => ({
      accept: "card",
      drop: (item:IdragItem) => {
        const {id,status}=item
        console.log(item);

        if (status === "requested") {
          dbConnector().update(id, 'requested','inprogress');
        }
        console.log(item);
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    []
  );
  const [, dropReq] = useDrop(
    () => ({
      accept: "card",
      drop: (item:IdragItem) => {
        const {id,status}=item
        console.log(item);
        if (status === "inprogress") {
          dbConnector().update(id, 'inprogress','requested');
        }
        console.log(item);
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    []
  );
  const [, dropCom] = useDrop(
    () => ({
      accept: "card",
      drop: (item:IdragItem) => {
        const {id,status}=item
        console.log(status+'completed');
        if (status === "inprogress") {
          dbConnector().update(id,'inprogress', 'completed');
        }
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    []
  );


  return (
    <>
    <StyledDiv>
      {/* drop here */}
      <StyledCardContainer ref={dropReq} > 
        <h3>Requested</h3>
        <ProgressIndicatorParent>
          <StyledProgressIndicator color="red" />
          <StyledProgressIndicator color="gray" />
          <StyledProgressIndicator color="gray" />
        </ProgressIndicatorParent>
        {obj.requested.map((Element)=>{
          return (<Cards obj={Element} key={Element.id} handleOnclick={handleOnclick} cardIdentifaction={cardIdentifaction}/>)
        })}
      </StyledCardContainer>
      <StyledCardContainer ref={dropInpor} >
        <h3>Inprogress</h3>
        <ProgressIndicatorParent>
          <StyledProgressIndicator color="orange" />
          <StyledProgressIndicator color="orange" />
          <StyledProgressIndicator color="gray" />
        </ProgressIndicatorParent>
        {obj.inprogress.map((Element)=>{
          // return (<Cards obj={Element} key={Element.id}  cardToggle={cardToggle} cardToggleFun={cardToggleFun}/>)
          return (<Cards obj={Element} key={Element.id} handleOnclick={handleOnclick}   cardIdentifaction={cardIdentifaction} />)

        })}
      </StyledCardContainer>
      <StyledCardContainer ref={dropCom} >
        <h3>Completed</h3>
        <ProgressIndicatorParent>
          <StyledProgressIndicator color="green" />
          <StyledProgressIndicator color="green" />
          <StyledProgressIndicator color="green" />
        </ProgressIndicatorParent>
        {/* <Cards arr={obj.completed}/> */}
        {obj.completed.map((Element)=>{
          return (<Cards obj={Element} key={Element.id}  handleOnclick={handleOnclick}  cardIdentifaction={cardIdentifaction}/>)
        })}
      </StyledCardContainer>
     
      {/* {cardToggle?<CardComments  title={obj[cardIdentifaction.status]}  description={} text={arr}/>:null} */}
    </StyledDiv>
     {
     cardStatus.map((element,index)=>{
      console.log(element)
      if(element.id===cardIdentifaction.id){
        const cardObj=obj[cardIdentifaction.status][index];

        return (<CardComments  title={cardObj.task}  description={cardObj.description} commentsArr={cardObj.comment as string[]}/>)
      }
      })
     }
      </>
  );
}

export default CardsContainer;

const StyledCardContainer = styled.div`
  width: 350px;
  height: 650px;
  background-color: white;
  box-shadow: 5px 5px gray;
  border-radius: 7px;
  border: none;
  margin: 30px;
  text-align: center;
  overflow: scroll;
  align-content: center;
  justify-content: center;
`;

export const StyledDiv = styled.div`
  background-color: lightgray;
  display: flex;
  align-content: center;
  justify-content: center;
`;

const StyledProgressIndicator = styled.div`
  width: 80px;
  height: 10px;
  background-color: ${(props) => props.color};
  border-radius: 5px;
  margin-left: 10px;
`;
const ProgressIndicatorParent = styled.div`
  display: flex;
`;

