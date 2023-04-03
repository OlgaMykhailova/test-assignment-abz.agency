import { useEffect, useState } from 'react';
import { getUsers } from 'services/api';
import { Button } from 'components/Button/Button';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import { UsersList } from 'components/UsersList/UsersList';
import { Spinner } from 'components/Spinner/Spinner';
import { Error } from 'components/Error/Error';

export const GetSection = () => {
  const [users, setUsers] = useState(null);
  const [nextUrl, setNextUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadUsers = async () => {
      setIsLoading(true);
      try {
        const responseData = await getUsers();
        if (!responseData) {
          throw new Error(
            'Sorry, there are no users for display. Please try again later.'
          );
        }
        setUsers(responseData.users);
        setNextUrl(responseData.links.next_url);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        return error;
      }
    };
    loadUsers();
  }, []);

  const loadMore = async () => {
    setIsLoading(true);
    const indexQuery = nextUrl.indexOf('?');
    if (indexQuery === -1) {
      throw new Error('Sorry, something went wrong. Please try again later.');
    }
    const query = nextUrl.slice(indexQuery + 1, nextUrl.length);

    try {
      const responseData = await getUsers(query);
      if (!responseData) {
        throw new Error(
          'Sorry, there are no users for display. Please try again later.'
        );
      }
      console.log(responseData.users);
      setUsers(users => [...users, ...responseData.users]);
      setNextUrl(responseData.links.next_url);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      return error;
    }
  };

  return (
    <>
      <SectionTitle>Working with GET request</SectionTitle>
      {users ? (
        <UsersList users={users} />
      ) : isLoading ? (
        <Spinner />
      ) : (
        <Error errorText={'There are no users for display'} />
      )}
      {nextUrl && !isLoading && (
        <Button type="button" onClick={loadMore}>
          Show More
        </Button>
      )}
    </>
  );
};
