import React, { Component } from 'react';
import styled from 'styled-components';
import SlidingTilePuzzle from 'react-sliding-tile-puzzle';
import tourStops from './data/tourStops.jsx';
import Iframe from 'react-iframe';

import '../App.css';

const MobileWrapper = styled.div`

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    top:0;
    left:0;
    width:100%;
    height:100%;
    min-height:100vh;
    background:url('img/background.jpg');
    background-position:center center;
    background-attachment:fixed;
    background-size:cover;
    padding:50px 10px;
    text-align:center;  
  
    // h1, p{
    //   // max-width:480px;
    //   width:90%;
    //   // margin:16px 0px;
    // }

    h1{
      font-size:2.4rem;
      color:#E25085;
    }

    p{
      line-height:140%;
      max-width: 250px;
      text-align: left;

    }

    .tourStopMobile {
        text-align: center;
        
    }

    .tourStopMobile, .musicMobile, .merchMobile{
      margin:16px 0px;
    }

    .musicMobile iframe{
      width:90vw;
      max-width:90vw;
      height:360px;
    }

    .gamesText {

    }

    @media (min-width: 1200px) {
      display: none;
    }

    .mobileChunk {
      margin-bottom: 50px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background: white;
      padding: 20px 20px 24px;
      width: 100%;
      align-items: center;
      box-sizing: border-box;
    }

`


const MapListItem = styled.div`

  // background-color: gray;
  min-height: 40px;
  padding: 0 20px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  color: #583539;
  background-color: white;
  border: 1px solid lightgray;
  margin: 3px 0;

  p {
    text-align: left;
  }

  &:active .date {
    background-color:#E25085;
  }

  .date {
    background-color:#E25085;
    color: #583539;
    padding: 10px 10px;
    width: 50px;
    display: flex;
    justify-content: center;
    margin-right: 24px;
    font-weight: bold;
    letter-spacing: 1px;
    // border-top-left-radius: 20px;
  }

  &:hover {
    background-color:#FDB714;
  }

  &:hover .date {
    background-color: #FDB714;
  }

  .mapInfo{
    display: flex;
    align-items: center;
    span {
      margin-right: 20px;
    }

  }

  .cityName {
    font-weight: bold;
  }

  .listItemWrap {
    display: flex;
    align-items: center;
    border-radius: 5px;
  }

  .venue {
    font-size: 10px;
    font-style: italic;
  }

  a {
    color:#E25085;
  }

  h1 {
    margin-bottom: 0;
  }


`

const WOTELogo = styled.div`

  background-image: url(img/logo.png);
  height: 100px;
  width: 250px;
  background-size: contain;
  background-repeat: no-repeat;
  margin-bottom: 40px;

`

const MobileSite = () => {
  return (
    <MobileWrapper>

      <WOTELogo />
      <div className="mobileChunk">
        <h1>Here We Go!</h1>
        <p className="instructions">We're on tour 🌎! Visit our desktop site for more fun, games and something special!</p>
      </div>

      <div className="mobileChunk">
        <h1>Games</h1>        <p className="gamesText">Visit out desktop site for full experience</p>
        <SlidingTilePuzzle
          maxIterations={300}
          image={"img/Waldo_OG.jpg"}
          size={300}
        />

      </div>

      <div className="mobileChunk">
        <h1>Tour</h1>
        <div className="tourStopMobile">

          {tourStops && tourStops.map((x, i) => (
            <MapListItem>
              <div className="listItemWrap">
                <div className="date">
                  <span className="date1">{x.date1}</span>/<span className="date1">{x.date2}</span>
                </div>
                <div className="mapInfo" data-tip="Play Game" >
                  <span className="cityName">{x.city} </span>
                  <span className="venue">{x.venue} </span>
                </div>
              </div>
              <a href="#">Buy Tickets</a>
            </MapListItem>
          ))
          }
        </div>
      </div>


      <div className="musicMobile">
        <h1>Music</h1>
        <Iframe className="iframe" url="https://open.spotify.com/embed/album/02TmceYFis4XKcjCZ86eBP" border="none"></Iframe>
      </div>

      <div className="merchMobile"></div>
      <h1>Visit our store for Official Tour Merch!</h1>
      <a href="https://walkofftheearth.myshopify.com/"><img src="img/merchMobile.png" width="90%"></img></a>
    </MobileWrapper>

  )
}
export default MobileSite