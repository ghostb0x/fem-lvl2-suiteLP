import React from "react";
import { styled } from "styled-components";
import Button from "../Button/Button";

function Header() {
  return (
    <HeaderWrapper>
      <Logo src='./assets/logo.svg' alt='Suite - Click to go home'/>
      <HeaderButton>
        Request Beta Access
      </HeaderButton>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  padding: 24px 16px 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

`;

const Logo = styled.img`
  
`;

const HeaderButton = styled(Button)`
  width: 182px;
  height: 48px;
  border: 1px solid var(--color-darkBlue);
  background-color: white;
  color: var(--color-darkBlue);
  font: var(--font-button-header-mobile);

  &:hover {
    background-color: var(--color-darkBlue);
    color: var(--color-white)
  }
`;
export default Header;
