import React, { Component } from 'react';
import styled from 'styled-components';
import { render } from "react-dom";

import CanvasDraw from "react-canvas-draw";
import classNames from "./drawing.css";

const DrawingWrapper = styled.div`

    display: flex;
    flex-direction: row-reverse;
    justify-content: left;

    #toolbox {
        padding: 20px
    }

    input {
        margin-left: 10px
    }

    .toolchunk {
        margin-bottom: 10px;
    }
    
    .colorTools{
        margin:16px 0px;
        width:100%;
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:center;
    }

    .colorSelector{
        width:20%;
        height:20px;
        color:red;
        border:3px solid rgba(0,0,0,0);
    }

    #color1{
        background:#583539;
    }
    #color2{
        background:#B486BC;
    }
    #color3{
        background:#FDB714;
    }
    #color4{
        background:#88CCA4;
    }
    #color5{
        background:#E25085;
    }


    button {
        border-radius: 30px;
        border: none;
        background: ${props=>props.theme.yellow};
        color: yellow;
        padding:10px 20px;
        margin:8px 4px;
        text-transform: uppercase;
        &:hover {
            background: ${props=>props.theme.brown};
        }
    }
`

function hexToRGB(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
}

// hexToRGB('#FF0000', 0.5);

class CanvasDraw2 extends Component {
  
    constructor(props){
        super(props);
      };
  
    state = {
    color: "#ffc60080",
    // width: 100,
    // height: 100,
    brushRadius: 10,
    lazyRadius: 12,

    theme: {
        brown: "#583539",
        purple: "#B486BC",
        yellow: "#FDB714",
        green: "#88CCA4",
        pink: "#E25085"
      }
  };
  componentDidMount() {
    // let's change the color randomly every 2 seconds. fun!
    // window.setInterval(() => {
    //   this.setState({
    //     color: "#" + Math.floor(Math.random() * 16777215).toString(16)
    //   });
    // }, 2000);

    console.log("image source " + this.props.imgSrc)
  }

    changeColor = (color) =>{
        color = hexToRGB(color, 0.5) 
        this.setState( {color : color})
    }

  render() {
    return (
      <DrawingWrapper theme={this.state.theme}>

          <div id="toolbox" className={classNames.tools}>
           
            {/* <div className="toolchunk">
              <label>Width:</label>
              <input
                type="number"
                value={this.state.width}
                onChange={e =>
                  this.setState({ width: parseInt(e.target.value, 10) })
                }
              />
            </div>
            <div className="toolchunk">
              <label>Height:</label>
              <input
                type="number"
                value={this.state.height}
                onChange={e =>
                  this.setState({ height: parseInt(e.target.value, 10) })
                }
              />
            </div> */}
            <div className="toolchunk">
              <label>Brush-Radius:</label>
              <input
                type="number"
                value={this.state.brushRadius}
                onChange={e =>
                  this.setState({ brushRadius: parseInt(e.target.value, 10) })
                }
              />
            </div>
            {/* <div className="toolchunk">
              <label>Lazy-Radius:</label>
              <input
                type="number"
                value={this.state.lazyRadius}
                onChange={e =>
                  this.setState({ lazyRadius: parseInt(e.target.value, 10) })
                }
              />
            </div> */}

            <div className="colorTools">
                <div onClick={(e)=>{e.preventDefault(); this.changeColor(this.state.theme.brown)}}   className="colorSelector" id="color1"></div>
                <div onClick={(e)=>{e.preventDefault(); this.changeColor(this.state.theme.purple)}}     className="colorSelector" id="color2"></div>
                <div onClick={(e)=>{e.preventDefault(); this.changeColor(this.state.theme.yellow)}}    className="colorSelector" id="color3"></div>
                <div onClick={(e)=>{e.preventDefault(); this.changeColor(this.state.theme.green)}}    className="colorSelector" id="color4"></div>
                <div onClick={(e)=>{e.preventDefault(); this.changeColor(this.state.theme.pink)}}    className="colorSelector" id="color5"></div>
            </div>
            {/* <button
              onClick={() => {
                // console.log("hi")
                console.log()
                // let dataURL = exportCanvas.toDataURL();
                // console.log(dataURL)
                localStorage.setItem(
                  "savedDrawing",
                  this.saveableCanvas.getSaveData()
                );
              }}
            >
              Save
            </button> */}
            <button
              onClick={() => {
                this.saveableCanvas.clear();
              }}
            >
              Clear
            </button>
            <button
              onClick={() => {
                this.saveableCanvas.undo();
              }}
            >
              Undo
            </button>
          </div>
          
          <CanvasDraw
            id="exportCanvas"
            ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
            brushColor={this.state.color}
            brushRadius={this.state.brushRadius}
            imgSrc= {this.props.imgSrc}
            lazyRadius={this.state.lazyRadius}
            canvasWidth={800}
            canvasHeight={600}
          />
      </DrawingWrapper>
        );
  }
}

CanvasDraw2.propTypes = {
    imgSrc: React.propTypes
}

export default CanvasDraw2