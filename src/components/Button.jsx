import React from "react";
import styled from "styled-components";
import { Button } from "rebass";
import { fontSize } from "styled-system";

const StyledButton = styled(Button)`
  font-family: neue-haas-grotesk-display;
  padding: 3px 20px;
  margin: 0 20px;
  color: black;
  background-color: transparent;
  border: 1px solid #9e483f;
  outline: none;
  ${fontSize};

`;

export default Button;
