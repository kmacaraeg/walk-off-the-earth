import React, { Component } from 'react';
import styled from 'styled-components';


const MenuModal = styled.section`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    width:100vw;
    height:100vh;
    position:fixed;
    top:0;
    left:0;
    background:rgba(0,0,0,.9);
    z-index:10;


`;

const MenuDiv = styled.div`
    text-align:center;
    color:white;
    width:96%;
    padding:10px;
`;

const MenuLink = styled.a`
    color:white;
    font-size:2rem;
    line-height:100%;
    text-decoration:none;
`;

class MenuModal extends Component{
    render(){
        return(
            <MenuModal>
                <MenuDiv>HOME</MenuDiv>
                <MenuDiv>ACTIVITIES</MenuDiv>
                <MenuDiv>TOUR</MenuDiv>
                <MenuDiv>PLAYLIST</MenuDiv>
            </MenuModal>
        )
    }
}

export default MenuModal