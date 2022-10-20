import React from 'react'
import Search from '../Search/Search'
import { creditAmount,debitAmount,date } from '../SpecificData/SpecificData'
import Database from "../../Database/Database";
import { IRecord,ITransaction } from '../../ComponentsTypes';




// const TotalAmount=(transactions:Array<ITransaction>)=>{
// transactions.
// }
// const data=Database()
// const records=()=>{
// const res=data.map((elem)=>{
//   return (
//     <>
//     <div>
//     <h3>{elem.name}</h3>
//     {TotalAmount(elem.transaction)}
//     </div>
// </>
//   )
// })
// }



//pass all user and credit, debit, dates as props*************

function Customers() {
  return (
    <div>
<Search/>
{/* <div>
{users}
</div> */}
    </div>
  )
}

export default Customers