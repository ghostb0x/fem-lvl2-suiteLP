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
    </>
  );
}

const Picture = styled.figure`
  margin-top: 56px;
`;

const Image = styled.img`
  width: 100%;
`;

export default HeroImage;
