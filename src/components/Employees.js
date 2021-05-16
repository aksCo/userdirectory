import React from "react";

const Employees = (props) => {

  return (

    <tr className="tr">
      <td><img alt={props.firstName} src={props.icon} /></td>
      <td>{props.firstName} {props.lastName}</td>
    </tr>
  )

}

export default Employees;