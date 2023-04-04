import { Field } from 'formik';

export const RadioItem = ({ position, name }) => {
  return (
    <>
      <label>
        <Field type="radio" name={name} value={position.id.toString()} />
        {position.name}
      </label>
    </>
  );
};
