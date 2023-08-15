import React from 'react';
import { styled } from 'styled-components';

function Testimonial() {
  return (
    <TestimonialWrapper>
      <Picture>
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
      </Picture>

      <CurvedLine
        src="./assets/pattern-curved-line-2.svg"
        alt=""
      />

      <H2>
        It just <H2B>works.</H2B>
      </H2>
      <Quote>
        “I really like how it is an all-in-one solution that handle
        many of the tasks that you would normally need separate tools
        to do the same job. This thing is a miracle worker.”
      </Quote>
      <QuotedName>Jeremy Robinson</QuotedName>
      <QuotedTitle>CMO, Fylo</QuotedTitle>
    </TestimonialWrapper>
  );
}

const TestimonialWrapper = styled.div`
  margin-top: 237px;
  border-radius: 15px;
  padding: 0 16px 64px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-darkBlue);
`;

const Picture = styled.picture`
  margin-top: -181px;
`;

const Image = styled.img`
  width: 252px;
`;

const CurvedLine = styled.img`
  margin-top: 40px;
  width: 50px;
`;

const H2 = styled.h2`
  margin-top: 37px;
  display: inline;
  font: var(--font-h2-mobile);
  color: var(--color-cream);
`;

const H2B = styled.p`
  font: var(--font-h2-mobile);
  font-weight: var(--font-weight-bold);
  display: inline;
`;

const Quote = styled.p`
  margin-top: 40px;
  font: var(--font-quote-mobile);
  color: var(--color-cream);
  text-align: center;
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
