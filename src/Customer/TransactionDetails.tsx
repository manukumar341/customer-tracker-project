import React, { JSXElementConstructor } from 'react'
import { useAppDispatch, useAppSelector } from '../Store/Hook'
import { save, transaction } from './CustomersSlice'
import { IinitialState, Itransaction, Ipayload } from './CustomerComponentTypes'


function TransactionDetails({ val }: { val: string }) {
    const customerTotal = useAppSelector(state => state.customer)
    const dispatch = useAppDispatch()
    const prepareCustomerDataToDisplay = (customerArr: IinitialState[]) => {
        const elementArray = customerArr.map((element, index) => {
            if (element.id === val) {
manju(element.name,element.transactions)
            }
        });
    }
const manju=({name,arr}:{name:string})=>{
    return (<div>
        <h1>{element.name}</h1>
        <pre>date               got         give</pre>
        {element.transactions.map((elm) => {
            if (elm.type === 'got') {
                return <pre>{elm.date} = {elm.amount} =  -</pre>
            } else {
                return <pre>{elm.date} =    -   = {elm.amount}</pre>
            }
        })}
    </div>)
}



    const a=prepareCustomerDataToDisplay(customerTotal.customers);

    return (
        <div>
            {a}
            <button onClick={() => { dispatch(transaction('')) }}>X</button>
        </div>
    )
}

export default TransactionDetails