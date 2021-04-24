import React from "react";
import Header from "./components/header";
import NavTabs from "./components/NavTabs";
import EmployeeCard from "./components/empolyee-card";
import Wrapper from "./components/wrapper";
//import EmployeeList from "./components/employee-list"
import './App.css';

function App() {
  return (
    <div className="App">
        <Wrappter>
           <Header />
           <NavTabs />
           <EmployeeCard />
        <Wrapper />
      
    </div>
  );
}

export default App;
