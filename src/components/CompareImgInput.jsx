import React, { Component } from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
// import tourStops from './data/tourStops';
import ReactCompareImage from 'react-compare-image';

const CompareFrame = styled.div`

    display: flex;
    // padding: 50px;

`

const CompareWrapper = styled.div`

    width: 100%;



    .answers {

    }

`

const FormAnswers = styled.div`

    background-color: white;
    display: flex;
    padding:12px;
    flex-direction: column;

    p{
        width:90%;
        max-width:300px;
    }

    form {
        box-sizing: border-box;
        padding: 8px;
    }
    input {
        box-sizing: border-box;
        border: 2px solid ${props => props.theme.brown};
        width: 90%;
        max-width:300px;
        font-size: 20px;

        // background-color: ${props => props.theme.brown}
    }

    .answers {
        padding: 8px;
        color: green;

    }

`

class CompareImgInput extends Component {

    constructor(props){
        super(props);
        this.submitData = this.submitData.bind(this);

      };


    state = {
        value: 'init',
        answers: [],
        theme: {
            brown: "#583539",
            purple: "#B486BC",
            yellow: "#FDB714",
            green: "#88CCA4",
            pink: "#E25085"
          }
    };

    inputData = event =>{
        this.setState({ arr: event.target.value});
    };

    submitData(event){
        event.preventDefault();
        const {arr} = this.state;
        // this.setState({answers: ["test2"]})
    };

    newArr = this.props.data
    
    componentDidMount() {

        console.log(this.props.data)
        this.setState({
            arr: this.props.data
        })

    };

    componentDidUpdate = () => {

            if(this.props.data.includes(this.state.entry)){
                let tempArr = this.state.answers;
                tempArr.push(this.state.entry);
                this.setState({answers: tempArr})
                const str = this.state.entry
                var index = this.props.data.indexOf(this.state.entry)
                this.props.data.splice(index,1)
                // this.submitData()
            } 

            console.log(this.props.rightImage)

    };


    handleEntryChange = (event) => {

        this.setState({
            entry: event.target.value
        })

    };

    renderAnswers = () => {
        this.state.answers && this.state.answers.map((answers, i) => (
            <div>
                {answers}
            </div>
        ))
    };

    render(){ 
        return(
            <CompareFrame>
            <CompareWrapper>
                <ReactCompareImage leftImage="/img/Waldo_OG.jpg" rightImage={"img/" + this.props.rightImage} />
            </CompareWrapper>

                {/* <ReactCompareImage leftImage="/img/Waldo_OG.jpg" rightImage={"/img/Waldo_OG.jpg"} /> */}
                <FormAnswers theme={this.state.theme}>
                <form >
                    <h1>Find the Difference!</h1>
                    <p>Spot the difference in the picture to the left! Find all 3 and collect your badge!</p>
                    {/* {this.state.entry} */}
                    <br/>
                    <input name="title" type="text" value={this.state.entry} onChange={this.handleEntryChange} />
                    {/* <input type="submit" value="Submit" onClick={this.submitData}  /> */}
                </form>
                <div className="answers">
                    {this.state.answers.map((x, i) => (
                        <div> ✅ {x}</div>
                    ))}
                </div>
                </FormAnswers>

            </CompareFrame>

        )
      }

}

CompareImgInput.propTypes = {
    data: React.propTypes,
    rightImage: React.propTypes
}

export default CompareImgInput