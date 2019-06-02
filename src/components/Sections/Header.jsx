import React, { Component } from "react";
import { Container } from "../../Styles";
import styled from "styled-components";

import superRetro from "../../assets/fonts/superRetro.ttf";

export class Header extends Component {
  render() {
    return (
      <Container display="flex" flexDirection="column" alignItems="center">
        <Pressed>PRESSED FOR</Pressed>
        <Container>
          <Space>SPACE</Space>
          {/* <Space>SPACE</Space>
          <Space>SPACE</Space> */}
        </Container>
      </Container>
    );
  }
}

const Pressed = styled.div`
  @font-face {
    font-family: "superRetro";
    src: url(${superRetro}) format("truetype");
  }

  font-family: "superRetro";
  font-size: 10.5rem;

  @supports (
      (-webkit-text-stroke-color: black) and (-webkit-text-fill-color: white)
    )
    or ((-moz-text-stroke-color: black) and (-moz-text-fill-color: white)) {
    -moz-text-fill-color: white;
    -webkit-text-fill-color: white;
    -moz-text-stroke-color: black;
    -webkit-text-stroke-color: black;
    -moz-text-stroke-width: 4px;
    -webkit-text-stroke-width: 4px;
  }
`;

const Space = styled.div`
  @font-face {
    font-family: "superRetro";
    src: url(${superRetro}) format("truetype");
  }

  /* position: absolute; */

  font-family: "superRetro";
  font-size: 22rem;

  @supports (
      (-webkit-text-stroke-color: black) and (-webkit-text-fill-color: #eae536)
    )
    or ((-moz-text-stroke-color: black) and (-moz-text-fill-color: #eae536)) {
    -moz-text-fill-color: #eae536;
    -webkit-text-fill-color: #eae536;
    -moz-text-stroke-color: black;
    -webkit-text-stroke-color: black;
    -moz-text-stroke-width: 4px;
    -webkit-text-stroke-width: 4px;
  }
`;

export default Header;
