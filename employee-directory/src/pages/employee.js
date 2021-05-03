import React ,{Component} from  "react";
import Header from "../components/header";
import Wrapper from "../components/wrapper";
import Input from "../components/input";
import Table from "../components/table";
import API from "../Utils/API";
class Employee extends Component {
    state ={
        employees: [],
        cloneCopy: [],
        search: ""
    }
    componentDidMount(){
        API.getUsers().then(response => {
             this.setState({ employees: response.data.results, cloneCopy: response.data.results })
        })
    }
    handleSearch = (e) => {
        const {name, value} = e.target
        
        const filterEmployees = this.state.cloneCopy.filter(employee => {
            return employee.name.first.toLowerCase().includes(value.toLowerCase())
        })  

        this.setState({search: value , employees: filterEmployees})

    } 
    handleSort= () => {
        const sortedEmployees =this.state.employees.sort(( currentEmployee, nextEmployee ) => {
            return currentEmployee.name.first.localeCompare(nextEmployee.name.first)
        })
       this.setState({ employees: sortedEmployees })

    }
    render(){
        return(
            <>
            <Wrapper>
         <Header />
         <Input handleSearch={this.handleSearch}  search={this.state.search} />
         <Table employees ={this.state.employees} handleSort={this.handleSort} />
         
            </Wrapper>
            
            </>

        )
    }
}
export default Employee;