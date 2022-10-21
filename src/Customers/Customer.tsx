import React from 'react'
import { useAppDispatch, useAppSelector } from '../Store/Hook'
import { save, IinitialState, Itransaction, Ipayload } from './CustomersSlice'

const date = new Date().toLocaleString();

const obj: Ipayload = {
    name: 'hi',
    id: 'h4',
    amount: 300,
    latestTransaction: { date: date, amount: 300, type: 'got' },
    type: 'save',
}

const prepareCustomerDataToDisplay = (customerArr: IinitialState[]) => {
    const elementArray = customerArr.map((element) => {
        return (
            <h3>{element.name} : {transactionsToDisplay(element.transactions)}</h3>
        )
    })
    return elementArray
}

const transactionsToDisplay = (arr: Itransaction[]) => {
    const result = arr.map((element) => {
        return (
            <h2>{element.amount}</h2>
        )
    })
    return result
}





function Customer() {
    const customerTotal = useAppSelector((state:any) => state.customer)
    const dispatch = useAppDispatch()
    return (
        <div>
            <h3>{prepareCustomerDataToDisplay(customerTotal)}</h3>
            <button onClick={() => dispatch(save(obj))}>got</button>
        </div>
    )
}

export default Customer