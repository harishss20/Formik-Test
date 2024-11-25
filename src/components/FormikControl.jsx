import React from "react";

function FromikControl(props) {
  const { control } = props;
  console.log(control);
  switch (control) {
    case "input":
    case "textarea":
    case "select":
    case "radio":
    case "checkbox":
    case "date":
    default:
      return null;
  }
}

export default FromikControl;
