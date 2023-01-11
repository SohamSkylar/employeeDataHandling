import logo from "./logo.svg";
import "./App.css";
import ScrapTemplate from "./components/ScrapTemplate";
import TopNav from "./components/TopNav";
import TableHead from "./components/TableHead";
import EmployeeDataFill from "./components/EmployeeDataFill";
import {AddEmployee} from "./components/AddEmployee";
import DeleteEmployee from "./components/DeleteEmployee";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <>
      {/* <ScrapTemplate/> */}
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
            <TopNav headerName={'Manage Employees'} AddNewDetail = {openModal}/>
            {showModal ? <AddEmployee setShowModal={setShowModal} /> : null}
            <table className="table table-striped table-hover">
              <TableHead col1={"Name"} col2={"Email"} col3={"DOB"} col4={"Dept"} col5={"Salary"} col6={"Phone"}/>
              <EmployeeDataFill name={''} email={''} phone={''} DOB={''} salary={''} dept={''}/>
            </table>
          </div>
        </div>
      </div>
      
      <DeleteEmployee />
    </>
  );
}

export default App;
