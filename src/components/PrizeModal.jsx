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
    z-index:10;
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

const DiscountLabel = styled.h4`
    font-size:1.4rem;
    line-height:140%;
    text-align:center;
    color:white;
    width:90%;
    max-width:360px;
`;

const DiscountCode = styled.p`
    font-size:1rem;
    line-height:140%;
    text-align:center;
    color:white;
    width:90%;
    max-width:360px;
`;

const CloseModal = styled.button`
    font-size:1rem;
    line-height:100%;
    padding:16px 24px;
    border:1px solid #fff;
    border-radius:2px;
    color:#fff;
    transition: all .3s;
`;

class PrizeModal extends Component{
    render(){ 
        return(
            <Wrapper>
                <Title>Complete!</Title>
                <SubTitle>You've completed all of the activities and earned a one time discount code for the tour merch!</SubTitle>
                {"\n"}
                <DiscountLabel>DISCOUNT CODE:</DiscountLabel>
                <DiscountCode>ABC123</DiscountCode>
                <CloseModal className="closeButton">close X</CloseModal>
            </Wrapper>
        )
    }
}


export default PrizeModal