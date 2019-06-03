import React, { Component } from "react";
import styled from "styled-components";
import Marquee from "react-marquee";

import { Container } from "../../Styles";

export class Footer extends Component {
  render() {
    return (
      <Container>
        <Line />
        <OtherLine />
        <Line />
        {/* <Marquee text="Be There or Be Square" /> */}
      </Container>
    );
  }
}

const Line = styled.hr`
  border: none;
  border-top: 7px solid black;
  padding: 10px 0;
`;

const OtherLine = styled.hr`
  border: none;
  border-top: 100px solid black;
`;

export default Footer;
