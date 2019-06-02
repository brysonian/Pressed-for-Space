import React, { Component } from "react";
import Marquee from "react-marquee";

import { Container } from "../../Styles";

export class Footer extends Component {
  render() {
    return (
      <Container>
        <Marquee text="Be There or Be Square" loop="true" />
      </Container>
    );
  }
}

export default Footer;
