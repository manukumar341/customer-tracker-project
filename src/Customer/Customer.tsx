import Customers from './Customers';
import { Outlet } from 'react-router-dom';
import Search from '../Components/Search/Search'


//pass all user and credit, debit, dates as props*************

function Customer() {
  return (
    <div>
{/* <Search/> */}
<Customers/>

    </div>
  )
}

export default Customer