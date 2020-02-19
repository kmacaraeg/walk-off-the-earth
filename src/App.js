import React, { Component } from 'react';
import styled from 'styled-components';
import Crossword from "react-crossword";
import Slider from "react-slider-game";
import tourStops from './components/data/tourStops.jsx';
// import MemoryGame from "react-memory-game";
import mapVector from './components/mapVector';
import MemoryGame from "./components/memoryGame";
// import Drawing, { brushCustom } from 'react-drawing';
import CanvasDraw from "react-canvas-draw";
import CompareImgInput from "./components/CompareImgInput";
import crosswordLA from "./components/data/crosswordLA"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { timingSafeEqual } from 'crypto';

const Scoreboard = styled.div`

  padding: 40px;
  position: fixed;
  left: 0;
  bottom: 0;
  // background-color: lightblue;
  display: flex;

`
const Badge = styled.div`

margin: 5px;
  height: 20px;
  width: 20px;
  background-image: ${props => "url(" + props.star + ")"};
  background-size: cover;

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

    modalShown: false
  }

  componentDidMount = () => {

  }

  componentDidUpdate = () => {

    console.log("component did update // current game = " + this.state.currentGame)
    console.log("component did update // current data = " + this.state.currentData)
    console.log("data2 = " + this.state.currentData2)

    if (this.state.completedCrosswords > 0 && this.state.completedColoring > 0 && this.state.completedPuzzle > 0 && this.state.completedWaldo > 0 && this.state.gameState === 0) {
      this.setState({gameState: 1})
    }

  }

  finishGame = () => {

    this.setState({ gameCompleted: true });

  }

  changeGame = (game, city, state, date, data, data2) => {
    console.log(data2)
    const newGame = game;
    const newCity = city;
    const newState = state;
    const newDate = date;
    const newData = data;
    const newData2 = data2;
    this.setState({ currentGame: newGame });
    this.setState({ currentCity: newCity });
    this.setState({ currentAction: newState });
    this.setState({ currentDate: newDate });
    this.setState({ currentData: newData });
    this.setState({ currentData2: newData2 });
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
      case "puzzle":
        return "pink";
      case "waldo":
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

  renderGame = (arg, data) => {
    const expr = arg
    switch (expr) {
      case "home":
        return mapVector()
      case "crossword":
        return <Crossword data={crosswordLA} />;
      case "coloring":
        return <DrawingWrap >
          <CanvasDraw brushColor={"red"} imgSrc={"./img/" + this.state.currentData} />
          <button
            onClick={() => {
              localStorage.setItem(
                "savedDrawing",
                this.saveableCanvas.getSaveData()
              );
            }}
          >save</button>
        </DrawingWrap>
      case "puzzle":
        return <Slider size={2} />;
        case "waldo":
          return <CompareImgInput className="compareImageInput" data={this.state.currentData} rightImage={this.state.currentData2}/>
    }

  }

  renderMapListBadge = (arg) => {
    const expr = arg
    switch (expr) {
      case "crossword":
        return <MapListBadgeCrossword type={expr} count={this.state.completedCrosswords}/>;
      case "coloring":
        return <MapListBadgeColoring type={expr} count={this.state.completedColoring}/>;
      case "puzzle":
        return <MapListBadgePuzzle type={expr} count={this.state.completedPuzzle}/>;
      case "waldo":
        return <MapListBadgeWaldo type={expr} count={this.state.completedWaldo}/>;
      }
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

  render() {

    return (
      <Router>
        <div>

          <Scoreboard>
            {/* <RenderBadges gameStatus={gameStatus} badges={this.state.badges} /> */}
          
            <Badge star={this.renderCompletionStatus("crossword", this.state.completedCrosswords)}></Badge>            

            <Badge star={this.renderCompletionStatus("coloring", this.state.completedColoring)}></Badge>            
            <Badge star={this.renderCompletionStatus("puzzle", this.state.completedPuzzle)}></Badge>            
            <Badge star={this.renderCompletionStatus("waldo", this.state.completedWaldo)}></Badge>            
          {this.state.gameState}
          </Scoreboard>

          <Switch>

            <Route exact path="/">

              <MapContainer>

                <Map>

                  <TourStopList>
                    <RenderMapList>

                      {tourStops && tourStops.map((x, i) => (
                        <MapListItem soma onClick={
                          this.changeGame.bind(this, x.game, x.city, x.state, x.date, x.data, x.data2)
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
                  {/* {this.state.currentData} */}
                    <GameWrap>
                      {this.renderGame(this.state.currentGame)}
                    </GameWrap>
                  </MapRender>

                </Map>

              </MapContainer>

            </Route>

            <Route path="/map">
            <CompareImgInput data={this.state.currentData}/>
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