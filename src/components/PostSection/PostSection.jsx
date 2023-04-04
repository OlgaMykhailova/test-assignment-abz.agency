import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import { SignupForm } from 'components/SignupForm/SignupForm';

export const PostSection = ({ setUsers, setNextUrl, setIsLoading }) => {
  return (
    <section id="postSection">
      <SectionTitle>Working with POST request</SectionTitle>
      <SignupForm
        setUsers={setUsers}
        setNextUrl={setNextUrl}
        setIsLoading={setIsLoading}
      />
    </section>
  );
};
