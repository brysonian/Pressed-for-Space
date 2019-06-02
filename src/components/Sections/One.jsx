import React, { Component } from 'react'
import styled from "styled-components";
import { Button } from "rebass";

import { Container } from "../../Styles";
import DesignMediaArts from "../img/DesignMediaArts"

export class One extends Component {
    render() {
        return (
            <Container display="flex" flexDirection="row" alignItems="center">
                <DesignMediaArts />
                <StyledButton borderRadius="40px" ><span>UNDEGRADUATE</span><span>SENIOR SHOW</span></StyledButton>
            </Container>
        )
    }
}

const StyledButton = styled(Button)`
    color: black;
    background-color: transparent;
    border: 7px solid black;    
    font-size: 8rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    span:nth-child(2) {
        letter-spacing: 12.5px;
    }
`;

export default One
