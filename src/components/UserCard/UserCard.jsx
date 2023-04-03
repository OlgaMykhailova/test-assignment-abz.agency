export const UserCard = ({ user }) => {
  const {photo, name, position, email, phone} = user;
  return (
    <li>
      <img src={photo} alt="avatar" />
      <p>{name}</p>
      <p>{position}</p>
      <p>{email}</p>
      <p>{phone}</p>
    </li>
  );
};
