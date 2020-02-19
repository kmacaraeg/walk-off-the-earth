import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import tourStops from './data/tourStops';

class CompareImgInput extends Component{

    constructor(props){
        super(props);

        // this.state = {
        //     entry: ""
        // }
        this.submitData = this.submitData.bind(this);

      }


    state = {
        value: 'init',
        answers: ["test"],
        // answersHTML: ""

    }

    inputData = event =>{
        this.setState({ arr: event.target.value});
    }

    submitData(event){
        event.preventDefault();
        const {arr} = this.state;

        const matches = "fuckkkk";
        if(matches){

            console.log(event.target.title)
        }
    }

    newArr = this.props.data;
    
    componentDidMount() {

        console.log(this.props.data)
        this.setState({
            arr: this.props.data
        })

    }

    componentDidUpdate = () => {

            if(this.props.data.includes(this.state.entry)){
                alert("eeee" + this.state.entry)
                const str = this.state.entry

                alert(str)

                var index = this.props.data.indexOf(this.state.entry)
                this.props.data.splice(index,1)

                let tempArr =this.state.answers
                tempArr.push(str)
                alert(tempArr)
                
                // if(this.state.answers !== )

                // }   

            } 



    }


    handleEntryChange = (event) => {

        this.setState({
            entry: event.target.value
        })

    }

    renderAnswers = () => {
        
        this.state.answers && this.state.answers.map((answers, i) => (
            <div>
                {answers}
            </div>
        ))
    }

    render(){ 
        return(
            <div>
          <form >

            {this.state.entry}
            <br/>
            {this.state.answers}

            <input name="title" type="text" value={this.state.entry} onChange={this.handleEntryChange} />
             <input type="submit" value="Submit"  />
          </form>
            <div className="answers"></div>
            </div>

        )
      }

}

CompareImgInput.propTypes = {
    data: React.propTypes
}

export default CompareImgInput

// want to be able to update in html