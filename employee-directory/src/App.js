import React from "react";
import Wrapper from "./components/wrapper";
import Header from "./components/header";
import Navigation from "./components/navigation";
import EmployeeCard from "./components/empolyee-card";
import './App.css';

function App() {
  return (
    <div className="App">
      <Wrapper />
      <Header />
      <Navigation />
      <EmployeeCard />
      
    </div>
  );
}

export default App;
