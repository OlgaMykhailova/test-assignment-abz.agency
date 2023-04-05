import { scrollTo } from 'services/scrollTo';
import { Button } from 'components/Button/Button';
import './Navigation.scss';

export const Navigation = () => {
  return (
    <nav className="navigation">
      <Button type="button" navigationButton="navigation__button" onClick={() => scrollTo('getSection')}>
        Users
      </Button>
      <Button type="button" onClick={() => scrollTo('postSection')}>
        Sign up
      </Button>
    </nav>
  );
};
