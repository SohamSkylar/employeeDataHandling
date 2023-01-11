import React from "react";

function CheckboxSingle({id}) {
  return (
    <span className="custom-checkbox">
      <input type="checkbox" id={`checkbox${id}`} name="options[]" value="1" />
      <label for={`checkbox${id}`}></label>
    </span>
  );
}

export default CheckboxSingle;
