import React, { Component } from "react";
import {Link} from 'react-router-dom'
import './Header.css'


class Header extends Component {

    render() {
        return (
            <div>
            <header className="header-wrapper">
              <h2 className="headerTitle">Karaoke Roulette</h2>
              <div className="link-wrapper">
                <Link className="test" to="/">Home</Link>
                <Link className="test" to="/selectsongs">Select Songs</Link>
              </div>
            </header>
          </div>
          
        )
  }
}
  
  export default Header;
  