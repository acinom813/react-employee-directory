import React, {Component} from "react";
import API from "../Utils/API";


function NavTabs({ onSearch, searchTerm, handleSortByName, handleSortByDept }) {
    return (
     <div className="md:flexjustify-between my-6">
       <div className="searchTabs">
            <button onClick={handleSortByName}>Search Names</button>
            <button onClick={handleSortByDept}>Search Departments</button>
        </div>
        <form>
            <input
                value={searchTerm}
                onChange={onSearch}
               type="text"
               placeholder="Search Employees" />
        </form>
        class NavTabs extends Component{
            state = {
                results: [],
                search: "",
                employees:[{}],

            };
      
        
        componentDidMount() {
            axios.get("https://randomuser.me/api/?results=100")
                .then(res => this.setState({employees: res.data.results}))
                .catch(err => console.log(err));
        }


        handleInputChange = event =>  {
             const searchedEmployees = event.target.value;
             const sortEmployees =  this.state.employees.filter(employee => {
                 const employeeInfo = {
                     name: `${employee.name.first} ${employees.name.last}`,
                     department: empoloyee.dept,
                     email: employee.email
                 }

               
             })
           this.setState({ search: event. target.value });
        };

        handleFormSubmit = event => {
           
            event.preventDefault();
            API.get
           this.searchEmployees(this.state.search);
        }




    </div>  

    )
}
}

export default NavTabs;