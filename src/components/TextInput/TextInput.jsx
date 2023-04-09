import { Field, ErrorMessage } from 'formik';
import { isError } from 'services/isError';
import './TextInput.scss';

export const TextInput = ({
  name,
  label,
  placeholder,
  formTextInput = '',
  maskedInput,
  mask,
  errors,
  touched,
}) => {
  return (
    <div className={`textinput__wrapper ${formTextInput}`}>
      <Field
        as={maskedInput}
        mask={mask}
        autoComplete="off"
        type="text"
        name={name}
        id={name}
        placeholder={placeholder}
        className={`textinput ${
          isError(errors, touched, name) && 'textinput__field-error'
        }`}
      />
      <label
        for={name}
        className={`textinput__label ${
          isError(errors, touched, name) && 'textinput__label-error'
        }`}
      >
        {label}
      </label>
      <ErrorMessage
        name={name}
        component="p"
        className="textinput__error"
      ></ErrorMessage>
    </div>
  );
};
