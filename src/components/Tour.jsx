import React, { Component } from 'react';
import styled from 'styled-components';

const Tour = styled.section`
    width:100vw;
    height:100vh;
    position:fixed;
    top:0;
    left:0;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
    color:white;
    background:rgba(0,0,0,.9);
    z-index:10;
    padding:auto 0;
`;

class Tour extends Component{
    render(){
        return(
            <Tour>
                <h1>TOUR</h1>
            </Tour>
        )
    }
}

export default Tour