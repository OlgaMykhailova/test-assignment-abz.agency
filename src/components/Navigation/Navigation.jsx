import { scrollTo } from 'services/scrollTo';
import { Button } from 'components/Button/Button';

export const Navigation = () => {
  return (
    <nav>
      <Button type="button">Users</Button>
      <Button type="button" onClick={() => scrollTo('postSection')}>
        Sign up
      </Button>
    </nav>
  );
};
