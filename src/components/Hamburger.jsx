import React, { Component } from 'react';
import styled from 'styled-components';

const Hamburger = styled.div`
    position:fixed;
    top:16px;
    left:16px;
    width:32px;
    height:32px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
`;

const TopPatty = styled.div`
    transform-origin:0% 0%;
`; 

const MiddlePatty = styled.div`
    transform-origin:0% 0%;
`; 

const BottomPatty = styled.div`
    transform-origin:0% 0%;
`; 


class Hamburger extends Component{
    render(){
        return(
            <Hamburger>
                <TopPatty className="patty"></TopPatty>
                <MiddlePatty className="patty"></MiddlePatty>
                <BottomPatty className="patty"></BottomPatty>
            </Hamburger>
        )
    }
}

export default Hamburger