import React, { Component } from 'react';
import styled from 'styled-components';
import Iframe from 'react-iframe';
import tourStops from './data/tourStops.jsx';
import Iframe from 'react-iframe';


const MenuDiv = styled.div`

display: ${props => (props.open === true) ? "flex" : "none"};
position: fixed;
width: 100vw;
height: 100vh;
background-color: rgba(0,0,0,.6);
align-items: center;
z-index: 800;
flex-direction: column;
overflow: scroll;
padding: 200px 0;

h2 {
  width: 100%;
  text-align: center;
  color: white;
}

.iframe {
  border: none;
}

.menuWrap {
  display: flex;
}

.menuItem {
  padding: 20px
}

.menu-container {
  padding: 20px;
}

.merch {
padding: 40px;
  height: 200px;
width: 400px;
background-color: white;
}

`

const MapListItem = styled.div`

  // background-color: gray;
  width: 480px;
  min-height: 40px;
  padding: 0 20px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  color: white;

  &:active .date {
    background-color: ${props => props.theme.pink};
  }

  .date {
    background-color: ${props => props.theme.pink};
    color: white;
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
    background-color: ${props => props.theme.yellow};
  }

  &:hover .date {
    background-color: ${props => props.theme.yellow};
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
    color: white;
  }

`

const Menu = () =>{
    return(
        <MenuDiv>
            <div className="menu-container">
            <h2>Tour</h2>
            {/* <a href="https://www.bandsintown.com/a/158776-walk-off-the-earth?came_from=242">Tour!</a> */}
            {tourStops && tourStops.map((x, i) => (
                <MapListItem>
                <div className="listItemWrap">
                    <div className="date">
                    <span className="date1">{x.date1}</span>/<span className="date1">{x.date2}</span>
                    </div>
                    <div className="mapInfo" data-tip="Play Game">
                    <span className="cityName">{x.city} </span>
                    <span className="venue">{x.venue} </span>
                    </div>
                </div>
                <a href="#">Buy Tickets</a>
                {/* {this.renderMapListBadge(x.game)} */}
                </MapListItem>
            ))
            }
            </div>
            <div className="menu-container">
            <h2>Music</h2>
            <Iframe className="iframe" url="https://open.spotify.com/embed/album/02TmceYFis4XKcjCZ86eBP" width="500px" height="400px" border="none"></Iframe>
            </div>
            <div className="menu-container">
            <h2>Merch</h2>
            <div className="merch" >
                <a href="https://walkofftheearth.myshopify.com/">Shop</a>
            </div>
            </div>
        </MenuDiv>
    )
}

export default Menu