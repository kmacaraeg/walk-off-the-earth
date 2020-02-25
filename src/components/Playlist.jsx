import React, { Component } from 'react';
import styled from 'styled-components';
import Iframe from 'react-iframe';


const Playlist = styled.section`
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


class Playlist extends Component{
    render(){
        return(
            <Playlist>
                <h1>PLAYLIST</h1>
                <h3>LISTEN WHILE YOU WORK</h3>
                <Iframe url="https://open.spotify.com/embed/album/02TmceYFis4XKcjCZ86eBP"
                    width="100%"
                    height="100%"
                    className="spotifyPlaylist"
                    display="initial"
                    position="relative"
                    frameBorder="0" />
                {/* <iframe className="spotifyPlaylist" src="https://open.spotify.com/embed/album/02TmceYFis4XKcjCZ86eBP"  frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> */}
            </Playlist>
        )
    }
};

export default Playlist