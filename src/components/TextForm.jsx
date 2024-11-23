import React from "react";
import { Formik, Form, Field, ErrorMassage } from "formik";
import * as yup from "yup";
import "../App.css";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};
const onSubmit = (values) => {
  console.log("onsubmit", values);
};

const validationSchema = yup.object({
  name: yup.string().required("Required"),
  email: yup.string().email().required("Required"),
  channel: yup.string().required("Required"),
});

function TextForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <div className="Container">
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" />
            {formik.touched.name && formik.errors.name ? (
              <div className="error"> {formik.errors.name}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="email">Email </label>
            <Field type="text" id="email" name="email" />
            {formik.touched.email && formik.errors.email ? (
              <div className="error"> {formik.errors.email}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="channel">Channel </label>
            <Field type="text" id="channel" name="channel" />
            {formik.touched.channel && formik.errors.channel ? (
              <div className="error"> {formik.errors.channel}</div>
            ) : null}
          </div>

          <button type="submit">Submit</button>

          <h2>display</h2>
          {}
        </Form>
      </div>
    </Formik>
  );
}

export default TextForm;
