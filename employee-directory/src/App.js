import React from "react";
import Header from "./components/header";
import Navigation from "./components/navigation";
import EmployeeCard from "./components/empolyee-card";
import './App.css';

function App() {
  return (
    <div className="App">
        <Wrapper>
           <Header />
           <Navigation />
           <EmployeeCard />
        </Wrapper>
      
    </div>
  );
}

export default App;
