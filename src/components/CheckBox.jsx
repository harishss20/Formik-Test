import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
function CheckBox(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div>
      <label>{label}</label>
      <Field name={name}>
        {({ field }) =>
          options.map((op) => (
            <React.Fragment key={op.value}>
              {console.log(field)}
              <input
                type="checkbox"
                id={op.value}
                {...field}
                value={op.value}
                checked={field.value.includes(op.value)}
              />
              <label htmlFor={op.value}>{op.key}</label>
            </React.Fragment>
          ))
        }
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default CheckBox;
