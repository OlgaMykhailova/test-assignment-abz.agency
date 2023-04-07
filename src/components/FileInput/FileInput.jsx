import { useEffect } from 'react';
import { Field, ErrorMessage, useFormikContext } from 'formik';
import { isError } from 'services/isError';
import './FileInput.scss';
import { CustomInput } from './CustomInput';

export const FileInput = ({ name, accept, formik, errors, touched }) => {
  const { setFieldValue, values } = useFormikContext();

  useEffect(() => {
    if (values.photo !== '') {
      setFieldValue('imageurl', values.photo?.name);
    }
  }, [setFieldValue, values.photo]);

  return (
    <label className="fileinput__label">
      <Field
        component={CustomInput}
        name={name}
        accept={accept}
        formik={formik}
      />

      <Field
        name="imageurl"
        type="text"
        placeholder="Upload your photo"
        className={`fileinput__field ${
          isError(errors, touched, name) && 'fileinput__field-error'
        }`}
      />
      <div
        className={`fileinput__button ${
          isError(errors, touched, name) && 'fileinput__field-error'
        }`}
      >
        Upload
      </div>
      <ErrorMessage
        name={name}
        component="p"
        className="fileinput__error"
      ></ErrorMessage>
    </label>
  );
};
