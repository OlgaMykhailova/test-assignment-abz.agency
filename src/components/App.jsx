import { getPositions, getUsers } from 'services/api';
import { GetSection } from './GetSection/GetSection';
import { Header } from './Header/Header';
import { Hero } from './Hero/Hero';
import { PostSection } from './PostSection/PostSection';

getUsers(1);
getPositions();

export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <GetSection />
      <PostSection />
    </>
  );
};
