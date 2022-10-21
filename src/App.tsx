import { Routes, Route } from "react-router-dom";
import Home from "./DashboardComponent/Home";
import DefaultPage from "./DashboardComponent/DefaultPage";
import About from "./DashboardComponent/About";
import Customers from "./Customers/Customers";
import TransactionsReport from "./Components/TransactionsReport/TransactionsReport";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          
          <Route path="Report" element={<TransactionsReport/>} />
          <Route path='Customers' element={<Customers/>}/>
        </Route>
        <Route path="about" element={<About />} />
        <Route path="*" element={<DefaultPage />} />
      </Routes>
    </div>
  );
}

export default App;


// git remote add origin https://github.com/manukumar341/customer-tracker-project.git
// git branch -M main
// git push -u origin main