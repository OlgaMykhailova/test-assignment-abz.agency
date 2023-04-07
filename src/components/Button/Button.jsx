import './Button.scss';

export const Button = ({
  type,
  children,
  onClick,
  navigationButton = '',
  getSectionButton = '',
  formButton = '',
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`button ${navigationButton} ${getSectionButton} ${formButton}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
