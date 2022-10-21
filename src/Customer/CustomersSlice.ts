//@typescript-eslint/no-unused-expressions
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IinitialState,Ipayload,Istate } from "./CustomerComponentTypes";


const initialState: Istate = {
    onclickCustomer:'',
    customers:[{
    name: 'user 1',
    id: 'm1',
    transactions: [{ date: new Date().toLocaleString(), amount: 390, type: 'give' }]
},
{
    name: 'user 2',
    id: 'm2',
    transactions: [{ date: new Date().toLocaleString(), amount: 3340, type: 'got' },
    { date: new Date().toLocaleString(), amount: 340, type: 'give' },
    { date: new Date().toLocaleString(), amount: 40, type: 'give' }]
},
{
    name: 'user 3',
    id: 'm3',
    transactions: [{ date: new Date().toLocaleString(), amount: 3340, type: 'got' }]
},
]
}


const updateObject = (arr: IinitialState[], actions: Ipayload ) => {
console.log(actions);

    arr.map((user) => {
        if (user.id === actions.id) {
            user.transactions.push(actions.transaction)
        }
    })
    return arr;
}

const customerSlice = createSlice({
    name: 'customers',
    initialState,
    reducers: {
        save: (state, actions: PayloadAction<IinitialState>) => {
state.customers.push(actions.payload)
            // state = updateObject(state, actions.payload)
        },
        transaction:(state,actions:PayloadAction<string>)=>{
            state.onclickCustomer=actions.payload
            console.log(state.onclickCustomer)
        }

    },
})


export default customerSlice.reducer
export const { save,transaction} = customerSlice.actions