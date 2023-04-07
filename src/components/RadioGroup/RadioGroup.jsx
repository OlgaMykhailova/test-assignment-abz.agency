import { useState, useEffect } from 'react';
import { ErrorMessage } from 'formik';
import { getPositions } from 'services/api';
import { loadPositions } from 'services/loadPositions';
import { RadioItem } from 'components/RadioItem/RadioItem';
import { Spinner } from 'components/Spinner/Spinner';
import { Error } from 'components/Error/Error';
import './RadioGroup.scss';

export const RadioGroup = ({ name }) => {
  const [positions, setPositions] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadPositions(setIsLoading, getPositions, setPositions);
  }, []);

  return (
    <div role="group" className="radiogroup">
      <p className="radiogroup__title">Select your position</p>
      {isLoading ? (
        <Spinner />
      ) : positions ? (
        positions.map(position => (
          <RadioItem
            position={position}
            key={position.id.toString()}
            name={name}
          />
        ))
      ) : (
        <Error>There are no positions for display</Error>
      )}
      <ErrorMessage name={name} component="p"></ErrorMessage>
    </div>
  );
};
