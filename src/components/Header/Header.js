import React from "react";
import { styled } from "styled-components";
import Button from "../Button/Button";

function Header() {
  return (
    <HeaderWrapper>
      <HeaderButton>
        Request Beta Access
      </HeaderButton>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  padding: 24px 16px 0 16px;

`;

const HeaderButton = styled(Button)`
  width: 182px;
  height: 48px;
  border: 1px solid var(--color-darkBlue);
  background-color: white;
  color: var(--color-darkBlue);
  text-align: center;
  font: var(--font-button-header-mobile);

  &:hover {
    background-color: var(--color-darkBlue);
    color: var(--color-white)
  }
`;
export default Header;
