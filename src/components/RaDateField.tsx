import { ErrorMessage, useFormikContext } from "formik";

interface raDateFieldProps {
  field: string;
  label?: string;
}

const RaDateField = (props: raDateFieldProps) => {
  const { values, validateForm, touched, errors } = useFormikContext<any>();

  return (
    <div className="form-group mb-3">
      {props.label ? (
        <label className="form-label" htmlFor={props.field}>
          {props.label}
        </label>
      ) : null}

      <input
        className="form-control round"
        type="date"
        name={props.field}
        defaultValue={values[props.field]?.toLocaleDateString("en-CA")}
        onChange={(e) => {
          const fecha = new Date(`${e.currentTarget.value}T00:00:00`);
          values[props.field] = fecha;
          validateForm();
        }}
      />
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

export default RaDateField;
