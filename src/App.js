import React, { Component } from 'react';
import styled from 'styled-components';
import Crossword from "react-crossword";
import Slider from "react-slider-game";
// import CanvasDraw from "react-canvas-draw";
import Drawing from "./components/Drawing.jsx";
import HamburgerMenu from "react-hamburger-menu";
import anime from 'animejs/lib/anime.es.js';

import CompareImgInput from "./components/CompareImgInput";

import tourStops from './components/data/tourStops.jsx';
import mapVector from './components/mapVector';

import crosswordLA from "./components/data/crosswordLA";
import crosswordDAL from "./components/data/crosswordDAL";

import Iframe from 'react-iframe';

import Socials from "./components/Socials";
import ReactTooltip from 'react-tooltip'

import PrizeModal from "./components/PrizeModal"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';


const Scoreboard = styled.div`

  padding: 20px;
  position: fixed;
  left: 0;
  bottom: 0;
  // background-color: lightblue;
  display: flex;

  // &:hover {
  //   .scoreboardBadge {
  //     margin-bottom: 20px;
  //   }

  // }

`
const Badge = styled.div`

  margin: 0 10px;
  height: 30px;
  width: 30px;
  background-image: ${props => "url(" + props.star + ")"};
  background-size: cover;


`

const GameContainer = styled.div`

  opacity 0;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 1200px;
  transform: translateY(100vh);
  box-shadow: 2px 10px 30px rgba(0,0,0,.5);

  z-index: 400;

`

const DynamicWrap = styled.div`

  display: flex;
  width: 100%;
  background-image: url(img/background.jpg);
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  align-items: center;
  background-size: cover;

`

const MapVectorWrap = styled.div`

  height: 100vh;
  width: 100vw;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  // padding: 700px;

  .state {
    transition: .2s ease;
    fill: ${props => props.theme.pink};
    stroke-width: 10px;
    stroke: ${props => props.theme.brown};
    &:hover {
      fill: ${props => props.theme.green};
    }
  }

  .city {
    transition: .2s ease;
    fill: ${props => props.theme.yellow};
    stroke-width: 10px;
    stroke: white;
    box-shadow: 10px 10px rgba(0,0,0,.5);
    &:hover {
      fill: ${props => props.theme.green};
      stroke:${props => props.theme.green};
      stroke-width: 150px;
      cursor: pointer;
    }
  }


`

const MapRender = styled.div`

  position: fixed;
  z-index: 5;
  width: 1000px;

`


const GameNavigator = styled.div`

  display: flex;
  padding: 10px 0;
  background-color: ${props => props.theme.pink};
  width: 100%;
  justify-content: center;
  border: 3px solid ${props => props.theme.pink};

  button {
    color: white;
    background-color: rgba(0,0,0,0);
    border: none;
    margin: 0 10px;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  border-radius: 20px 20px 0 0;

  h1 {
    color: white;
    padding: 0;
    margin: 0 30px;
  }
`

const Game = styled.div`

  height: 600px;
  display: flex;
  border: 3px solid ${props => props.theme.pink};
  width: 100%;
  overflow: hidden;
  
  .crossword__grid-background {
    fill: ${props => props.theme.brown};
  }

  .Layer_2 {
    box-shadow: 5px 10px rgba(0,0,0,.3);
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

  // &:hover {
  //   margin-top: 5px;
  // }

  &:active .date {
    background-color: ${props => props.theme.pink};
  }

  .date {
    background-color: ${props => props.theme.pink};
    color: white;
    padding: 30px 10px;
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
    flex-direction: column;
    
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


`

const Hamburger = styled.div`

  position: fixed;
  right: 40px;
  top: 40px;
  z-index: 100;

`

const RenderMapList = styled.div`

  overflow: scroll;

`

const TourStopList = styled.div`

  overflow: scroll;
  width: 400px;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0,0,0,.5);
  z-index; 400;

`

const GameRender = styled.div`

  // padding: 15px;
  background-color: white;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  display:flex;
  flex-direction: column;
  overflow: hidden;

  .compareImageInput {
    width: 400px;
  }

`

const GameWrap = styled.div`

  height: 100%;
  width: 100%;
  // background-color: red;

`

const MapListBadgeCrossword = styled.div`

  height: 20px;
  width: 20px;
  // background-color:  blue;
  background-image: url(img/crossword-01.png);
  background-size: contain;
  background-repeat: no-repeat;

`

const MapListBadgeColoring = styled.div`

  height: 20px;
  width: 20px;
  background-image: url(img/coloring-01.png);
  background-size: contain;
  background-repeat: no-repeat;

`
const MapListBadgeWaldo = styled.div`

  height: 20px;
  width: 20px;
  background-image: url(img/waldo-01.png);
  background-size: contain;
  background-repeat: no-repeat;

`
const MapListBadgePuzzle = styled.div`

  height: 20px;
  width: 20px;
  background-image: url(img/puzzle-01.png);
  background-size: contain;
  background-repeat: no-repeat;

`

const DrawingWrap = styled.div`

  height: 100%;
  width: 100%;
  background-image: ${props => props.coloringImage};
  background-size: cover;
`

const WOTELogo = styled.div`

  background-image: url(img/logo.png);
  position: fixed;
  top: 20px;
  left: 20px;
  height: 200px;
  width: 200px;
  background-size: contain;
  background-repeat: no-repeat;

`

const PrizeButton = styled.div`

  display: ${props => (props.gameState > 0) ? "flex" : "none"};
  position: fixed;
  justify-content: center;
  bottom: 0;
  padding: 20px;
  width: 400px;
  background-color: ${props => (props.modalShown === true) ? "white" : "#E25085"};
  color:  ${props => (props.modalShown === true) ? "#E25085" : "white"};
  border-radius: 20px 20px 0 0 ;
  text-align: center;
  font-weight: bold;
  animation-name: ${props => (props.modalShown === true) ? "none" : "jiggle"};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  @keyframes jiggle {
    0% {padding-bottom: 20px}
    10% {padding-bottom: 25px}
    20% {padding-bottom: 20px}
  }
  cursor: pointer;
  z-index: 600;

`

const Modal = styled.div`

  display: ${props => (props.modalShown === true) ? "flex" : "none"};
  postition: fixed;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0,0,0,.3);
  justify-content: center;
  align-items: center;
  z-index: 550;

`

const Menu = styled.div`

  display: ${props => (props.open === true) ? "flex" : "none"};
  postition: fixed;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0,0,0,.3);
  justify-content: center;
  align-items: center;
  z-index: 550;

  .menuWrap {
    display: flex;
  }

  .menuItem {
    padding: 20px
  }

`
const Intro = styled.div`

  z-index: 700;
  position: fixed;
  background: gray;
  height: 100vh;
  width: 100vw;
  display: ${props => (props.siteEntered === true) ? "flex" : "none"};
  justify-content: center;
  align-items: center;

  .introItemsWrap;

`

class App extends Component {

  state = {

    siteEntered: false,

    score: 0,

    completedCrosswords: 0,
    completedColoring: 0,
    completedPuzzle: 0,
    completedWaldo: 0,

    gameStart: true,
    gameCompleted: false,
    gameState: 0,

    currentGame: "home",
    currentCity: "no city",
    currentState: "no state",
    currentDate: "no date",
    currentData: "no data",
    currentData2: "no data2",

    theme: {
      brown: "#583539",
      purple: "#B486BC",
      yellow: "#FDB714",
      green: "#88CCA4",
      pink: "#E25085"
    },

    completedGames: []
  }

  componentDidMount = () => {

    this.anime1()

  }

  componentDidUpdate = () => {

    console.log("component did update // current game = " + this.state.currentGame)
    console.log("component did update // current data = " + this.state.currentData)
    console.log("data2 = " + this.state.currentData2)

    if (this.state.completedCrosswords > 0 && this.state.completedColoring > 0 && this.state.completedPuzzle > 0 && this.state.completedWaldo > 0 && this.state.gameState === 0) {
      this.setState({ gameState: 1 })
      // alert("win!")
    }

    if (this.state.open) {
      // alert("Test")
      return <Modal/>

    }


    // this.renderModal()
  }

  finishGame = () => {

    this.setState({ gameCompleted: true });

  }

  whichCrossword = (arg) => {
    switch (arg) {
      case "Los Angeles":
        return crosswordLA
      case "Dallas":
        return crosswordDAL
    }
  }

  changeGame = (game, city, state, date, data, data2) => {
    const newGame = game;
    const newCity = city;
    const newState = state;
    const newDate = date;
    const newData = data;
    const newData2 = data2;
    this.state.completedGames.push(newGame);
    this.setState({ currentGame: "none" });
    this.setState({ currentGame: newGame });
    this.setState({ currentCity: newCity });
    this.setState({ currentAction: newState });
    this.setState({ currentDate: newDate });
    this.setState({ currentData: newData });
    this.setState({ currentData2: newData2 });
    console.log("previous game " + this.state.currentGame);

    if (this.state.completedGames.includes(newCity)) {
      return
    } else {
      this.completeCurrentGame(newGame);
    }

  }

  completeCurrentGame = (arg) => {
    const expr = arg
    console.log("score added for " + expr)
    switch (expr) {
      case "crossword":
        this.setState({ completedCrosswords: (this.state.completedCrosswords + 1) })
        return;
      case "coloring":
        this.setState({ completedColoring: (this.state.completedColoring + 1) })
        return;
      case "puzzle":
        this.setState({ completedPuzzle: (this.state.completedPuzzle + 1) })
        return;
      case "waldo":
        this.setState({ completedWaldo: (this.state.completedWaldo + 1) })
        return;
    }
  }

  showHome() {
    var tl = anime.timeline({
      easing: "spring(1, 80, 10, 0)",
      duration: 300,
      complete: function(anim) {
        // document.getElementByClass("game-container").style.display = "none";
      }
    });

    tl.add({
      targets: ".game-container",
      opacity: "0",
      translateY: "100vh"
    }).add({
      
    })
  }

  showGame() {
    var tl = anime.timeline({
      easing: 'easeOutCirc',
      duration: 600,
    });

    tl.add({
      targets: ".game-container",
      opacity: "1",
      translateY: "0",
    })
  }

  renderGame = (arg, data) => {
    const expr = arg

    if (expr == "home") {
      return this.showHome()
    } else {
      this.showGame()
      switch (expr) {
        case "crossword":
          return <Crossword data={this.whichCrossword(this.state.currentCity)} />;
        case "coloring":
          return <DrawingWrap >
                  <Drawing imgSrc={"./img/" + this.state.currentData} canvasWidth={80 + `%`} canvasHeight={100 + `%`} />
                </DrawingWrap>
        case "puzzle":
          return <Slider size={3} />;
        case "waldo":
          return <CompareImgInput className="compareImageInput" data={this.state.currentData} rightImage={this.state.currentData2} />
      }
    }

  }

  renderMapListBadge = (arg) => {
    const expr = arg
    switch (expr) {
      case "crossword":
        return <MapListBadgeCrossword type={expr} count={this.state.completedCrosswords} />;
      case "coloring":
        return <MapListBadgeColoring type={expr} count={this.state.completedColoring} />;
      case "puzzle":
        return <MapListBadgePuzzle type={expr} count={this.state.completedPuzzle} />;
      case "waldo":
        return <MapListBadgeWaldo type={expr} count={this.state.completedWaldo} />;
    }
  }

  menuHandleClick() {
    this.setState({
      open: !this.state.open
    });
  }

  renderCompletionStatus(game, count) {

    const expr = game
    if (count > 2) {
      return "'img/" + expr + "-0" + "3" + ".png'"
    }

    let badgeString = "'img/" + expr + "-0" + count + ".png'"
    console.log(badgeString)
    return badgeString

  }

  anime1() {
    var tl = anime.timeline({
      easing: 'easeOutExpo',
      duration: 1000,
    });

    tl.add({
      // targets: ".game-container",
      // opacity: "1",
    }).add({
      targets: "#Layer_2 .city",
      delay: anime.stagger(100),
      opacity: "1",
      fill: "white"
    }, 200)
  }

  // renderModal(){
  //   if(this.state.modalShown === true) {
  //     alert("test")
  //     return <Modal/>
  //   }
  // }

  render() {

    return (
      <Router>
        <div>
        <ReactTooltip />

          <Modal modalShown={this.state.modalShown}>
            <PrizeModal />
          </Modal>
          <Menu open={this.state.open}>
            menu
          </Menu>
          <Intro siteEntered={this.state.siteEntered}>

          </Intro>

          <Switch>

            <Route exact path="/">

              <DynamicWrap>

                <WOTELogo />
                <Hamburger>
                  <Socials theme={this.state.theme} />
                  <HamburgerMenu
                    className="hamburger"
                    isOpen={this.state.open}
                    menuClicked={this.menuHandleClick.bind(this)}
                    width={18}
                    height={15}
                    strokeWidth={1}
                    rotate={0}
                    color='black'
                    borderRadius={0}
                    animationDuration={0.2}
                  />
                </Hamburger>

                <PrizeButton modalShown={this.state.modalShown} gameState={this.state.gameState} theme={this.state.theme} onClick={() => { this.setState({ modalShown: !this.state.modalShown }) }}>
                  {this.state.modalShown ? "RETURN TO GAMES" : "CLAIM YOUR PRIZE"}
                </PrizeButton>

                <Scoreboard>

                  <Badge className="scoreboardBadge" star={this.renderCompletionStatus("crossword", this.state.completedCrosswords)}></Badge>
                  <Badge className="scoreboardBadge" star={this.renderCompletionStatus("coloring", this.state.completedColoring)}></Badge>
                  <Badge className="scoreboardBadge" star={this.renderCompletionStatus("puzzle", this.state.completedPuzzle)}></Badge>
                  <Badge className="scoreboardBadge" star={this.renderCompletionStatus("waldo", this.state.completedWaldo)}></Badge>

                </Scoreboard>

                <MapVectorWrap theme={this.state.theme}>
                  <MapRender>
                    {mapVector(this.changeGame)}
                  </MapRender>
                </MapVectorWrap>

                <GameContainer className="game-container" show={this.state.currentGame}>
                  <GameNavigator theme={this.state.theme}>
                    <h1>{this.state.currentCity}</h1>
                    <button onClick={() => { this.setState({ currentGame: "home"}) }}>Home</button>
                    <button>Tour Dates</button>
                  </GameNavigator>
                  <Game theme={this.state.theme}>
                    {/* <TourStopList>
                      <RenderMapList>
                        {tourStops && tourStops.map((x, i) => (
                          <MapListItem theme={this.state.theme} onClick={
                            this.changeGame.bind(this, x.game, x.city, x.state, x.date, x.data, x.data2, x.title, x.instructions, x.venue)
                          } >
                            <div className="listItemWrap">
                              <div className="date">
                                <span className="date1">{x.date1}</span>/<span className="date1">{x.date2}</span>
                              </div>
                              <div className="mapInfo">
                                <span className="cityName">{x.city} </span>
                                <span className="venue">{x.venue} </span>
                              </div>
                            </div>
                            {this.renderMapListBadge(x.game)}
                          </MapListItem>
                        ))
                        }
                      </RenderMapList>
                    </TourStopList> */}
                    <GameRender currentGame={this.state.currentGame}>
                      {/* <h1>{this.state.currentCity}</h1>
                      <h2>{this.state.currentVenue}</h2> */}
                      <GameWrap>
                        {this.renderGame(this.state.currentGame)}
                      </GameWrap>
                    </GameRender>
                  </Game>
                </GameContainer>

              </DynamicWrap>

            </Route>

            <Route path="/map">
              <CompareImgInput data={this.state.currentData} />
            </Route>
            <Route path="/*">
            </Route>
          </Switch>

        </div>


      </Router>
    )
  }
}

export default App;