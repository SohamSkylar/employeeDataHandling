import React from "react";

function TableBody({contacts}) {
  return (
    <tbody>
      {contacts.map((contact) => (
        <tr>
          <td>{contact.fullName}</td>
          <td>{contact.email}</td>
          <td>{contact.DOB}</td>
          <td>{contact.dept}</td>
          <td>{contact.salary}</td>
          <td>{contact.phoneNumber}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
