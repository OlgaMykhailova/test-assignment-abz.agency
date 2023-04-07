import { ReactComponent as LogoImage } from '../../media/logo-image.svg';
import { ReactComponent as LogoText } from '../../media/logo.svg';
import './Logo.scss';

export const Logo = () => {
  return (
    <div className="logo__container">
      <LogoImage className="logo__image" />
      <LogoText />
    </div>
  );
};
