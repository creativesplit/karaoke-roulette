import React, { Component } from "react";
import './Controls.css'


class Controls extends Component {
  state = {
      randomSong: '',
      randomArtist: '',
      randomVideo: '',
      randomPrompt: '',
      }

avoid = () => {
  console.log(this.props.questions[Math.floor(Math.random()*this.props.questions.length)])
  this.setState({
    randomPrompt: this.props.questions[Math.floor(Math.random()*this.props.questions.length)]
  })
}


yourSong = () => {
  let random = this.props.wheel[Math.floor(Math.random()*this.props.wheel.length)]

  this.setState({
    randomSong: random.song,
    randomArtist: random.artist,
    randomVideo: random.video
  })
}

  componentDidUpdate(prevProps) {
    if (this.props.video !== prevProps) {
      console.log('new video updated')
    }
  }


  
    render() {
      console.log(this.props)
      console.log(this.state.randomSong)
        return (
        <div className='flex-container'>
        <div className='welcome'>
         <h2 className='title'> Welcome to Karaoke Roulette! Karaoke but with more laughs  </h2>
        <p className='instructions'> Each peson in your group should select a few songs and then hit the Spin button. A song will be randomly
        selected for the next person up.  If you dont want to sing the song you got, you can hit the Truth button.  The truth button will ask you to 
        tell a story. Once you hit Truth, you have to tell the story. Good luck!</p>
        </div>
        
        <div className="player">
        <iframe width="560" height="315" 
        src={this.state.randomVideo} 
        frameBorder="0" allow="accelerometer; 
        autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen"></iframe>
        
        <p>{this.state.randomSong + "-" + this.state.randomArtist}</p>
        <p>{this.state.randomPrompt.prompt}</p>
        {/* <button onClick={this.state.randomSong.url}>Sing It!</button> */}
        <button onClick ={this.avoid}>Truth</button>
        <button onClick= {this.yourSong}>Spin</button>
        </div>
        </div>
          
        )
  }
}
  
  export default Controls;
  