import React from 'react';
import { styled } from 'styled-components';
import { QUERIES } from '../../constants';

function HeroStats() {
  return (
    <Stats>
      <Stat>
        <StatNum>2K+</StatNum>
        <StatName>Companies</StatName>
      </Stat>
      <Stat>
        <StatNum>8</StatNum>
        <StatName>Languages</StatName>
      </Stat>
      <Stat>
        <StatNum>1.2M</StatNum>
        <StatName>Leads</StatName>
      </Stat>
    </Stats>
  );
}

const Stats = styled.section`
  margin-top: 56px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 128px;
    flex-direction: row;
    justify-content: space-around;
  }

  @media ${QUERIES.laptopAndUp} {
    margin-top: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Stat = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StatNum = styled.span`
  font: var(--font-h2-desktop);
  font-weight: var(--font-weight-bold);
  color: var(--color-darkBlue);
`;

const StatName = styled.span`
  font: var(--font-hs);
  text-transform: uppercase;
  color: var(--color-gray);
  letter-spacing: 0.15625rem;
`;

export default HeroStats;
