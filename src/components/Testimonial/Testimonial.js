import React from 'react';
import { styled } from 'styled-components';
import { QUERIES } from '../../constants';

function Testimonial() {
  return (
    <Background>
      <TestimonialWrapper>
        <ImageWrapper>
          <SmallPicture>
            <source
              type="image/webp"
              srcSet="
          ./assets/image-jeremy-small.webp 1x,
          ./assets/image-jeremy-small@2x.webp 2x
        "
            />
            <source
              type="image/png"
              srcSet="
          ./assets/image-jeremy-small.png 1x,
          ./assets/image-jeremy-small@2x.png 2x
        "
            />
            <Image
              src="./assets/image-jeremy-small.png"
              alt=""
            />
          </SmallPicture>

          <LargePicture>
            <source
              type="image/webp"
              srcSet="
          ./assets/image-jeremy-large.webp 1x,
          ./assets/image-jeremy-large@2x.webp 2x
        "
            />
            <source
              type="image/png"
              srcSet="
          ./assets/image-jeremy-large.png 1x,
          ./assets/image-jeremy-large@2x.png 2x
        "
            />
            <Image
              src="./assets/image-jeremy-large.png"
              alt=""
            />
          </LargePicture>
          <BlurImage
            src="./assets/pattern-blur.svg"
            alt=""
          />
        </ImageWrapper>

        <CurvedLine
          src="./assets/pattern-curved-line-2.svg"
          alt=""
        />
        <TextWrapper>
          <H2>
            It just <H2B>works.</H2B>
          </H2>
          <Quote>
            “I really like how it is an all-in-one solution that
            handle many of the tasks that you would normally need
            separate tools to do the same job. This thing is a miracle
            worker.”
          </Quote>
          <QuotedName>Jeremy Robinson</QuotedName>
          <QuotedTitle>CMO, Fylo</QuotedTitle>
        </TextWrapper>
      </TestimonialWrapper>
    </Background>
  );
}

const Background = styled.section`
  @media ${QUERIES.tabletAndUp} {
    background: linear-gradient(
      180deg,
      var(--color-white) 0%,
      var(--color-white) 32.99%,
      var(--color-cream) 33%
    );
  }

  @media ${QUERIES.laptopAndUp} {
    background: linear-gradient(
      180deg,
      var(--color-white) 0%,
      var(--color-white) 49.99%,
      var(--color-cream) 50%
    );
  }
`;

const TestimonialWrapper = styled.div`
  margin-top: 237px;
  border-radius: 15px;
  padding: 0 16px 64px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-darkBlue);

  @media ${QUERIES.tabletAndUp} {
    margin: 273px 40px 0 40px;
    padding: 0 58px 64px 58px;
  }

  @media ${QUERIES.laptopAndUp} {
    margin: 290px 165px 0 165px;
    padding: 0 125px 0 122px;
    flex-direction: row;
    justify-content: center;
  }
`;

const ImageWrapper = styled.div`
  margin-top: -181px;
  position: relative;
  isolation: isolate;

  @media ${QUERIES.laptopAndUp} {
    margin-top: -45px;
  }
`;

const BlurImage = styled.img`
  display: none;

  @media ${QUERIES.tabletAndUp} {
    display: revert;
    position: absolute;
    right: -34%;
    top: 20%;
    width: 420px;
    z-index: 1;
  }

  @media ${QUERIES.laptopAndUp} {
    width: 620px;
  }
`;

const SmallPicture = styled.picture`
  position: relative;
  z-index: 2;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const LargePicture = styled.picture`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: revert;
    position: relative;
    z-index: 2;
    flex: 1;
  }
`;

const Image = styled.img`
  width: 252px;

  @media ${QUERIES.laptopAndUp} {
    width: 360px;
    display: block;
  }
`;

const CurvedLine = styled.img`
  margin-top: 40px;
  width: 50px;

  @media ${QUERIES.laptopAndUp} {
    width: 64px;
    margin-top: -170px;
    margin-left: 30px;
    margin-right: 52px;
  }
`;

const TextWrapper = styled.div`
  text-align: center;
  margin-top: 37px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${QUERIES.laptopAndUp} {
    text-align: start;
    align-items: flex-start;
    padding-bottom: 88px;
  }
`;

const H2 = styled.h2`
  display: inline;
  font: var(--font-h2-mobile);
  color: var(--color-cream);

  @media ${QUERIES.laptopAndUp} {
    font: var(--font-h2-desktop);
  }
`;

const H2B = styled.em`
  font: var(--font-h2-mobile);
  font-weight: var(--font-weight-bold);
  display: inline;

  @media ${QUERIES.laptopAndUp} {
    font: var(--font-h2-desktop);
    font-weight: var(--font-weight-bold);
  }
`;

const Quote = styled.blockquote`
  margin-top: 40px;
  font: var(--font-quote-mobile);
  color: var(--color-cream);
  text-align: center;

  @media ${QUERIES.laptopAndUp} {
    text-align: start;
    font: var(--font-quote-desktop);
  }
`;

const QuotedName = styled.span`
  margin-top: 40px;
  font: var(--font-hm);
  color: var(--color-cream);
  text-transform: uppercase;
`;

const QuotedTitle = styled.span`
  font: var(--font-hs);
  color: var(--color-cream);
  text-transform: uppercase;
  letter-spacing: 0.15625rem;
`;

export default Testimonial;
