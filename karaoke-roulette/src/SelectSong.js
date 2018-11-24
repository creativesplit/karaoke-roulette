import React, { Component } from "react";
import './SelectSong.css'


class SelectSong extends Component {

    addSong = (e) => {
        this.props.handleChange((this.props.wheel.artist = e.target.className)+(this.props.wheel.song = e.target.name)+(this.props.wheel.url = e.target.id))
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
            <input onClick={this.addSong} type="button" name={this.props.songs[0].title} className={this.props.songs[0].artist} id={this.props.songs[0].url} value ='Cardi B - Bodak Yellow'/>
            <input onClick={this.addSong} type="button" name={this.props.songs[1].title} className={this.props.songs[1].artist} id={this.props.songs[1].url} value ='Ed Shareen - Perfect'/>
            <input onClick={this.addSong} type="button" name={this.props.songs[2].title} className={this.props.songs[2].artist} id={this.props.songs[2].url} value ='Smash Mouth - All Star'/>
            <input onClick={this.addSong} type="button" name={this.props.songs[3].title} className={this.props.songs[3].artist} id={this.props.songs[3].url} value ='Toto - Africa'/>
            <input onClick={this.addSong} type="button" name={this.props.songs[4].title} className={this.props.songs[4].artist} id={this.props.songs[4].url} value ='Britney Spears - Toxic'/>
            <input onClick={this.addSong} type="button" name={this.props.songs[5].title} className={this.props.songs[5].artist} id={this.props.songs[5].url} value ='Celine Deion - My Heart Will Go On'/>
            <input onClick={this.addSong} type="button" name={this.props.songs[6].title} className={this.props.songs[6].artist} id={this.props.songs[6].url} value ='Seal - Kiss from a Rose'/>
            <input onClick={this.addSong} type="button" name={this.props.songs[7].title} className={this.props.songs[7].artist} id={this.props.songs[7].url} value ='Frozen - Let It Go'/>
            <input onClick={this.addSong} type="button" name={this.props.songs[8].title} className={this.props.songs[8].artist} id={this.props.songs[8].url} value ='Alicia Keys - If I Aint Got You'/>
            <input onClick={this.addSong} type="button" name={this.props.songs[9].title} className={this.props.songs[9].artist} id={this.props.songs[9].url} value ='Pitch Perfect - When Im Gone'/>
            <input onClick={this.addSong} type="button" name={this.props.songs[10].title} className={this.props.songs[10].artist} id={this.props.songs[10].url} value ='David Guetta feat. Sia - Titanium'/>
            <input onClick={this.addSong} type="button" name={this.props.songs[11].title} className={this.props.songs[11].artist} id={this.props.songs[11].url} value ='Beyonce - Halo'/>
            <input onClick={this.addSong} type="button" name={this.props.songs[12].title} className={this.props.songs[12].artist} id={this.props.songs[12].url} value ='Flume ft. Kai - Never be Like You'/>
            <input onClick={this.addSong} type="button" name={this.props.songs[13].title} className={this.props.songs[13].artist} id={this.props.songs[13].url} value ='Amy Winehouse - Back to Black'/>
            <input onClick={this.addSong} type="button" name={this.props.songs[14].title} className={this.props.songs[14].artist} id={this.props.songs[14].url} value ='Beyonce - Listen'/>
            <input onClick={this.addSong} type="button" name={this.props.songs[15].title} className={this.props.songs[15].artist} id={this.props.songs[15].url} value ='Sublime - What I Got'/>
            <input onClick={this.addSong} type="button" name={this.props.songs[16].title} className={this.props.songs[16].artist} id={this.props.songs[16].url} value ='Red Hot Chili Peppers - Under the Bridge'/>
            <input onClick={this.addSong} type="button" name={this.props.songs[17].title} className={this.props.songs[17].artist} id={this.props.songs[17].url} value ='Green Day - 21 Guns'/>
            <input onClick={this.addSong} type="button" name={this.props.songs[18].title} className={this.props.songs[18].artist} id={this.props.songs[18].url} value ='Green Day - Basket Case'/>
            <input onClick={this.addSong} type="button" name={this.props.songs[19].title} className={this.props.songs[19].artist} id={this.props.songs[19].url} value ='Cee Lo Green - Forget You'/>
            <input onClick={this.addSong} type="button" name={this.props.songs[20].title} className={this.props.songs[20].artist} id={this.props.songs[20].url} value ='Survivor - Eye of the Tiger'/>
            <input onClick={this.addSong} type="button" name={this.props.songs[21].title} className={this.props.songs[21].artist} id={this.props.songs[21].url} value ='Childish Gambino - Feels Like Summer'/>
            <input onClick={this.addSong} type="button" name={this.props.songs[22].title} className={this.props.songs[22].artist} id={this.props.songs[22].url} value ='Notorious BIG - Juicy'/>
            <input onClick={this.addSong} type="button" name={this.props.songs[23].title} className={this.props.songs[23].artist} id={this.props.songs[23].url} value ='Notorious BIG - Big Poppa'/>
            <input onClick={this.addSong} type="button" name={this.props.songs[24].title} className={this.props.songs[24].artist} id={this.props.songs[24].url} value ='Notorious BIG - Mo Money Mo Problems'/>
            <input onClick={this.addSong} type="button" name={this.props.songs[25].title} className={this.props.songs[25].artist} id={this.props.songs[25].url} value ='Sublime - Santeria'/>
            <input onClick={this.addSong} type="button" name={this.props.songs[26].title} className={this.props.songs[26].artist} id={this.props.songs[26].url} value ='Sublime - Garden Grove'/>
            
            
            

            </div>



            {/* <button id = "Bodak Yellow" onClick={this.addSong}>{this.props.songs? <span>{this.props.songs[1].artist}</span>: <span></span>} - Bodak Yellow - youtube.com/xyz</button> */}
            {/* {this.props.songs.forEach(song => <h1>{song.artist}</h1>)} */}
            {/* <p> {this.props.songs.title}</p> */}
        </div>
          
        )
  }
}
  
  export default SelectSong;
  