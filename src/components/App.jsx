import { useEffect, useState } from 'react';
import { getUsers } from 'services/api';
import { loadUsers } from 'services/loadUsers';
import { GetSection } from './GetSection/GetSection';
import { Header } from './Header/Header';
import { Hero } from './Hero/Hero';
import { PostSection } from './PostSection/PostSection';
import { Toast } from './Toast/Toast';

export const App = () => {
  const [users, setUsers] = useState(null);
  const [nextUrl, setNextUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadUsers(setIsLoading, setUsers, setNextUrl, getUsers);
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <GetSection
        users={users}
        setUsers={setUsers}
        nextUrl={nextUrl}
        setNextUrl={setNextUrl}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      <PostSection
        setUsers={setUsers}
        setNextUrl={setNextUrl}
        setIsLoading={setIsLoading}
      />
      <Toast />
    </>
  );
};
