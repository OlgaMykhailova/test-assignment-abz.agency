import { scrollTo } from 'services/scrollTo';
import { Button } from 'components/Button/Button';
import { MainTitle } from 'components/MainTitle/MainTitle';
import { Text } from 'components/Text/Text';
import './Hero.scss';
import { Section } from 'components/Section/Section';

export const Hero = () => {
  return (
    <Section>
      <div className="hero__wrapper">
        <MainTitle heroMainTitle="hero__maintitle">
          Test assignment for front-end developer
        </MainTitle>
        <Text heroText="hero__text">
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </Text>
        <Button type="button" onClick={() => scrollTo('postSection')}>
          Sign up
        </Button>
      </div>
    </Section>
  );
};
