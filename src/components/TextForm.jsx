import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import "../App.css";
import TextError from "./TextError";
const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
};
const onSubmit = (values) => {
  console.log("onsubmit", values);
};
const validationSchema = yup.object({
  name: yup.string().required("Required"),
  email: yup.string().email().required("Required"),
  channel: yup.string().required("Required"),
  comments: yup.string().required("Required").max(20),
  address: yup.string().required("Required").max(20),
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
            <ErrorMessage name="name" component={TextError} />
          </div>
          <div>
            <label htmlFor="email">Email </label>
            <Field type="text" id="email" name="email" />
            <ErrorMessage name="email" component={TextError} />
          </div>
          <div>
            <label htmlFor="channel">Channel </label>
            <Field type="text" id="channel" name="channel" />
            <ErrorMessage name="channel" component={TextError} />
          </div>
          <div>
            <label htmlFor="comments">Comments </label>
            <Field as="textarea" id="comments" name="comments" />
            <ErrorMessage name="comments" component={TextError} />
          </div>
          <div>
            <label htmlFor="address">Address </label>
            <Field name="address">
              {(props) => {
                const { field, form, meta } = props;
                return (
                  <div>
                    <input id="address" {...field}></input>
                    {meta.touched && meta.error ? (
                      <div>{meta.error}</div>
                    ) : null}
                  </div>
                );
              }}
            </Field>
          </div>
          <button type="submit">Submit</button>
          <h2>display</h2>
        </Form>
      </div>
    </Formik>
  );
}
export default TextForm;
