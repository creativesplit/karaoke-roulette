import React, { Component } from "react";
import './Controls.css'


class Controls extends Component {
  state = {
      randomSong: '',
      randomPrompt: '',
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
        <iframe width="560" height="315" 
        src="https://www.youtube.com/embed/xih8aiacRSk" 
        frameBorder="0" allow="accelerometer; 
        autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen"></iframe>
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
  