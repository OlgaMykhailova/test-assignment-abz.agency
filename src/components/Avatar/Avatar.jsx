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
      onError={e =>
        (e.currentTarget.src =
          'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg')
      }
    />
  );
};
