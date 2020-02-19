import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import tourStops from './data/tourStops';
import ReactCompareImage from 'react-compare-image';

class CompareImgInput extends Component{

    constructor(props){
        super(props);
        this.submitData = this.submitData.bind(this);

      };


    state = {
        value: 'init',
        answers: ["test"],
    };

    inputData = event =>{
        this.setState({ arr: event.target.value});
    };

    submitData(event){
        event.preventDefault();
        const {arr} = this.state;
        // this.setState({answers: ["test2"]})
        let tempArr = this.state.answers;
        tempArr.push("test2");
        this.setState({answers: tempArr})
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
                const str = this.state.entry
                var index = this.props.data.indexOf(this.state.entry)
                this.props.data.splice(index,1)
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
            <div>
                <ReactCompareImage leftImage="/img/Waldo_OG.jpg" rightImage={"img/" + this.props.rightImage} />
                {/* <ReactCompareImage leftImage="/img/Waldo_OG.jpg" rightImage={"/img/Waldo_OG.jpg"} /> */}
                <form >
                    {/* {this.state.entry} */}
                    <br/>
                    <input name="title" type="text" value={this.state.entry} onChange={this.handleEntryChange} />
                    <input type="submit" value="Submit" onClick={this.submitData}  />
                </form>
                <div className="answers">
                    {this.state.answers.map((x, i) => (
                        <div>{x}</div>
                    ))}
                </div>
            </div>

        )
      }

}

CompareImgInput.propTypes = {
    data: React.propTypes,
    rightImage: React.propTypes
}

export default CompareImgInput