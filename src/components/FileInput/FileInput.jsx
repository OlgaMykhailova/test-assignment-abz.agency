import { ErrorMessage } from 'formik';

export const FileInput = ({name, accept, onChange}) => {
    return (
        <label>
            <input
              name={name}
              type="file"
              accept={accept}
              onChange={onChange}
            />
            <ErrorMessage name={name} component="p"></ErrorMessage>
          </label>
    )
}