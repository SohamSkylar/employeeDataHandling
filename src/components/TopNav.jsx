import React from "react";
import { useRef } from "react";
import "./ScrapTemplate.css";

function TopNav({ headerName, AddNewDetail }) {
  
    // function AddNewDetail(){
    //     console.log('add')
    //     const ref = useRef();
    //     ref.
    //     modal.style.display = "block";
        
    // }
    function DeleteAllRecords(){
        console.log('delete')

    }

    return (
    <div className="table-title">
      <div className="row">
        <div className="col-sm-6">
          <h2>{headerName}</h2>
        </div>
        <div className="col-sm-6">
          <button
            onClick={AddNewDetail}
            className="btn btn-success"
          >
            <i className="material-icons">&#xE147;</i>
            <span>Add New Employee</span>
          </button>
          <a
            onClick={DeleteAllRecords}
            href="#deleteEmployeeModal"
            className="btn btn-danger"
            data-toggle="modal"
          >
            <i className="material-icons">&#xE15C;</i>
            <span>Delete</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
