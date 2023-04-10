import './Tooltip.scss';

export const Tooltip = ({ children, usercardTooltip='' }) => {
  return <div className={`tooltip ${usercardTooltip}`}>{children}</div>;
};
