import React, { Component } from "react";
import styled from "styled-components";
import { Button } from "rebass";

import { Container } from "../../Styles";
import Hand from "../img/Hand";

export class Two extends Component {
  render() {
    return (
      <Container
        display="flex"
        flexDirection="row"
        alignItems="flex-start"
        justifyContent="space-evenly"
        p="5rem"
      >
        <Hand />
        <StyledButton borderRadius="40px">
          <span>FREE</span>
          <span>FREE</span>
          <span>FREE</span>
          <span>FREE</span>
        </StyledButton>
        <StyledButton borderRadius="40px">
          <p>OPENING RECEPTION</p>
          <p>JUNE 6, 2019</p>
          <span>10 AM-5 PM</span>
          <span>BROAD ART</span>
          <span>CENTER</span>
        </StyledButton>
      </Container>
    );
  }
}

const StyledButton = styled(Button)`
  color: black;
  background-color: transparent;
  border: 7px solid black;
  font-size: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-style: italic;
    font-size: 6rem;
  }
  span:nth-child(2) {
    text-align: justify;
  }

  :hover {
    background-color: #6ebe45;
    color: white;
  }
`;

export default Two;
