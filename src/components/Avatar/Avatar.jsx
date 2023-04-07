import './Avatar.scss';

export const Avatar = ({ photo }) => {
  return (
    <img
      src={photo}
      alt="avatar"
      width="70"
      height="70"
      className="avatar"
      loading="lazy"
    />
  );
};
