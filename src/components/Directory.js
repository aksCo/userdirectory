import React, { Component } from "react";
import Employees from "./Employees.js";

class Directory extends Component
{
    state = {
        employees: [],
        empSort: [],
        sorted: false,
    };

    componentDidMount=()=>{
        fetch(`https://randomuser.me/api/?results=25&nat=us&inc=name`)
        .then(res =>res.json())
        .then(json => {
            this.setState({ employees: json.results })
        })
    };
    filterEmp = () => {
        let { employees } = this.state;
        let filteredemp = employees.filter(employee => {
            return (
                employee.name.first.indexOf('A') === 0
                )
        })
        this.setState({ employees:filteredemp})
    }

   sortedEmp = () => {
      let { employees } = this.state;
      let sortedEmp = employees.sort((E1,E2) => {
          return (
            E1.name.first > E2.name.first ? 1 : -1
              )
      })
      this.setState({ employees:sortedEmp})
  }
render = () => {
    
  return (
    <div>
      <div className="jumbotron">
        <h2 className="display-4">
          User Directory
        </h2>
      </div>
      <div className ="container">
        <table className="table">
          <thead className="thread">
            <tr>
              <th> Name </th>
            </tr>
          </thead>
          {this.state.employees.map(employee => <tr> <td>{employee.name.first}</td></tr>)}
        </table>
        <button onClick={this.filterEmp}> filter by first name A </button>
        <button onClick={this.sortedEmp}> Sort</button>
      </div>
    </div>
  )
}
}

export default Directory;