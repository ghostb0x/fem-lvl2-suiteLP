import React from 'react';
import { styled } from 'styled-components';
import Button from '../Button/Button';
import { QUERIES } from '../../constants';

function Header() {
  return (
    <HeaderWrapper>
      <Logo
        src="./assets/logo.svg"
        alt="Suite - Click to go home"
      />
      <HeaderButton>Request Beta Access</HeaderButton>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  padding: 24px 16px 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${QUERIES.tabletAndUp} {
    padding: 40px 40px 0px 40px;
  }
`;

const Logo = styled.img``;

const HeaderButton = styled(Button)`
  width: 182px;
  height: 48px;
  border: 1px solid var(--color-darkBlue);
  color: var(--color-darkBlue);
  font: var(--font-button-header-mobile);

  &:hover {
    background-color: var(--color-darkBlue);
    color: var(--color-white);
  }

  @media ${QUERIES.tabletAndUp} {
    font: var(--font-button-header-tablet);
    width: 219px;
    height: 56px;
  }
`;
export default Header;
