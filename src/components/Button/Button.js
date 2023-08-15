import React from "react";
import { styled } from "styled-components";

function Button( {children, className}) {
  return (
    <ButtonWrapper className={className}>
      {children}
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.button`
  border-radius: 6px;
  text-align: center;
`;

export default Button;
