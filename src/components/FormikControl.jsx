import React from "react";
import Input from "./Input.jsx";
import TextArea from "./TextArea.jsx";
import Select from "./Select.jsx";
import RadioButtons from "./RadioButtons.jsx";
import CheckBox from "./CheckBox.jsx";
import DatePicker from "./DatePicker.jsx";
function FormikControl(props) {
  const { control, ...rest } = props;

  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <RadioButtons {...rest} />;
    case "checkbox":
      return <CheckBox {...rest} />;
    case "date":
      return <DatePicker {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
