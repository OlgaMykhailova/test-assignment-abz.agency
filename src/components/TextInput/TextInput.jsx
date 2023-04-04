import { Field, ErrorMessage } from 'formik';

export const TextInput = ({name, placeholder}) => {
  return (
    <label>
      <Field
        autoComplete="off"
        type="text"
        name={name}
        placeholder={placeholder}
      />
      <ErrorMessage name={name} component="p"></ErrorMessage>
    </label>
  );
};
