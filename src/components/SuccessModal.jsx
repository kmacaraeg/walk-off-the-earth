import React, { Component } from 'react';
import styled from 'styled-components';


const Wrapper = styled.section`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    text-align:center;
    background:rgba(0,0,0,.8); 
`;

const Title = styled.h1`
    font-size:3rem;
    line-height:140%;
    text-align:center;
    color:white;
`;

const SubTitle = styled.h3`
    font-size:1.2rem;
    line-height:140%;
    text-align:center;
    color:white;
    width:90%;
    max-width:360px;
`;


class SuccessModal extends Component{
    render(){ 
        return(
            <Wrapper>
                <Title>You did it!</Title>
                <SubTitle>You've solved {this.state.currentGame}!</SubTitle>
            </Wrapper>
        )
    }
}


export default SuccessModal