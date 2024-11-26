import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
function Input(props) {
  const { label, name, ...rest } = props;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field id={name} type={name} name={name} {...rest} />
      <ErrorMessage name={name} components={TextError} />
    </div>
  );
}

export default Input;
