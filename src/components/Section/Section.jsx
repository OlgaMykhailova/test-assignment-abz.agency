import './Section.scss';

export const Section = ({children, id}) => {
  return <section className="section" id={id}>{children}</section>;
};
