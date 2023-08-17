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
    padding: 168px 40px 0 40px;
    isolation: isolate;
  }

  @media ${QUERIES.laptopAndUp} {
    padding: 170px 165px 0px 165px;
    display: grid;
    grid-template-columns: 3fr 1fr;
    max-width: 1500px;
  }
`;

const TextWrapper = styled.div`
  
  @media ${QUERIES.tabletAndUp} {
    position: relative;
    max-width: 700px;

  @media ${QUERIES.laptopAndUp} {
    max-width: 860px;
  }
`;

const H1Wrapper = styled.div``;

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

  @media ${QUERIES.laptopAndUp} {
    font: var(--font-h1-desktop);
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

  @media ${QUERIES.laptopAndUp} {
    font: var(--font-h1-desktop);
    font-weight: var(--font-weight-bold);
  }
`;

const CurvedLine = styled.img`
  position: absolute;
  top: -30px;
  right: 0px;
  width: 151.5px;

  @media ${QUERIES.tabletAndUp} {
    top: -45px;
    width: 231px;
  }

  @media ${QUERIES.laptopAndUp} {
    top: -60px;
    width: 287px;
  }
`;

const P = styled.p`
  margin-top: 32px;
  font: var(--font-body-mobile);
  color: var(--color-gray);

  @media ${QUERIES.tabletAndUp} {
    margin-top: 40px;
    font: var(--font-body-tablet);
    max-width: 50%;
  }

  @media ${QUERIES.laptopAndUp} {
    font: var(--font-body-desktop);
    max-width: 340px;
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

  @media ${QUERIES.tabletAndUp} {
    margin-top: 40px;
  }

  @media ${QUERIES.laptopAndUp} {
    margin-top: 52px;
  }
`;

export default MainHero;
