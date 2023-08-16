import React from 'react';
import { styled } from 'styled-components';
import Button from '../Button/Button';
import HeroImage from '../HeroImage/HeroImage';
import { QUERIES } from '../../constants';
import HeroStats from '../HeroStats/HeroStats';

function MainHero() {
  return (
    <HeroWrapper>
      <TextWrapper>
        <H1Wrapper>
          <H1>
            A{' '}
            <H1B>
              super solution{' '}
              <CurvedLine
                src="./assets/pattern-curved-line-1.svg"
                alt=""
              />
            </H1B>
            <br />
            for your <H1B>business.</H1B>
          </H1>
        </H1Wrapper>
        <P>
          Our marketing and sales automations help you scale your
          outreach to get more leads for your company.
        </P>
        <HeroButton>Request Beta Access</HeroButton>
      </TextWrapper>
      <HeroImage />
      <HeroStats />
    </HeroWrapper>
  );
}

const HeroWrapper = styled.main`
  padding: 56px 16px 0 16px;

  @media ${QUERIES.tabletAndUp} {
    padding: 80px 40px 0 40px;
    position: relative;
  }
`;

const TextWrapper = styled.div`
  @media ${QUERIES.tabletAndUp} {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-template-rows: repeat(4, minmax(0, 1fr));
    grid-template-areas: 
    'h1 h1 h1 .'
    'h1 h1 h1 .'
    'text text . .'
    'button button . .'
  }
`;

const H1Wrapper = styled.div`
  padding-top: 28px;
  grid-area: h1;
`;

const CurvedLine = styled.img`
  position: absolute;
  top: -30px;
  right: 0px;
  width: 151.5px;
`;

const H1 = styled.h1`
  display: inline;
  font: var(--font-h1-mobile);
  color: var(--color-darkBlue);
`;

const H1B = styled.p`
  position: relative;
  font: var(--font-h1-mobile);
  font-weight: var(--font-weight-bold);
  display: inline;
`;

const P = styled.p`
  font: var(--font-body-mobile);
  color: var(--color-gray);
  margin-top: 32px;
  grid-area: text;
`;

const HeroButton = styled(Button)`
  margin-top: 32px;
  width: 256px;
  height: 61px;
  font: var(--font-button-hero);
  background: var(--color-darkBlue);
  color: var(--color-cream);
  grid-area: button;

  &:hover {
    background: linear-gradient(
      165deg,
      var(--color-purple) 0%,
      var(--color-pink) 50%,
      var(--color-orange) 100%
    );
  }
`;

export default MainHero;
