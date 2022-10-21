import { ITransaction } from "../../ComponentsTypes";
import Database from "../../Database/Database";


// export const user=()=>{
//     const users= array.map((elem)=>{
//     return elem.name
// })
// return users;
// }

export const date =(arr:ITransaction[])=>{ 
    const dates=arr.map((elem) => {
  return elem.date;
});
return dates;
}

export const creditAmount =(arr:ITransaction[])=>{ 
    const creadit=arr.map((elem) => {
  if(elem.type==='credit'){
      return elem.amount;
  }else{
    return '-'
  }
});
return creadit;
}

export const debitAmount = (arr:ITransaction[])=>{
    const debit=arr.map((elem) => {
  if(elem.type==='debit'){
      return elem.amount;
  }else{
    return '-'
  }
});
return debit;
}


