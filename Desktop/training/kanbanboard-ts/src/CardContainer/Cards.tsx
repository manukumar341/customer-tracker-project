/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-redeclare */
import React,{useState} from 'react'
import {Div,ParentDiv,PlusBtn,Input,CommentInputDiv} from './CardComments'
import styled from "styled-components";
import { useDrag } from 'react-dnd';
import {Itask,IdragItem,ICardIdentifier} from "../DbConnector"
import CardComments from './CardComments';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

type fun = (
    arr: Array<Itask>
  ) => Array<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
  >;

function Cards({obj,handleOnclick,cardIdentifaction}:{obj:Itask,handleOnclick:()=>void,cardIdentifaction: ICardIdentifier}) {

const status=obj.status;
const id=obj.id;
const handleOnclickHere=(e: HTMLDivElement):void=>{
cardIdentifaction.id=parseInt(e.id);
cardIdentifaction.status=status;
cardIdentifaction.toggal=true;
handleOnclick();
console.log(cardIdentifaction)
}    
const ar=['aaaaa','bbbbbb','ccc']
const [array, setarray] = useState([ar])
    const [, drag] = useDrag(() => ({
        item:{
            status:status,
            id:id
        },
        type: "card",
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging(),
        }),
      }),[]);  
      let vl:string='';
      const handleOnchangeCmt=(e:string)=>{
vl=e;
      } 

      const handleOnclickCmtBtn=()=>{
        ar.push(vl)
        setarray((preval)=>[...preval,ar])
      }
      let comm=array.map((item)=>{
        return (<h5>{item}<br/></h5>);
      }) 
          return (
            
       
              <Popup trigger={
                <Card  ref={drag} id={id.toString()} onClick={(e)=>{handleOnclickHere(e.target as HTMLDivElement)}}>
                <CardTitle id={id.toString()}>
                  {obj.task}
                  <CardProfileImg
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    alt="avtar"
                  />
                </CardTitle >
                <CardDiscription id={id.toString()} >{obj.description}</CardDiscription>
                <CardPriority  id={id.toString()}>{obj.priority}</CardPriority>
  
              </Card>
              } position="top left">
              {/* <ParentDiv> */}
                {/* <Div > */}           
                  <h2>Comments</h2>
             {comm}
             <CommentInputDiv>
          <Input type="text" onChange={(e)=>handleOnchangeCmt(e.target.value)} />
          <PlusBtn  onClick={handleOnclickCmtBtn}>Add</PlusBtn>
         </CommentInputDiv>
                {/* </Div> */}
              {/* </ParentDiv> */}
</Popup>
                  
          );
          
          
        }
        
        // {/* <ParentDiv>
        // <Div>
        // <CommentInputDiv>
        //   <Input type="text"  />
        //   <PlusBtn  onClick={handleOnclick}>Add</PlusBtn>
        //     // {/* <h3> Lets go for a <FaBeer /></h3> */}
        // // </CommentInputDiv>
        // // </Div>
        // // </ParentDiv> */}
export default Cards

/* background-color: ${(props)=>{props.color}}; */
/* background-color: ${({bgColor})=>{bgColor?'black':'white'}}; */
const Card = styled.div`

  border: none;
  border-radius: 5px;
  border-bottom: 4px burlywood solid;
  height: 150px;
  width: 300px;
  background-color: lightblue;
  align-content: center;
  justify-content: center;
  margin-left: 24px;
  margin-top: 15px;
`;
const CardDiscription = styled.p`
  font-size: small;
  /* padding: -9px; */
  text-align: left;
  word-wrap: break-word;
  white-space: pre-wrap;
  word-break: break-word;

`;

const CardPriority = styled.h5`
  float: right;
  color: red;
  margin-top: -7px;
  margin-right: 5px;
`;

const CardTitle = styled.label`
  text-align: left;
  font-size: -13%;
  font-weight: bolder;
  /* padding-top: 5px; */
`;

  
const CardProfileImg = styled.img`
float: right;
width: 40px;
height: 30px;
margin-right: 5px;
`;





// import React,{useState} from 'react'

// import styled from "styled-components";
// import { useDrag } from 'react-dnd';
// import {Itask} from "./DbConnector"
// import CardComments from './CardComments';
// import CardCommentsContainer from './CardCommentsContainer';

// type fun = (
//     arr: Array<Itask>
//   ) => Array<
//     React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
//   >;

// function Cards({obj,cardToggle,cardToggleFun}:{obj:Itask,cardToggle:boolean, cardToggleFun: () => void}) {
// const handleOnclick=(event: HTMLDivElement)=>{
//   cardToggleFun()
//   // if(cardToggle){ 
//   //   cardToggleFun(false) 
//   //   return <CardComments text={obj}/>
//   //   }else{
//   //     cardToggleFun(true)
//   //   return <CardComments text={obj}/>
//   //   }
// }

// const status=obj.status;
// const id=obj.id;
    
//     const [{isDragging}, drag] = useDrag(() => ({
//         item:{
//             status:status,
//             id:id
//         },
//         type: "card",
//         collect: (monitor) => ({
//           isDragging: !!monitor.isDragging(),
//         }),
//       }),[]);  
//       const fun=()=>{
//         console.log('hhhhhh');
        
//         if(cardToggle){ 
//           cardToggleFun() 
//           return <CardComments text={obj}/>
//           }else{
//             cardToggleFun()
//           return <CardComments text={obj}/>

//           }
//       } 
//           return (
//             <>
//             {/* <Card ref={drag} className={status[0]} id={id.toString()} onClick={e=>handleOnclick(e.target as HTMLDivElement)}> */}
//             <Card ref={drag} className={status[0]} id={id.toString()} onClick={cardToggleFun()}>

//               <CardTitle >
//                 {obj.task}
//                 <CardProfileImg
//                   src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
//                   alt="avtar"
//                 />
//               </CardTitle>
//               <CardDiscription  >{obj.description}</CardDiscription>
//               <CardPriority  >{obj.priority}</CardPriority>
//             </Card>
//        {cardToggle?<CardComments text={obj}/>:null}
//        {/* {cardToggle?<CardCommentsContainer text={obj}/>:null} */}
       
//               </>              
//           );
     

// }

// export default Cards

// /* background-color: ${(props)=>{props.color}}; */
// /* background-color: ${({bgColor})=>{bgColor?'black':'white'}}; */
// const Card = styled.div`

//   border: none;
//   border-radius: 5px;
//   border-bottom: 4px burlywood solid;
//   height: 150px;
//   width: 300px;
//   background-color: lightblue;
//   align-content: center;
//   justify-content: center;
//   margin-left: 24px;
//   margin-top: 15px;
// `;
// const CardDiscription = styled.p`
//   font-size: small;
//   /* padding: -9px; */
//   text-align: left;
//   word-wrap: break-word;
//   white-space: pre-wrap;
//   word-break: break-word;

// `;

// const CardPriority = styled.h5`
//   float: right;
//   color: red;
//   margin-top: -7px;
//   margin-right: 5px;
// `;

// const CardTitle = styled.label`
//   text-align: left;
//   font-size: -13%;
//   font-weight: bolder;
//   /* padding-top: 5px; */
// `;

  
// const CardProfileImg = styled.img`
// float: right;
// width: 40px;
// height: 30px;
// margin-right: 5px;
// `;
