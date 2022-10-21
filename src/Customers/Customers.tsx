import Customer from './Customer';
import { Outlet } from 'react-router-dom';
import Search from '../Components/Search/Search'


//pass all user and credit, debit, dates as props*************

function Customers() {
  return (
    <div>
<Search/>
<Customer/>

    </div>
  )
}

export default Customers