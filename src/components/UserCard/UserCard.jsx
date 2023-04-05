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
      <p className="usercard__name">{name}</p>
      <div className='usercard__description'>
        <p>{position}</p>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
    </li>
  );
};
