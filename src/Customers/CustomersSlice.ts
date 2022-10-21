//@typescript-eslint/no-unused-expressions
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Itransaction {
    date: string,
    amount: number,
    type: 'got' | 'give',
}

export interface IinitialState {
    name: string,
    id: string,
    transactions: Itransaction[]
}

const initialState: IinitialState[] = [{
    name: 'manju',
    id: 'm1',
    transactions: [{ date: new Date().toLocaleString(), amount: 3340, type: 'got' }]
},
{
    name: 'manju',
    id: 'm1',
    transactions: [{ date: new Date().toLocaleString(), amount: 3340, type: 'got' }]
},
{
    name: 'manju',
    id: 'm1',
    transactions: [{ date: new Date().toLocaleString(), amount: 3340, type: 'got' }]
},
]

export interface Ipayload {
    name: string,
    id: string,
    amount: number,
    latestTransaction: Itransaction,
    type:string,
}

const updateObject = (arr: IinitialState[], actions: Ipayload ) => {

    arr.map((user) => {
        if (user.id === actions.id) {
            user.transactions.push(actions.latestTransaction)
        }
    })
    return arr;
}

const customerSlice = createSlice({
    name: 'customers',
    initialState,
    reducers: {
        save: (state, actions: PayloadAction<Ipayload>) => {

            state = updateObject(state, actions.payload)
        },
    },
})


export default customerSlice.reducer
export const { save} = customerSlice.actions