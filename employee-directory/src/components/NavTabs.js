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
                search: ""
            };
      
        
        componentDidMount() {
            axios.get("https://randomuser.me/api/?results=100")
                .then(res => this.setState({employees: res.data.results}))
                .catch(err => console.log(err));
        }

            searchEmployees = query => {
                API.search(query)
                .then(res => this.setState({result: res.data}))
                .catch(err => console.log(err));
            };


        handleInputChange = event =>  {
           const { name, value } = event.target;
           this.setState({
               [name]: value
           });
        };




    </div>  

    )
}
}

export default NavTabs;