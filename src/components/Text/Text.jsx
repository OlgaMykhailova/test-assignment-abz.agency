import './Text.scss';

export const Text = ({ children, heroText='' }) => {
  return <p className={`text ${heroText}`}>{children}</p>;
};
