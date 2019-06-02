import React, { Component } from "react";

import { Container } from "../Styles";
import Header from "../components/Sections/Header";
// import One from "../components/Sections/One";
// import Two from "../components/Sections/Two";
// import Three from "../components/Sections/Three";
// import Footer from "../components/Sections/Footer";

export class Home extends Component {
  render() {
    return (
      <Container height="100%" p={10}>
        <Header />
        {/* <One />
        <Two />
        <Three />
        <Footer /> */}
      </Container>
    );
  }
}

export default Home;
