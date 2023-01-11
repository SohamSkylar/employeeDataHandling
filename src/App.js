import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import data from "./mock-data.json";
import TableBody from "./components/Populator";
import TableHead from "./components/TableHead";
import { nanoid } from 'nanoid';
import AddEmployee from "./components/AddEmployee";

function App() {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    email: "",
    DOB: "",
    dept: "",
    salary: "",
    phoneNumber: ""
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      email: addFormData.email,
      DOB: addFormData.DOB,
      dept: addFormData.dept,
      salary: addFormData.salary,
      phoneNumber: addFormData.phoneNumber
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts)
  };

  return (
    <div className="app-container">
      <table>
        <TableHead />
        <TableBody contacts={contacts} />
      </table>

      <h2> Add Employee</h2>
      <AddEmployee handleAddFormChange={handleAddFormChange} handleAddFormSubmit={handleAddFormSubmit} />
    </div>
  );
}

export default App;
