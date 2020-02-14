import React, { Component } from 'react';
import styled from 'styled-components';
import Crossword from "react-crossword";
import Slider from "react-slider-game";
import ReactCompareImage from 'react-compare-image';
import tourStops from './components/data/tourStops.jsx';
// import MemoryGame from "react-memory-game";
import mapVector from './components/mapVector';
import MemoryGame from "./components/memoryGame";
// import Drawing, { brushCustom } from 'react-drawing';
import CanvasDraw from "react-canvas-draw";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

const Scoreboard = styled.div`

  padding: 40px;
  position: fixed;
  left: 0;
  bottom: 0;
  // background-color: lightblue;
  display: flex;

`
const Badge = styled.div`

  padding: 20px;
  // background-color: ${props => props.color || "red"}

`

const MapContainer = styled.div`

  background-image: url(img/background.jpg);
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;


`

const Map = styled.div`

  // background-color: orange;
  // border: 1px solid red;
  height: 600px;
  width: 1200px;
  display: flex;

`

const MapListItem = styled.div`

  // background-color: gray;
  min-height: 40px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;


`

const RenderMapList = styled.div`

  overflow: scroll;

`

const TourStopList = styled.div`

  overflow: scroll;
  width: 400px;
  background-color: white;
  padding-left: 10px;

`

const MapRender = styled.div`

  padding: 15px;
  background-color: ${props => props.gameColor};
  height: 100$;
  width: 100%;
  align-items: center;
  justify-content: center;
  display:flex;
  flex-direction: column;

`

// const CompleteGameButton = styled.div`

//   display: ${props => (props.currentGame == "home" ? "none" : "block")};
//   margin: 20px;
//   padding: 20px;
//   background-color: white;

// `

const GameWrap = styled.div`

  height: 100%;
  width: 100%;
  // background-color: red;

`

const MapListBadgeCrossword = styled.div`

  height: 40px;
  width: 40px;
  background-color:  blue;

`

const MapListBadgeColoring = styled.div`

  height: 40px;
  width: 40px;
  background-color:  orange;

`
const MapListBadgeMemory = styled.div`

  height: 40px;
  width: 40px;
  background-color:  yellow;

`
const MapListBadgeCompare = styled.div`

  height: 40px;
  width: 40px;
  background-color:  pink;

`
const MapListBadgeSlider = styled.div`

  height: 40px;
  width: 40px;
  background-color:  gray;

`

const DrawingWrap = styled.div`

  height: 500px;
  width: 500px;
  // background-color: white;
  background-image: ${props => props.coloringImage}
`

const CompareWrap = styled.div`

  height: 500px;
  width: 500px;

`

// const Wrap = styled.div`
//   font-size: 120px;
// `;

// const GameContainer = styled.div`

//   display: flex;

//   `

// const PanelContainer = styled.div`
//   width: 200px;
//   order: -1;
// `;

// const BoardContainer = styled.div`
//   flex: 1;
// `;

class App extends Component {

  state = {
    score: 0,

    completedCrosswords: 0,
    completedColoring: 0,
    completedMemory: 0,
    completedPuzzle: 0,
    completedWaldo: 0,

    gameStart: true,
    gameCompleted: false,

    currentGame: "home",
    currentCity: "no city",
    currentState: "no state",
    currentDate: "no date",
    currentDate: "no data",
  }

  componentDidMount = () => {



  }

  componentDidUpdate = () => {
    // console.log(this.state.currentGame)

    // check badges
    // if badges are complete
    // Change gameCompleted
    // GivePrize

    // if (this.state.completedColoring > 0 && this.state.completedCrosswords > 0 && this.state.completedWaldo > 0 && this.state.completedPuzzle > 0) {
    //   alert("congratulations!")
    // }
    console.log("component did update // current game = " + this.state.currentGame)

  }

  finishGame = () => {
    this.setState({ gameCompleted: true });
  }

  changeGame = (game, city, state, date, data) => {
    const newGame = game;
    const newCity = city;
    const newState = state;
    const newDate = date;
    const newData = data;
    this.setState({ currentGame: newGame });
    this.setState({ currentCity: newCity });
    this.setState({ currentAction: newState });
    this.setState({ currentDate: newDate });
    this.setState({ currentData: newData });
    console.log("previous game " + this.state.currentGame);
    this.completeCurrentGame(newGame)
  }

  gameColor = (arg) => {

    const expr = arg
    switch (expr) {
      case "crossword":
        return "blue";
        break;
      case "coloring":
        return "orange";
        break;
      case "memory":
        return "yellow";
        break;
      case "compare":
        return "pink";
        break;
      case "slider":
        return "gray";
        break;
      case "home":
        return "lightblue";
        break;
    }
  }

  completeCurrentGame = (arg) => {
    const expr = arg
    console.log("score added for " + expr)
    switch (expr) {
      case "crossword":
        // this.setState({ currentGame: "home" });
        // this.setState({ currentCity: "no city" });
        this.setState({ completedCrosswords: (this.state.completedCrosswords + 1) })
        return;
        break;
      case "coloring":
        // this.setState({ currentGame: "home" });
        // this.setState({ currentCity: "no city" });
        this.setState({ completedColoring: (this.state.completedMemory + 1) })
        return;
        break;
      case "memory":
        // this.setState({ currentGame: "home" });
        // this.setState({ currentCity: "no city" });
        this.setState({ completedMemory: (this.state.completedMemory + 1) })
        return;
        break;
      case "compare":
        // this.setState({ currentGame: "home" });
        // this.setState({ currentCity: "no city" });
        this.setState({ completedWaldo: (this.state.completedWaldo + 1) })
        return;
        break;
      case "slider":
        // this.setState({ currentGame: "home" });
        // this.setState({ currentCity: "no city" });
        this.setState({ completedPuzzle: (this.state.completedPuzzle + 1) })
        return;
        break;
    }
  }

  renderGame = (arg, data) => {
    const expr = arg
    // console.log("complete current game " + expr)
    switch (expr) {
      case "home":
        return mapVector()
      case "crossword":
        return <Crossword data={this.state.currentData} />;
        break;
      // case "coloring":
      //   return <DrawingWrap coloringImage={"url(img/background.jpg);"}>
      //       <CanvasDraw />
      //   </DrawingWrap>
      //   break;
        case "coloring":
            return <DrawingWrap >
                <CanvasDraw  brushColor={"red"} imgSrc={"./img/background.jpg"}/>
                <button
            onClick={() => {
              localStorage.setItem(
                "savedDrawing",
                this.saveableCanvas.getSaveData()
              );
            }}
          >save</button>
            </DrawingWrap>
            break;
      case "memory":
        return <MemoryGame />;
        break;
      case "compare":
        return <CompareWrap><ReactCompareImage leftImage="./img/Waldo_1.jpg" rightImage="./img/Waldo_2.jpg" />
          </CompareWrap>
        break;
      case "slider":
        return <Slider size={2} />;
        break;
    }

  }

  renderMapListBadge = (arg) => {
    const expr = arg
    switch (expr) {
      case "crossword":
        return <MapListBadgeCrossword type={expr} />;
      case "coloring":
        return <MapListBadgeColoring type={expr} />;
      case "memory":
        return <MapListBadgeMemory type={expr} />;
      case "compare":
        return <MapListBadgeCompare type={expr} />;
      case "slider":
        return <MapListBadgeSlider type={expr} />;

    }
  }



  render() {

    return (
      <Router>
        <div>

          <Scoreboard>
            {/* <RenderBadges gameStatus={gameStatus} badges={this.state.badges} /> */}
            <Badge>{this.state.completedCrosswords}</Badge>
            <Badge>{this.state.completedColoring}</Badge>
            <Badge>{this.state.completedMemory}</Badge>
            <Badge>{this.state.completedWaldo}</Badge>
            <Badge>{this.state.completedPuzzle}</Badge>
          </Scoreboard>

          <Switch>

            <Route exact path="/">

              <MapContainer>

                <Map>

                  <TourStopList>
                    <RenderMapList>

                      {tourStops && tourStops.map((x, i) => (
                        <MapListItem soma onClick={
                          this.changeGame.bind(this, x.game, x.city, x.state, x.date, x.data)
                        }  >

                          <div>{x.city}. {x.date1} / {x.date2} - {x.game}
                          </div>
                          {this.renderMapListBadge(x.game)}

                        </MapListItem>
                      ))
                      }

                    </RenderMapList>
                  </TourStopList>

                  <MapRender currentGame={this.state.currentGame}>
                    <GameWrap>
                      {/* {this.state.currentCity} */}
                      {this.renderGame(this.state.currentGame)}

                    </GameWrap>
                    {/* <CompleteGameButton currentGame={this.state.currentGame} onClick={() => { this.completeCurrentGame(this.state.currentGame) }}>

                      complete game</CompleteGameButton> */}

                  </MapRender>

                </Map>

              </MapContainer>

            </Route>

            <Route path="/map">
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