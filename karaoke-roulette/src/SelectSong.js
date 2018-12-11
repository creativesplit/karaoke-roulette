import React, { Component } from "react";
import './SelectSong.css'


class SelectSong extends Component {

    addSong = (e) => {
        let artist = e.target.className
        let song = e.target.name
        let video = e.target.id

        let combined = {
          artist: artist,
          song: song,
          video: video
        }

        this.props.handleChange(combined)
    }

    // addSong2 = (e) => {
    //     this.props.handleChange(e.target.name)
    // }

    // addSong3 = (e) => {
    //     this.props.handleChange(e.target.id)
    // }

    displayValue = (e) => {
        console.log(e.target.value)
        console.log(e.target.name)
        console.log(e.target.id)
    }
    
    render() {
  
        return (
        <div>
            <h2 className='title'>Select Your Songs</h2>
            <div className='button-wrapper'>
            <input onClick={this.addSong} type="button" name={this.props.songs[0].title} className={this.props.songs[0].artist} id={this.props.songs[0].url} value ='The Eagles - Hotel California'/>
            <input onClick={this.addSong} type="button" name={this.props.songs[1].title} className={this.props.songs[1].artist} id={this.props.songs[1].url} value ='Oasis - Wonderwall'/>
            <input onClick={this.addSong} type="button" name={this.props.songs[2].title} className={this.props.songs[2].artist} id={this.props.songs[2].url} value ='Smash Mouth - All Star'/>
            <input onClick={this.addSong} type="button" name={this.props.songs[3].title} className={this.props.songs[3].artist} id={this.props.songs[3].url} value ='Toto - Africa'/>
            <input onClick={this.addSong} type="button" name={this.props.songs[4].title} className={this.props.songs[4].artist} id={this.props.songs[4].url} value ='Taylor Swift - End Game'/>
            <input onClick={this.addSong} type="button" name={this.props.songs[5].title} className={this.props.songs[5].artist} id={this.props.songs[5].url} value ='Dua Lipa - IDGAF'/>
            <input onClick={this.addSong} type="button" name={this.props.songs[6].title} className={this.props.songs[6].artist} id={this.props.songs[6].url} value ='Marroon 5 ft. Sia - What Lovers Do'/>
            <input onClick={this.addSong} type="button" name={this.props.songs[7].title} className={this.props.songs[7].artist} id={this.props.songs[7].url} value ='Portugal The Man - Feel It Still'/>
            <input onClick={this.addSong} type="button" name={this.props.songs[8].title} className={this.props.songs[8].artist} id={this.props.songs[8].url} value ='Ed Sheeran - What Do I Know'/>
            <input onClick={this.addSong} type="button" name={this.props.songs[9].title} className={this.props.songs[9].artist} id={this.props.songs[9].url} value ='Queen - Bohemian Rhapsody'/>
            <input onClick={this.addSong} type="button" name={this.props.songs[10].title} className={this.props.songs[10].artist} id={this.props.songs[10].url} value ='Pharell Williams - Happy'/>
            <input onClick={this.addSong} type="button" name={this.props.songs[11].title} className={this.props.songs[11].artist} id={this.props.songs[11].url} value ='Weezer - Island In The Sun'/>
            <input onClick={this.addSong} type="button" name={this.props.songs[12].title} className={this.props.songs[12].artist} id={this.props.songs[12].url} value ='Foster The People - Pumped Up Kicks'/>
            <input onClick={this.addSong} type="button" name={this.props.songs[13].title} className={this.props.songs[13].artist} id={this.props.songs[13].url} value ='Europe - Final Countdown'/>
            <input onClick={this.addSong} type="button" name={this.props.songs[14].title} className={this.props.songs[14].artist} id={this.props.songs[14].url} value ='Avril Lavigne - Sk8er Boi'/>
            <input onClick={this.addSong} type="button" name={this.props.songs[15].title} className={this.props.songs[15].artist} id={this.props.songs[15].url} value ='James Brown - I Got You'/>
            <input onClick={this.addSong} type="button" name={this.props.songs[16].title} className={this.props.songs[16].artist} id={this.props.songs[16].url} value ='Luis Fonsi/Daddy Yankee - Despacito'/>
            <input onClick={this.addSong} type="button" name={this.props.songs[17].title} className={this.props.songs[17].artist} id={this.props.songs[17].url} value ='Avicii - Wake Me Up'/>
            <input onClick={this.addSong} type="button" name={this.props.songs[18].title} className={this.props.songs[18].artist} id={this.props.songs[18].url} value ='Beyonce - Listen'/>
            <input onClick={this.addSong} type="button" name={this.props.songs[19].title} className={this.props.songs[19].artist} id={this.props.songs[19].url} value ='Phantom Planet - California'/>
            <input onClick={this.addSong} type="button" name={this.props.songs[20].title} className={this.props.songs[20].artist} id={this.props.songs[20].url} value ='Eric Clapton - Tears in Heaven'/>
            <input onClick={this.addSong} type="button" name={this.props.songs[21].title} className={this.props.songs[21].artist} id={this.props.songs[21].url} value ='The Police - Every Breath You Take'/>
            <input onClick={this.addSong} type="button" name={this.props.songs[22].title} className={this.props.songs[22].artist} id={this.props.songs[22].url} value ='A-Ha - Take On Me'/>
            <input onClick={this.addSong} type="button" name={this.props.songs[23].title} className={this.props.songs[23].artist} id={this.props.songs[23].url} value ='Five For Fighting - Superman'/>
            <input onClick={this.addSong} type="button" name={this.props.songs[24].title} className={this.props.songs[24].artist} id={this.props.songs[24].url} value ='MGMT - Electric Feel'/>
            <input onClick={this.addSong} type="button" name={this.props.songs[25].title} className={this.props.songs[25].artist} id={this.props.songs[25].url} value ='Jennifer Lopez - Waiting For Tonight'/>
            <input onClick={this.addSong} type="button" name={this.props.songs[26].title} className={this.props.songs[26].artist} id={this.props.songs[26].url} value ='The Verve - Bitter Sweet Symphony'/>
            <input onClick={this.addSong} type="button" name={this.props.songs[27].title} className={this.props.songs[27].artist} id={this.props.songs[27].url} value ='Bon Jovi - Its My Life'/>
            
            
            

            </div>



            {/* <button id = "Bodak Yellow" onClick={this.addSong}>{this.props.songs? <span>{this.props.songs[1].artist}</span>: <span></span>} - Bodak Yellow - youtube.com/xyz</button> */}
            {/* {this.props.songs.forEach(song => <h1>{song.artist}</h1>)} */}
            {/* <p> {this.props.songs.title}</p> */}
        </div>
          
        )
  }
}
  
  export default SelectSong;
  