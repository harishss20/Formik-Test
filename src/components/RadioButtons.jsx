import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
function RadioButtons(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div>
      <label>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) =>
          options.map((op) => (
            <React.Fragment key={op.value}>
              <input
                type="radio"
                id={op.value}
                {...field}
                checked={field.value === op.value}
                value={op.value}
              />
              <label htmlFor={op.value}> {op.value}</label>
            </React.Fragment>
          ))
        }
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default RadioButtons;
