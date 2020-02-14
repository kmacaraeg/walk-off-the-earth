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
      case "coloring":
        return "orange";
      case "memory":
        return "yellow";
      case "compare":
        return "pink";
      case "slider":
        return "gray";
      case "home":
        return "lightblue";
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
      case "coloring":
        // this.setState({ currentGame: "home" });
        // this.setState({ currentCity: "no city" });
        this.setState({ completedColoring: (this.state.completedMemory + 1) })
        return;
      case "memory":
        // this.setState({ currentGame: "home" });
        // this.setState({ currentCity: "no city" });
        this.setState({ completedMemory: (this.state.completedMemory + 1) })
        return;
      case "compare":
        // this.setState({ currentGame: "home" });
        // this.setState({ currentCity: "no city" });
        this.setState({ completedWaldo: (this.state.completedWaldo + 1) })
        return;
      case "slider":
        // this.setState({ currentGame: "home" });
        // this.setState({ currentCity: "no city" });
        this.setState({ completedPuzzle: (this.state.completedPuzzle + 1) })
        return;
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
      case "coloring":
        return <DrawingWrap >
          <CanvasDraw brushColor={"red"} imgSrc={this.state.data} />
          <button
            onClick={() => {
              localStorage.setItem(
                "savedDrawing",
                this.saveableCanvas.getSaveData()
              );
            }}
          >save</button>
        </DrawingWrap>
        case "memory":
          return;
        // return <MemoryGame />;
      case "compare":
        return <CompareWrap>
          <ReactCompareImage leftImage="./img/Waldo_1.jpg" rightImage="./img/Waldo_2.jpg" />
          {/* <CompareForm data={this.state.currentData}/> */}
        </CompareWrap>
      case "slider":
        return <Slider size={2} />;
    }

  }

  renderMapListBadge = (arg) => {
    const expr = arg
    switch (expr) {
      case "crossword":
        return <MapListBadgeCrossword type={expr} count={this.state.completedCrosswords}/>;
      case "coloring":
        return <MapListBadgeColoring type={expr} count={this.state.completedColoring}/>;
      case "memory":
        return <MapListBadgeMemory type={expr} count={this.state.completedMemory}/>;
      case "compare":
        return <MapListBadgeCompare type={expr} count={this.state.completedCompare}/>;
      case "slider":
        return <MapListBadgeSlider type={expr} count={this.state.completedSlider}/>;

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
                      {this.renderGame(this.state.currentGame)}
                    </GameWrap>
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