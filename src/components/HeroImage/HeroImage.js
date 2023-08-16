import React from 'react';
import { styled } from 'styled-components';
import { QUERIES } from '../../constants';

function HeroImage() {
  return (
    <>
      <LandscapePicture>
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
      </LandscapePicture>
      <PortraitPicture>
        <source
          type="image/webp"
          srcSet="
          ./assets/image-hero-portrait.webp 1x,
          ./assets/image-hero-portrait@2x.webp 2x
        "
        />
        <source
          type="image/png"
          srcSet="
          ./assets/image-hero-portrait.png 1x,
          ./assets/image-hero-portrait@2x.png 2x
        "
        />
        <Image
          src="./assets/image-hero-portrait.png"
          alt=""
        />
      </PortraitPicture>
    </>
  );
}

const LandscapePicture = styled.picture`
  @media ${QUERIES.tabletAndUp} {
    display: none;
  }
`;

const PortraitPicture = styled.picture`
  display: none;

  @media ${QUERIES.tabletAndUp} {
    display: revert;
    position: absolute;
    top: -43px;
    right: 0px;
    z-index: 1;
    text-align: right;
    width: 277px;
  }
`;

const Image = styled.img`
  margin-top: 56px;
  width: 100%;

  @media ${QUERIES.tabletAndUp} {
    margin-top: revert;
  }
`;

export default HeroImage;
