import React from 'react';
import { styled } from 'styled-components';
import { QUERIES } from '../../constants';

function Footer() {
  return (
    <FooterWrapper>
      <Logo
        src="./assets/logo.svg"
        alt=""
      />
      <Span>Copyright - Suite</Span>
      <Socials>
        <TapTarget href="facebook.com">
          <Icon
            src="./assets/icon-facebook.svg"
            alt="Facebook - Visit our Facebook account page"
          />
        </TapTarget>
        <TapTarget href="twitter.com">
          <Icon
            src="./assets/icon-twitter.svg"
            alt="Twitter - Visit our Twitter account page"
          />
        </TapTarget>
        <TapTarget href="instagram.com">
          <Icon
            src="./assets/icon-instagram.svg"
            alt="Instagram - Visit our Instagram account page"
          />
        </TapTarget>
      </Socials>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  padding: 56px 0 80px 0;
  background-color: var(--color-cream);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 33px;

  @media ${QUERIES.tabletAndUp} {
    padding: 72px 40px;
    flex-direction: row;
    justify-content: space-between;
    
  }
`;

const Logo = styled.img`
  width: 81px;
`;

const Span = styled.span`
  color: var(--color-gray);
  font: var(--font-footer);
`;

const Socials = styled.div`
  display: flex;
  gap: 28px;
  align-items: center;
`;

const TapTarget = styled.a`
  position: relative;

  &::after {
    --click-target-minimum: 44px;
    --inset-by: min(
      0px,
      calc((100% - var(--click-target-minimum)) / 2)
    );

    content: '';
    position: absolute;
    top: var(--inset-by);
    left: var(--inset-by);
    right: var(--inset-by);
    bottom: var(--inset-by);
  }
`;
const Icon = styled.img`
  position: relative;
`;

export default Footer;
