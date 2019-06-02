import React, { Component } from "react";

import { Container, Text } from "../../Styles";

export class Header extends Component {
  render() {
    return (
      <Container
        fontFamily="superRetro"
        height="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Text fontSize={170}>
          <span>PRESSED FOR</span>
        </Text>
        <Text fontSize={320} letterSpacing={35}>
          <span className="yellow">SPACE</span>
        </Text>
      </Container>
    );
  }
}

export default Header;
