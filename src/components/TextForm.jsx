import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as yup from "yup";
import "../App.css";
import TextError from "./TextError";
const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumber: ["", ""],
  pNumber: [""],
};
const savedValues = {
  name: "harish",
  email: "hari@gmail.com",
  channel: "asdf",
  comments: "asdf",
  address: "asdf",
  social: {
    facebook: "asdf",
    twitter: "asdf",
  },
  phoneNumber: ["", ""],
  pNumber: [""],
};
const onSubmit = (values, onSubmitProps) => {
  console.log("onsubmit", values);
  onSubmitProps.setSubmitting(false);
};
const validationSchema = yup.object({
  name: yup.string().required("Required"),
  email: yup.string().email().required("Email is Required"),
  channel: yup.string().required("Required"),
  comments: yup.string().required("Required").max(20),
  address: yup.string().required("Required").max(20),
});
function TextForm() {
  const [data, setData] = useState(null);
  return (
    <Formik
      initialValues={data || initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {(formik) => (
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
              <ErrorMessage name="email">
                {(errorMsg) => <div className="error">{errorMsg}</div>}
              </ErrorMessage>
            </div>
            <div>
              <label htmlFor="channel">Channel </label>
              <Field type="text" id="channel" name="channel" />
              <ErrorMessage name="channel" component={TextError} />
            </div>
            <div>
              <label htmlFor="comments">Comments </label>
              <Field as="textarea" id="comments" name="comments" />
              <ErrorMessage name="comments" />
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
            <div>
              <label htmlFor="facebook">Facebook</label>
              <Field id="facebook" name="social.facebook" />
            </div>
            <div>
              <label htmlFor="twitter"> Twitter</label>
              <Field id="twitter" name="social.twitter" />
            </div>
            <div>
              <label htmlFor="prinum">Primary number</label>
              <Field id="facebook" name="phoneNumber[0]" />
            </div>
            <div>
              <label htmlFor="secnum">Secondary Number</label>
              <Field id="facebook" name="phoneNumber[1]" />
            </div>
            <FieldArray name="pNumber">
              {(props) => {
                const { form, remove, push } = props;
                const { values } = form;
                const { pNumber } = values;
                return (
                  <div>
                    {pNumber.map((ph, index) => (
                      <div key={index}>
                        <Field name={`pNumber[${index}]`} />
                        <button
                          type="button"
                          onClick={() => {
                            push("");
                          }}
                        >
                          Add{" "}
                        </button>
                        {index > 0 && (
                          <button
                            type="button"
                            onClick={() => {
                              remove(index);
                            }}
                          >
                            Remove
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                );
              }}
            </FieldArray>
            <button
              type="button"
              onClick={() => {
                setData(savedValues);
              }}
            >
              Load Saved Data
            </button>
            <button
              type="submit"
              disabled={!(formik.isValid || formik.isSubmitting)}
            >
              Submit
            </button>
            <h2>display</h2>
          </Form>
        </div>
      )}
    </Formik>
  );
}
export default TextForm;
