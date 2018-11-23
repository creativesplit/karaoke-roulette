import React, { Component } from "react";
import './Controls.css'


class Controls extends Component {
  state = {
      randomSong: '',
      randomPrompt: ''
    }

avoid = () => {
  console.log(this.props.questions[Math.floor(Math.random()*this.props.questions.length)])
  this.setState({
    randomPrompt: this.props.questions[Math.floor(Math.random()*this.props.questions.length)]
  })
}


yourSong = () => {
  console.log(this.props.wheel[Math.floor(Math.random()*this.props.wheel.length)])
  this.setState({
    randomSong: this.props.wheel[Math.floor(Math.random()*this.props.wheel.length)]
  })
}


  
    render() {

        return (
        <div className='box'>
        <p>{this.state.randomSong}</p>
        <p>{this.state.randomPrompt.prompt}</p>
        {/* <button onClick={this.state.randomSong.url}>Sing It!</button> */}
        <button onClick ={this.avoid}>Opt Out</button>
        <button onClick= {this.yourSong}>Spin</button>
        </div>
          
        )
  }
}
  
  export default Controls;
  