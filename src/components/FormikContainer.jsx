import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const initialValues = {
  email: "",
};
const validationSchema = Yup.object({
  email: Yup.string().email().required("Required"),
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
              <button type="submit">submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default FormikContainer;
