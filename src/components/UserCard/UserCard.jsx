import { useState, useEffect, useRef } from 'react';
import { Tooltip } from 'components/Tooltip/Tooltip';
import './UserCard.scss';

export const UserCard = ({ user }) => {
  const [isNameOverflowHidden, setIsNameOverflowHidden] = useState(false);
  const [isEmailOverflowHidden, setIsEmailOverflowHidden] = useState(false);
  const refName = useRef(null);
  const refEmail = useRef(null);
  const { photo, name, position, email, phone } = user;

  useEffect(() => {
    if (refName.current?.scrollWidth > refName.current?.offsetWidth) {
      setIsNameOverflowHidden(true);
    }
    if (refEmail.current?.scrollWidth > refEmail.current?.offsetWidth) {
      setIsEmailOverflowHidden(true);
    }
  }, []);

  return (
    <li className="usercard">
      <img
        src={photo}
        alt="avatar"
        width="70"
        height="70"
        className="usercard__image"
      />
      <div className="usercard__wrapper">
        <p ref={refName} className="usercard__name">
          {name}
        </p>
        {isNameOverflowHidden && (
          <Tooltip usercardTooltip="usercard__tooltip">{name}</Tooltip>
        )}
      </div>
      <div className="usercard__description">
        <p>{position}</p>
        <div className="usercard__wrapper">
          <p ref={refEmail} className="usercard__email">
            {email}
          </p>
          {isEmailOverflowHidden && <Tooltip>{email}</Tooltip>}
        </div>
        <p>{phone}</p>
      </div>
    </li>
  );
};
