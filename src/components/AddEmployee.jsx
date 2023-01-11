import React from "react";

function AddEmployee({handleAddFormSubmit, handleAddFormChange}) {
  return (
    <form onSubmit={handleAddFormSubmit}>
      <input
        type="text"
        name="fullName"
        required="required"
        placeholder="Enter a name"
        onChange={handleAddFormChange}
      />
      <input
        type="email"
        name="email"
        required="required"
        placeholder="Enter a email"
        onChange={handleAddFormChange}
      />
      <input
        type="date"
        name="DOB"
        required="required"
        placeholder="Enter Date of Birth"
        onChange={handleAddFormChange}
      />
      <input
        type="text"
        name="dept"
        required="required"
        placeholder="Enter department"
        onChange={handleAddFormChange}
      />
      <input
        type="number"
        name="salary"
        required="required"
        placeholder="Enter salary"
        onChange={handleAddFormChange}
      />
      <input
        type="number"
        name="phoneNumber"
        required="required"
        placeholder="Enter a phone number"
        onChange={handleAddFormChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddEmployee;
