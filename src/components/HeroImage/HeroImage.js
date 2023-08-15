import React from 'react';
import { styled } from 'styled-components';

function HeroImage() {
  return (
    <>
      <Picture>
        <source
          type="image/webp"
          srcSet="
          ./assets/image-hero-landscape.webp 1x,
          ./assets/image-hero-landscape@2x.webp 2x
        "
        />
        <source
          type="image/png"
          srcSet="
          ./assets/image-hero-landscape.png 1x,
          ./assets/image-hero-landscape@2x.png 2x
        "
        />
        <Image
          src="./assets/image-hero-landscape.png"
          alt=""
        />
      </Picture>
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
    </>
  );
}

const Picture = styled.figure`
  margin-top: 56px;
`;

const Image = styled.img`
  width: 100%;
`;

const Stats = styled.div`
  margin-top: 56px;
  display: flex;
  flex-direction: column;
  gap: 32px;
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

export default HeroImage;
