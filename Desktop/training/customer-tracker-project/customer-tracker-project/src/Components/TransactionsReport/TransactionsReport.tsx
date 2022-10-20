/* eslint-disable array-callback-return */
import React from "react";
import styled from "styled-components";
import { date,creditAmount,debitAmount } from "../SpecificData/SpecificData";
import Database from "../../Database/Database";


const TransactionList=styled.div`
  display: inline-flex;
margin-left: 40px;
`
const TransactionHeading=styled.h3`
  text-align: center;
`
const TransactonData=styled.p`
  text-align: center;
  color:${props=>(props.color==='Debit')?'red':(props.color==='Credit')?'green':'black'}
`

const Transaction=styled.div`
  display: block;
  padding: 20px 20px;
  border-right: 1px solid black;
`

const Counter=styled.h3`
  font-weight: bolder;
  padding: 5px;
  margin:5px 20px ;
  background-color: lightgrey;
  height: auto;
`
const array = Database();

const transaction = array.map((element) => {
  return element.transaction;
});
const arr = transaction.flat(1);


const reportTrans = [date(arr), debitAmount(arr),creditAmount(arr)];

const Information=reportTrans[0].map((elem,index) => {
  return <TransactonData key={index}  color="Time">{elem}</TransactonData>;
})
const Credit=reportTrans[2].map((elem,index) => {
  return <TransactonData key={index}  color="Credit">{elem}</TransactonData>;
})
const Debit=reportTrans[1].map((elem,index) => {
  return <TransactonData key={index} color="Debit">{elem}</TransactonData>;
})

function TransactionsReport() {
  return (
    <>
    <TransactionList>

      <Transaction>
        <TransactionHeading>Time</TransactionHeading>
        {Information}
      </Transaction>

      <Transaction>
      <TransactionHeading>Credit</TransactionHeading>
        {Credit}
      </Transaction>

      <Transaction>
        <TransactionHeading>Debit</TransactionHeading>
        {Debit}
      </Transaction>
      
    </TransactionList>
    <br/>
    <Counter>Total Transaction {reportTrans[0].length}</Counter>
    </>
  );
}



export default TransactionsReport;

