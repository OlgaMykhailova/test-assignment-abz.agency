import { Field, ErrorMessage } from 'formik';
import { isError } from 'services/isError';
import './TextInput.scss';

export const TextInput = ({
  name,
  placeholder,
  formTextInput = '',
  maskedInput,
  mask,
  errors,
  touched,
}) => {
  return (
    <label className={`${formTextInput} textinput__label`}>
      <Field
        as={maskedInput}
        mask={mask}
        autoComplete="off"
        type="text"
        name={name}
        placeholder={placeholder}
        className={`textinput ${
          isError(errors, touched, name) && 'textinput__field-error'
        }`}
      />
      <ErrorMessage
        name={name}
        component="p"
        className="textinput__error"
      ></ErrorMessage>
    </label>
  );
};
