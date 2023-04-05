import './MainTitle.scss';

export const MainTitle = ({ children, heroMainTitle='' }) => {
  return <h1 className={`mainTitle ${heroMainTitle}`}>{children}</h1>;
};
