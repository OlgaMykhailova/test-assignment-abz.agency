import { Field } from 'formik';
import { isError } from 'services/isError';
import './FileInput.scss';

export const FileInput = ({ name, accept, onChange, errors, touched }) => {
  return (
    <label className="fileinput__label">
      <input
        name={name}
        type="file"
        accept={accept}
        onChange={onChange}
        className="fileinput"
      />
      <Field
        name="imageurl"
        type="text"
        placeholder="Upload your photo"
        className={`fileinput__field ${
          isError(errors, touched, name) && 'fileinput__field-error'
        }`}
        disabled
      />
      <div
        className={`fileinput__button ${
          isError(errors, touched, name) && 'fileinput__field-error'
        }`}
      >
        Upload
      </div>
      <p
        name={name}
        component="p"
        className={`fileinput__error ${
          isError(errors, touched, name) && 'fileinput__error-visible'
        }`}
      >
        {errors.photo}
      </p>
    </label>
  );
};
