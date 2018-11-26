import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import './App.css';
import Header from "./Header"
import SelectSong from './SelectSong'
import Controls from './Controls'
import YouTube from './Youtube';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {prompt: "Tell us about your worst first date"},
        {prompt: "Tell us about the most awkward thing that happened to you in college"},
        {prompt: "Have you ever been in a talent show? If so, tell us about it. If not, get another prompt"},
        {prompt: "Tell is about your biggest fear, and why you have it"},
        {prompt: "Tell us about the most embarrassing thing you’ve ever done on a date"},
        {prompt: "Tell us about the most embarrassing thing you’ve ever done at work"}
      ],

      wheel: [
        //   artist:"",
        //   song: "",
        //   url: ""
        
      ],
      songs: [
        {
            "artist": "Cardi B",
            "title": "Bodak Yellow",
            "url": "https://www.youtube.com/embed/1g8S-enLQ60",
    
    },
    {
            "artist": "Ed Sheeran",
            "title": "Perfect",
            "url": "https://www.youtube.com/embed/sPMA1tqWuf4",
    
    },
    {
            "artist": "Smash Mouth",
            "title": "All Star",
            "url": "https://www.youtube.com/embed/ABOYo7ioQJo",
    
    },
      {
            "artist": "Toto",
            "title": "Africa",
            "url": "https://www.youtube.com/embed/ya3HfowI_aY",
    
    },
    {
            "artist": "Brtiney Spears",
            "title": "Toxic",
            "url": "https://www.youtube.com/embed/Z_tTE7SBlo0",
    
    },
    {
            "artist": "Celine Deion",
            "title": "My Heart Will Go On",
            "url": "https://www.youtube.com/embed/cdgU8YmD3Kc",
    
    },
    {
            "artist": "Seal",
            "title": "Kiss From A Rose",
            "url": "https://www.youtube.com/embed/Ug6Mr144qrM",
    
    },
    {
            "artist": "Frozen",
            "title": "Let It Go",
            "url": "https://www.youtube.com/embed/ifCAfAzOBJM",
    
    },
    {
            "artist": "Alicia Keys",
            "title": "If I aint got you",
            "url": "https://www.youtube.com/embed/M5Q0eiMzup0",
    
    },
    {
            "artist": "Anna Kendrick",
            "title": "Cups (Pitch Perfect's When I'm Gone)",
            "url": "https://www.youtube.com/embed/mNL7iE-CxXA",
    
    },
    {
            "artist": "David Guetta feat. Sia",
            "title": "Titanium",
            "url": "https://www.youtube.com/embed/32LB2DR_JM0",
    
    },
    {
            "artist": "Beyonce",
            "title": "Halo",
            "url": "https://www.youtube.com/embed/TBwf18A_Obo",
    
    },
    {
            "artist": "Flume ft. Kai",
            "title": "Never Be Like You",
            "url": "https://www.youtube.com/embed/j7vRvZl-9ic",
    
    },
    {
            "artist": "Amy Winehouse",
            "title": "Back to Black",
            "url": "https://www.youtube.com/embed/snSHKsE22DQ",
    
    },
    {
            "artist": "Beyonce",
            "title": "Listen",
            "url": "https://www.youtube.com/embed/nUTqLi7UtLQ",
    
    },
    {
            "artist": "Sublime",
            "title": "What I got",
            "url": "https://www.youtube.com/embed/JnQY3EnaxXQ",
    
    },
    {
            "artist": "Red Hot Chili Peppers ",
            "title": "Under the Bridge",
            "url": "https://www.youtube.com/embed/AEce22afpbU",
    
    },
    {
            "artist": "Green Day",
            "title": "21 Guns",
            "url": "https://www.youtube.com/embed/Q6nw3xlHM2Q",
    
    },
    {
            "artist": "Green Day",
            "title": "Basket Case",
            "url": "https://www.youtube.com/embed/UntbNt8rK4w",
    
    },
    {
            "artist": "Cee Lo Green",
            "title": "Forget You",
            "url": "https://www.youtube.com/embed/l-hN9wzbPJE",
    
    },
     {
            "artist": "Survivor",
            "title": "Eye Of The Tiger",
            "url": "https://www.youtube.com/embed/aGCyrDahk4I",
    
    },
     {
            "artist": "Childish Gambino",
            "title": "Feels Like Summer",
            "url": "https://www.youtube.com/embed/aGCyrDahk4I",
    
    },
     {
            "artist": "Notorious BIG",
            "title": "Juicy",
            "url": "https://www.youtube.com/embed/tXEgOApN1uM",
    
    },
     {
            "artist": "Notorious BIG",
            "title": "Big Poppa",
            "url": "https://www.youtube.com/embed/LE0NtT0IK1c",
    
    },
     {
            "artist": "Notorious BIG",
            "title": "Mo Money Mo Problems",
            "url": "https://www.youtube.com/embed/uDmv1kh9_g8",
    
    },
     {
            "artist": "Sublime",
            "title": "Santeria",
            "url": "https://www.youtube.com/embed/M9T43nB58NY",
    
    },
     {
            "artist": "Sublime",
            "title": "Garden Grove",
            "url": "https://www.youtube.com/embed/vxxGhc3tiLo",
    
    },
  ]
  }
  }

  //How do I get this to add to the songList state? Do I need a song1, song2
  // designation or can I just add it?
handleChange = (choice) => {
    this.setState({
      wheel: this.state.wheel.concat(choice)
    })
  }

  render() {
    console.log(this.state.wheel)
    return (
      <div className="App">
       <Header />
       <Switch>
       <Route path="/selectsongs" render={(props) => <SelectSong handleChange={this.handleChange} {...this.state} {...props} />}/>
       <Route path="/" render={(props) => <Controls {...this.state} {...props} />}/>
       </Switch>
    
      </div>
    );
  }
}

export default App;
