import { Field } from 'formik';
import './RadioItem.scss';

export const RadioItem = ({ position, name }) => {
  return (
    <>
      <label className="radioitem__label">
        <Field
          type="radio"
          name={name}
          value={position.id.toString()}
          className="radioitem__input"
        />
        {position.name}
      </label>
    </>
  );
};
