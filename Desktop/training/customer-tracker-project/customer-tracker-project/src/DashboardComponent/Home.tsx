import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";



 function Home() {

  
  async function apiFun(): Promise<void>{
     const obj=await fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(response=>console.log(response))
  }
  // apiFun()
  return (
    <> 
    <h1>This is the home page</h1>
    <Div>
      <nav>
        <Link to='/'>Home</Link><br/>
      <Link to="about"> about  </Link><br/>
      <Link to="Report"> Report </Link><br/>
      <Link to="Customers"> Customers </Link>
    </nav>
    <Outlet/>
    </Div>
    </>
  )
}

export default Home

const LinkContainer=styled.a`
  color: #3d0b66;
`

const Div=styled.div`
  display: flex;
`


const Nav=styled.nav`
  display: block; 
`




