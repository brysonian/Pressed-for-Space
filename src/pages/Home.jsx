import React, { Component } from 'react'

import { Container } from "../Styles";
import Header from "../components/Header";

export class Home extends Component {
    render() {
        return (
            <Container height="100%">
                <Header />
            </Container>
        )
    }
}

export default Home
