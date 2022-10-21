import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../Store/Hook'
import { save ,transaction} from './CustomersSlice'
import { IinitialState, Itransaction, Ipayload } from './CustomerComponentTypes'
import styled from 'styled-components';
import TransactionDetails from './TransactionDetails';
const date = new Date().toLocaleString();

const obj: IinitialState = {
    name: 'hi',
    id: 'h4',
    transactions: [{ date: date, amount: 300, type: 'got' }],
}
function Customers() {
    const prepareCustomerDataToDisplay = (customerArr: IinitialState[]) => {
        const elementArray = customerArr.map((element, index) => {
            const totalAmount = transactionsToDisplay(element.transactions)
            return (
                    <Div onClick={e=>handleOnclick(e)} id={element.id} key={index}>
                        <span>{element.name}</span>
                        <Amount >{totalAmount}</Amount>
                    </Div>
            )
        });
        return elementArray
    }

    const transactionsToDisplay = (arr: Itransaction[]) => {
        let got: number = 0;
        let give: number = 0;
        arr.map((element) => {
            const amount = element.amount;
            const type = element.type;
            (type === 'got') ? got += amount : give += amount;
        })
        return (got - give)
    }





    const handleOnclick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        console.log(event.target)
        dispatch(transaction((event.target as HTMLElement).id));
    }
    const customersArr = useAppSelector(state => state.customer)
    const dispatch = useAppDispatch()
    const listOfCustomers = prepareCustomerDataToDisplay(customersArr.customers);
    return (
        <div>
            {listOfCustomers}
            {/* <button onClick={() => dispatch(save(obj))}>got</button> */}
            {customersArr.onclickCustomer.length>0?<TransactionDetails val={customersArr.onclickCustomer}/>:<h1>user not selected</h1>}
        </div>
    )
}


interface IstyleProp {
    color: number
}

const Amount = styled.b`
float: right;
`


const Div = styled.div`
justify-content:space-evenly;
align-items: center;
color: black;
width:300px;
margin-top:5px;
background-color: lightgray;
&:hover{
    border:1px solid #ffffff;
    border-radius: .2em;
}
`

export default Customers

