import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";

const initialValues = {};
const validationSchema = Yup.object({});
const onSubmit = (value) => {
  console.log(value);
};

function Control() {
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
              <submit type="submit">submit</submit>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Control;
