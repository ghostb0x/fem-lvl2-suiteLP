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
        <HeroImage />
      </TextWrapper>
      <HeroStats />
    </HeroWrapper>
  );
}

const HeroWrapper = styled.main`
  padding: 56px 16px 0 16px;

  @media ${QUERIES.tabletAndUp} {
    padding: 123px 40px 0 40px;
    isolation: isolate;
  }
`;

const TextWrapper = styled.div`
  @media ${QUERIES.tabletAndUp} {
    position: relative;
    width: 100%;
`;

const H1Wrapper = styled.div`
  padding-top: 28px;
`;

const H1 = styled.h1`
  display: inline;
  font: var(--font-h1-mobile);
  color: var(--color-darkBlue);

  @media ${QUERIES.tabletAndUp} {
    font: var(--font-h1-tablet);
    position: relative;
    z-index: 2;
    letter-spacing: -0.04863rem;
  }
`;

const H1B = styled.p`
  position: relative;
  font: var(--font-h1-mobile);
  font-weight: var(--font-weight-bold);
  display: inline;

  @media ${QUERIES.tabletAndUp} {
    font: var(--font-h1-tablet);
    font-weight: var(--font-weight-bold);
  }
`;

const CurvedLine = styled.img`
  position: absolute;
  top: -30px;
  right: 0px;
  width: 151.5px;

  @media ${QUERIES.tabletAndUp} {
    width: 231px;
  }
`;

const P = styled.p`
  font: var(--font-body-mobile);
  color: var(--color-gray);
  margin-top: 32px;

  @media ${QUERIES.tabletAndUp} {
    font: var(--font-body-tablet);
    max-width: 50%;
  }
`;

const HeroButton = styled(Button)`
  margin-top: 32px;
  width: 256px;
  height: 61px;
  font: var(--font-button-hero);
  background: var(--color-darkBlue);
  color: var(--color-cream);

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
