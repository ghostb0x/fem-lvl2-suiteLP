import React from 'react';
import { styled } from 'styled-components';
import Button from '../Button/Button';
import HeroImage from '../HeroImage/HeroImage';

function MainHero() {
  return (
    <HeroWrapper>
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
    </HeroWrapper>
  );
}

const HeroWrapper = styled.main`
  padding: 56px 16px 0 16px;
`;

const H1Wrapper = styled.div`
  padding-top: 28px;
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
