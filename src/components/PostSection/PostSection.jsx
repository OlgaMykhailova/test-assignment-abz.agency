import { Container } from 'components/Container/Container';
import { Section } from 'components/Section/Section';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import { SignupForm } from 'components/SignupForm/SignupForm';
import './PostSection.scss';

export const PostSection = ({ setUsers, setNextUrl, setIsLoading }) => {
  return (
    <Section id="postSection" postSection='postsection__section'>
      <Container>
        <div className='postsection__wrapper'>
          <SectionTitle>Working with POST request</SectionTitle>
          <SignupForm
            setUsers={setUsers}
            setNextUrl={setNextUrl}
            setIsLoading={setIsLoading}
          />
        </div>
      </Container>
    </Section>
  );
};
