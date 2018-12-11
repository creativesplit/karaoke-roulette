import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import './App.css';
import Header from "./Header"
import SelectSong from './SelectSong'
import Controls from './Controls'
import Intro from './Intro';

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
            "artist": "The Eagles",
            "title": "Hotel California",
            "url": "https://www.youtube.com/embed/iMYumh4M5cc",
    
    },
    {
            "artist": "Oasis",
            "title": "Wonderwall",
            "url": "https://www.youtube.com/embed/xROf-J2TdFM",
    
    },
    {
            "artist": "Post Malone",
            "title": "Rockstar",
            "url": "https://www.youtube.com/embed/RiK4uV0uljo",
    
    },
      {
            "artist": "Toto",
            "title": "Africa",
            "url": "https://www.youtube.com/embed/ya3HfowI_aY",
    
    },
    {
            "artist": "Taylor Swift",
            "title": "End Game",
            "url": "https://www.youtube.com/embed/JAIBFxeOXGY",
    
    },
    {
            "artist": "Dua Lipa",
            "title": "IDGAF",
            "url": "https://www.youtube.com/embed/3fLHTK5w6Mo",
    
    },
    {
            "artist": "Maroon 5 ft. Sia",
            "title": "What Lovers Do",
            "url": "https://www.youtube.com/embed/LjDrKszD2bk",
    
    },
    {
            "artist": "Portugal The Man",
            "title": "Feel It Still",
            "url": "https://www.youtube.com/embed/ruwL0GFfCDc",
    
    },
    {
            "artist": "Ed Sheeran",
            "title": "What Do I Know",
            "url": "https://www.youtube.com/embed/Di7mcTcHajk",
    
    },
    {
            "artist": "Queen",
            "title": "Bohemian Rhapsody",
            "url": "https://www.youtube.com/embed/XuHG2fnz8hA",
    
    },
    {
            "artist": "Pharell Williams",
            "title": "Happy",
            "url": "https://www.youtube.com/embed/mIYs48J6ObQ",
    
    },
    {
            "artist": "Weezer",
            "title": "Island In The Sun",
            "url": "https://www.youtube.com/embed/il0S6WrKjnY",
    
    },
    {
            "artist": "Foster The People",
            "title": "Pumped Up Kicks",
            "url": "https://www.youtube.com/embed/FWgW8i5YLIQ",
    
    },
    {
            "artist": "Europe",
            "title": "Final Countdown",
            "url": "https://www.youtube.com/embed/9DTlwhW6jVg",
    
    },
    {
            "artist": "Avril Lavigne",
            "title": "Sk8er Boi",
            "url": "https://www.youtube.com/embed/CVCTuZM3OE8",
    
    },
    {
            "artist": "James Brown",
            "title": "I got You",
            "url": "https://www.youtube.com/embed/0ENi1I8wwsQ",
    
    },
    {
            "artist": "Luis Fonsi/Daddy Yankee ",
            "title": "Despacito",
            "url": "https://www.youtube.com/embed/OqByYBieXcE",
    
    },
    {
            "artist": "Avicii",
            "title": "Wake Me Up",
            "url": "https://www.youtube.com/embed/TY0LSYzZs00",
    
    },
    {
            "artist": "Beyonce",
            "title": "Listen",
            "url": "https://www.youtube.com/embed/tVPNB_QVxMA",
    
    },
    {
            "artist": "Phatom Planet",
            "title": "California",
            "url": "https://www.youtube.com/embed/4saU0KTF3E0",
    
    },
     {
            "artist": "Eric Clapton",
            "title": "Tears In Heaven",
            "url": "https://www.youtube.com/embed/0CrDBjj3vcY",
    
    },
     {
            "artist": "The Police",
            "title": "Every Breath You Take",
            "url": "https://www.youtube.com/embed/lVZfhvTpe8Y",
    
    },
     {
            "artist": "A-Ha",
            "title": "Take On Me",
            "url": "https://www.youtube.com/embed/NkNxY2LLfsc",
    
    },
     {
            "artist": "Five For Fighting",
            "title": "Superman",
            "url": "https://www.youtube.com/embed/KJ3JwKJVwBE",
    
    },
     {
            "artist": "MGMT",
            "title": "Electric Feel",
            "url": "https://www.youtube.com/embed/7TTGczmpkSc",
    
    },
     {
            "artist": "Jennifer Lopez",
            "title": "Waiting for Tonight",
            "url": "https://www.youtube.com/embed/9EQlEsEUuZY",
    
    },
     {
            "artist": "The Verve",
            "title": "Bitter Sweet Symphony",
            "url": "https://www.youtube.com/embed/Q8qpxUtKteQ",
    
    },
    {
        "artist": "Bon Jovi",
        "title": "It's My Life",
        "url": "https://www.youtube.com/embed/dLonwOk5mUc",

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
