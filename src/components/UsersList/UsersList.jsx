import { UserCard } from 'components/UserCard/UserCard';

export const UsersList = ({ users }) => {
  return (
    <ul>
      {users && users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </ul>
  );
};
