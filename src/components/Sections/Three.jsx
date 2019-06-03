import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

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
        </Container>
        <Container>
          <Logo />
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

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Logo = styled(Circle)`
  animation: ${rotate} infinite 20s linear;
  height: 25rem;
  width: 25rem;
  display: block;
  margin: auto;

  &:hover {
    animation-play-state: paused;
  }
`;

export default Three;
