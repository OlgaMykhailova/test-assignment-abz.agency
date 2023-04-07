import { getUsers } from 'services/api';
import { Section } from 'components/Section/Section';
import { Container } from 'components/Container/Container';
import { Button } from 'components/Button/Button';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import { UsersList } from 'components/UsersList/UsersList';
import { Spinner } from 'components/Spinner/Spinner';
import { Error } from 'components/Error/Error';
import './GetSection.scss';

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
    <Section id="getSection">
      <Container>
        <div className="getsection__wrapper">
          <SectionTitle>Working with GET request</SectionTitle>
          {users && <UsersList users={users} />}
          {!users && !isLoading && (
            <Error>There are no users for display</Error>
          )}
          {nextUrl && !isLoading && (
            <Button
              type="button"
              onClick={loadMore}
              getSectionButton="getsection__button"
            >
              Show More
            </Button>
          )}
          {isLoading && <Spinner />}
        </div>
      </Container>
    </Section>
  );
};
