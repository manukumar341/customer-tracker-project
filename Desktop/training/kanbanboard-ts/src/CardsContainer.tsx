import dbConnector, { IDataArr,Itask,TaksStatus } from "./DbConnector";
import { useDrop } from "react-dnd";
import styled from "styled-components";
import Cards from "./Cards";
import {useCallback , useState} from 'react'




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

interface IdragItem{
  id:number,
  status:TaksStatus
}

// function CardsContainer({ obj ,DataHandler}: { obj: IDataArr ,DataHandler:FunctionReturn}) {
function CardsContainer({ obj }: { obj: IDataArr }) {

  // const dropCard = useCallback(
  //   (id, targetStatus, currentStatus) => {
  //     let count=0;
  //     arrStore.boardArr[currentStatus].map((element) => {
  //       if (element.id === id) {
  //         element.status = targetStatus;
  //         arrStore.boardArr[targetStatus].push(element)
  //         arrStore.boardArr[currentStatus].splice(count,1);
  //         console.log(arrStore);
  //         // delete arrStore.boardArr[currentStatus][count];
  //       }else{
  //         count+=1;
  //       }
  //       return element;
  //     });
  //     setArrStore(arrStore);
  //   },
  //   [arrStore]
  // );
// const [cardToggle, setCardToggle] = useState(false)
// const cardToggleFun=()=>{
//   cardToggle?setCardToggle(false):setCardToggle(true);
// }
  
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
    // [dropCard]
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
    // [dropCard]
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
    // [dropCard]
    []
  );
  return (
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
          return (<Cards obj={Element} key={Element.id}  />)
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
          return (<Cards obj={Element} key={Element.id}  />)

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
          return (<Cards obj={Element} key={Element.id}  />)
        })}
      </StyledCardContainer>
    </StyledDiv>
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

