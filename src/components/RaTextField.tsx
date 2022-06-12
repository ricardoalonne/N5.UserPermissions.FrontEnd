import { ErrorMessage, Field } from "formik";

interface raTextFieldProps {
  field: string;
  label?: string;
  placeholder?: string;
  type?: string;
}

const RaTextField = (props: raTextFieldProps) => {
  return (
    <div className="form-group mb-3">
      {props.label ? <label className="form-label" htmlFor={props.field}>{props.label}</label> : null}

      <Field
        name={props.field}
        className="form-control round"
        placeholder={props.placeholder}
        type={props.type}
      />
      
      <ErrorMessage name={props.field}>
        {(message) => <div className="validation-message-error">{message}</div>}
      </ErrorMessage>
    </div>
  );
};

export default RaTextField;
