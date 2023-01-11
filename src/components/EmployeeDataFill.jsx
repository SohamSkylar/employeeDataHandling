import React from "react";
import CheckboxSingle from "./CheckboxSingle";

const idClone = 0;

function EmployeeDataFill({name,email,phone,DOB,salary,dept}) {
  return (
    <tbody>
      <tr>
        <CheckboxSingle id={idClone}/>
        <td>{name}</td>
        <td>{email}</td>
        <td>{DOB}</td>
        <td>{dept}</td>
        <td>{salary}</td>
        <td>{phone}</td>
        <td>
          <a href="#editEmployeeModal" className="edit" data-toggle="modal">
            <i className="material-icons" data-toggle="tooltip" title="Edit">
              &#xE254;
            </i>
          </a>
          <a href="#deleteEmployeeModal" className="delete" data-toggle="modal">
            <i className="material-icons" data-toggle="tooltip" title="Delete">
              &#xE872;
            </i>
          </a>
        </td>
      </tr>
    </tbody>
  );
}

export default EmployeeDataFill;
