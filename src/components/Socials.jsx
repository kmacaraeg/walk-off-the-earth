import React, { Component } from 'react';
import styled from 'styled-components';
import fb from '../img/fb.svg';
import ig from '../img/ig.svg';
import tw from '../img/tw.svg';
import ap from '../img/ap.svg';
import sp from '../img/sp.svg';
import yt from '../img/yt.svg';
import home from '../img/home.svg';

const SocialLinks = styled.a`
    margin:0px 10px 0px 10px;
    color: ${props => props.theme.brown};
    display:inline-block;
    cursor:pointer;

    img {
        height: 25px;
    }
`;

const SocialMedia = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    position:fixed;
    bottom:0;
    right:0;
    padding:20px;

    svg {
        fill: ${props => props.theme.brown};
    }

`;

const Socials = () => {
    return(
        <SocialMedia>
            <SocialLinks className="socialLinks" href="https://www.facebook.com/walkofftheearth"><img src={fb}></img></SocialLinks>
            <SocialLinks className="socialLinks" href="http://instagram.com/walkofftheearth"><img src={ig}></img></SocialLinks>
            <SocialLinks className="socialLinks" href="https://twitter.com/WalkOffTheEarth"><img src={tw}></img></SocialLinks>
            <SocialLinks className="socialLinks" href="https://music.apple.com/us/artist/walk-off-the-earth/271356617"><img src={ap}></img></SocialLinks>
            <SocialLinks className="socialLinks" href="https://open.spotify.com/artist/6jEiUoyyJNPHzSR0Nib6HX"><img src={sp}></img></SocialLinks>
            <SocialLinks className="socialLinks" href="https://www.youtube.com/user/walkofftheearth"><img src={yt}></img></SocialLinks>
            <SocialLinks className="socialLinks" href="https://www.walkofftheearth.com/"><img src={home}></img></SocialLinks>
        </SocialMedia>
    )
}

export default Socials