import React, { Component } from "react";
import styled from "styled-components";
import { Button } from "rebass";

import { Container } from "../../Styles";
import Burst from "../img/Burst";
import Circle from "../img/Circle";
import Arrow from "../img/Arrow";

export class Three extends Component {
  render() {
    return (
      <Container
        display="flex"
        flexDirection="row"
        alignItems="flex-start"
        justifyContent="space-evenly"
      >
        <Container>
          <Burst />
          <StyledButton>
            <p>Mon - Fri</p>
            <p>10 AM - 5 PM</p>
          </StyledButton>
        </Container>
        <Container>
          <Circle />
        </Container>
        <Container>
          <Arrow />
          <Arrow />
          <Arrow />
          <Arrow />
        </Container>
      </Container>
    );
  }
}

const StyledButton = styled(Button)`
  color: black;
  background-color: transparent;
  border: 0px solid black;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Three;
