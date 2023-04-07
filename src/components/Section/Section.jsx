import './Section.scss';

export const Section = ({children, id, postSection}) => {
  return <section className={`section ${postSection}`} id={id}>{children}</section>;
};
