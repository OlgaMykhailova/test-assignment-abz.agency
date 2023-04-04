import { getUsers } from 'services/api';
import { Button } from 'components/Button/Button';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import { UsersList } from 'components/UsersList/UsersList';
import { Spinner } from 'components/Spinner/Spinner';
import { Error } from 'components/Error/Error';

export const GetSection = ({
  users,
  setUsers,
  nextUrl,
  setNextUrl,
  isLoading,
  setIsLoading,
}) => {
    
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
      setUsers(users => [...users, ...responseData.users]);
      setNextUrl(responseData.links.next_url);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      return error;
    }
  };

  return (
    <section>
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
    </section>
  );
};
