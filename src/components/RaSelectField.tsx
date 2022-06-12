import { ErrorMessage, useFormikContext } from "formik";

interface raSelectFieldProps {
  field: string;
  label?: string;
  placeholder?: string;
  options: RaSelectOptions[];
}

interface RaSelectOptions {
  key: string;
  value: number | string;
  name: string;
}

const RaSelectField = (props: raSelectFieldProps) => {
  const { values, validateForm, touched, errors } = useFormikContext<any>();
  
  return (
    <div className="form-group mb-3">
      {props.label ? (
        <label className="form-label" htmlFor={props.field}>
          {props.label}
        </label>
      ) : null}

      <select
        className="form-control round"
        name={props.field}
        //defaultValue={values[props.field]}
        value={values[props.field]}
        onChange={(e) => {
          values[props.field] = e.currentTarget.value;
          validateForm();
        }}
      >
        {props.placeholder ? (
          <option value={0}>{props.placeholder}</option>
        ) : null}
        {props.options && props.options.length ? props.options.map((option)=>
          <option key={option.key} value={option.value}>{option.name}</option>
        ) : null}
      </select>
      {touched[props.field] && errors[props.field] ? (
        <ErrorMessage name={props.field}>
          {(message) => (
            <div className="validation-message-error">{message}</div>
          )}
        </ErrorMessage>
      ) : null}
    </div>
  );
};

export default RaSelectField;
