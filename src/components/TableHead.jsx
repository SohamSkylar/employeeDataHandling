import React from "react";

function TableHead({col1,col2,col3,col4,col5,col6}) {
  return (
    <thead>
      <tr>
        <th>
          <span className="custom-checkbox">
            <input type="checkbox" id="selectAll" />
            <label for="selectAll"></label>
          </span>
        </th>
        <th>{col1}</th>
        <th>{col2}</th>
        <th>{col3}</th>
        <th>{col4}</th>
        <th>{col5}</th>
        <th>{col6}</th>
        <th>Actions</th>
      </tr>
    </thead>
  );
}

export default TableHead;
