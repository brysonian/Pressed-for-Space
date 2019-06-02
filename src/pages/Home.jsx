import React, { Component } from "react";

import { Container } from "../Styles";
import Header from "../components/Header";

import Hand from "../components/img/Hand.js";
import Burst from "../components/img/Burst.js";
import BigArrow from "../components/img/BigArrow.js";
import SmallArrow from "../components/img/SmallArrow.js";
import Space from "../components/img/Space.js";
import Circle from "../components/img/Circle.js";
import DesignMediaArts from "../components/img/DesignMediaArts.js";

export class Home extends Component {
  render() {
    return (
      <Container height="100%" p={10}>
        <Header />
      </Container>
    );
  }
}

export default Home;
