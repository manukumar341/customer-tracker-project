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

export interface Istate{
    onclickCustomer:string,
    customers:IinitialState[]
}

export interface Ipayload {
    name: string,
    id: string,
    transaction: Itransaction,
}
