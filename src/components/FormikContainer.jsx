import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const dropDownOptions = [
  { key: "Country", value: "" },
  { key: "india", value: "india" },
  { key: "china", value: "china" },
  { key: "usa", value: "usa" },
];
const radioOp = [
  { key: "india", value: "india" },
  { key: "china", value: "china" },
  { key: "usa", value: "usa" },
];
const checkOp = [
  { key: "india", value: "india" },
  { key: "china", value: "china" },
  { key: "usa", value: "usa" },
];
const initialValues = {
  email: "",
  textarea: "",
  country: "",
  radioOp: "",
  checkbox: [],
};
const validationSchema = Yup.object({
  email: Yup.string().email().required("Required"),
  textarea: Yup.string().max(200).required("Yes"),
  country: Yup.string().required("Required"),
  radioOp: Yup.string().required("Required"),
  checkbox: Yup.array()
    .min(1, "Please select at least one checkbox")
    .required("required"),
});
const onSubmit = (value) => {
  console.log(value);
};

function FormikContainer() {
  return (
    <div>
      {" "}
      <div>
        <h1>This is Test Form</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <Form>
              <FormikControl
                control="input"
                type="email"
                label="Email"
                name="email"
              />
              <FormikControl
                control="textarea"
                label="TextArea"
                name="textarea"
              />
              <FormikControl
                control="select"
                label="Select the country"
                name="country"
                options={dropDownOptions}
              />
              <FormikControl
                control="radio"
                label="Select the country"
                name="radioOp"
                options={radioOp}
              />
              <FormikControl
                control="checkbox"
                label="Select the country"
                name="checkbox"
                options={checkOp}
              />
              <button type="submit">submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default FormikContainer;
