import React, { Component } from "react";

import { Container, Text } from "../Styles";

export class Header extends Component {
  render() {
    return (
      <Container
        fontFamily="superRetro"
        textAlign="center"
        height="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Text fontSize={150}>PRESSED FOR</Text>
        <Text fontSize={330}>SPACE</Text>
      </Container>
    );
  }
}

export default Header;
