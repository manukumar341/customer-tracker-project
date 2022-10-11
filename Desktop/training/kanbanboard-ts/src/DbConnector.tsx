/* eslint-disable array-callback-return */
export interface IdragItem{
  id:number,
  status:TaksStatus,
}
export interface ICardIdentifier extends IdragItem{
  toggal:boolean;
}


export interface Itask {
  task: string;
  id: number;
  description: string;
  priority: number;
  status: TaksStatus;
  comment?:string[];
}

export interface IUpdateProp{
  id:number;
  currentStatus:TaksStatus;
  targetStatus:TaksStatus;
}

export type TaksStatus =  "requested" | "inprogress" | "completed"

export interface IStatus{
  Type:"requested" | "inprogress" | "completed"
}

 export interface IDataArr {
  requested: Itask[];
  inprogress: Itask[];
  completed: Itask[];
}
const boardArr: IDataArr = {
  requested: [
    {
      task: "Typescript",
      description:
        "The required concepts are all completed, and Advance concept have to complete",
      priority: 1,
      id: 22,
      status: "requested",
      comment:[]
    },
  ],

  inprogress: [
    {
      task: "Stylecomponents",
      description:
        "styled-components utilises tagged template literals to style your components. It removes the mapping between components and styles. This means that when you are defining your styles, you are actually creating a normal React component, that has your styles attached to it.",
      priority: 3,
      id: 11,
      status: "inprogress",
      comment:[]
    },
    {
      task: "Kanbanboard",
      description:
        "A kanban board is an agile project management tool designed to help visualize work, limit work-in-progress, and maximize efficiency (or flow) . It can help both agile and DevOps teams establish order in their daily work.",
      priority: 2,
      id: 44,
      status: "inprogress",
      comment:[]
    },
  ],
  completed: [
    {
      task: "Todo list",
      description:
        "I created the todo list api using the javascript and also using the react javascript, with the delete, completed in react js and delete, complete , counter and localstorage in javascript",
      priority: 5,
      id: 99,
      status: "completed",
      comment:[]
    },
    {
      task: "React",
      description:
        "I completed the fundamentals of  the react concepts and little bit of hooks concepts and advence have to complete",
      priority: 4,
      id: 33,
      status: "completed",
      comment:[]
    },
  ],
};

export function dbConnector() {
  const getData = () => {
    return {boardArr };
  };

  const setData = (obj: Itask) => {
    const status = obj.status;
    boardArr[status].push(obj);
  };

  const updateData=(id:number,currentState:TaksStatus,targetState:TaksStatus)=>{
    let count=0;
    boardArr[currentState].forEach((item:Itask)=>{
      // return (
      if(item.id===id){
        boardArr[currentState][count].status=targetState;
        boardArr[targetState].push(boardArr[currentState][count]);
        boardArr[currentState].splice(count,1)
      }else{
          count+=1;
      }
      // )
    });
  }

  const saveComment=(id:number,status:TaksStatus,arr:string)=>{
boardArr[status].map((element)=>{
  if(element.id===id){
    if(arr){
    element.comment?.push(arr);
    }
  }
})
  }

  const deleteComment=(id:number,text:string,status:TaksStatus)=>{

    console.log(text)
    let count=0;
    boardArr[status].forEach((element) => {
      console.log(element.comment);
      element.comment?.forEach((comments: string)=>{

        if(comments===text){
          
          element.comment?.splice(count,1)
        }else{
          count+=1;
        }
      })
    });
  }

  return {
    insert: setData,
    get: getData,
    update:updateData,
    saveComment:saveComment,
    deleteComment:deleteComment
  };
}

export default dbConnector;
