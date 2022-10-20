import { IRecord } from "../ComponentsTypes";
const today = new Date();
const date = today;




const arr: IRecord[] = [
  {
    name: "Manju",
    phone: 123456789,
    total: 110,
    transaction: [
      {date:new Date().toLocaleString('en-IN'),amount:20,type:'credit'},
     
  ]},
  {
    name: "Manjunath",
    phone: 123456789,
    total: 90,
    transaction: [
      {date:new Date().toLocaleString('en-IN'),amount:20,type:'credit'},
      {date:new Date().toLocaleString('en-IN'),amount:20,type:'debit'},

     
  ]},
  {
    name: "jon",
    phone: 123456789,
    total: 180,
    transaction: [
      {date:new Date().toLocaleString('en-IN'),amount:90,type:'credit'},
      {date:new Date().toLocaleString('en-IN'),amount:20,type:'debit'},
    
  ]},
  {
    name: "Ram",
    phone: 123456789,
    total: 110,
    transaction: [
      {date:new Date().toLocaleString('en-IN'),amount:40,type:'debit'},
      {date:new Date().toLocaleString('en-IN'),amount:90,type:'credit'},

  ]},

];

function Database() {
  return [...arr];
}

export default Database;
