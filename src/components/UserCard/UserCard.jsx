import { Tooltip } from 'components/Tooltip/Tooltip';
import './UserCard.scss';

export const UserCard = ({ user }) => {
  const { photo, name, position, email, phone } = user;
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
        <p className="usercard__name">{name}</p>
        <Tooltip usercardTooltip="usercard__tooltip">{name}</Tooltip>
      </div>
      <div className="usercard__description">
        <p>{position}</p>
        <div className="usercard__wrapper">
          <p className="usercard__email">{email}</p>
          <Tooltip>{email}</Tooltip>
        </div>
        <p>{phone}</p>
      </div>
    </li>
  );
};
