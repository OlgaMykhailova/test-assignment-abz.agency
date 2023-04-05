import { Logo } from 'components/Logo/Logo';
import { Navigation } from 'components/Navigation/Navigation';
import { Container } from 'components/Container/Container';
import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="header__wrapper">
          <Logo />
          <Navigation />
        </div>
      </Container>
    </header>
  );
};
