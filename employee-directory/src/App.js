import React from "react";
import Header from "./components/header";
import Navigation from "./components/navigation";
import EmployeeCard from "./components/empolyee-card";
//import EmployeeList from "./components/employee-list"
import './App.css';

function App() {
  return (
    <div className="App">
        <>
           <Header />
           <Navigation />
           <EmployeeCard />
        </>
      
    </div>
  );
}

export default App;
