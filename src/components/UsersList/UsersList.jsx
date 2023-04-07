import { UserCard } from 'components/UserCard/UserCard';
import './UserList.scss';

export const UsersList = ({ users }) => {
  return (
    <ul className="userlist">
      {users && users.map(user => <UserCard key={user.id} user={user} />)}
    </ul>
  );
};
