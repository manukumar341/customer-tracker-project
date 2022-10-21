export interface IRecord {
  name: string;
  phone: number;
  total: number;
  transaction: Array<ITransaction>;
};


export interface ITransaction {
    type:'credit'|'debit';
    date: string;
    amount: number;

}

interface ICredit {
  date: string;
  amount: number;
}

interface IDebit {
  date: string;
  amount: number;
}
