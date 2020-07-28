import React, { Component } from 'react';
import "./Component.css"


class Navigation extends Component {

    constructor(props) {
        super(props)
        this.state = {
            som: true
        }
    }

    render() {

        return (
            <nav id="navigation">

                <div id="burger-container"><img style={{ width:20 }} alt="burger-menu" src={require("./images/burger.svg")} /></div>
                <div id="logo-container"><img style={{ width: 130 }} alt="logo" src={require('./images/inviton-logo-black.svg')} /></div>
                <div id="nav-items">
                  
                    <ul>
                        <li className="selected"><a>Home</a></li>
                        <li><a>Pages</a></li>
                        <li><a>Portfolio</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Elements</a></li>
                    </ul>
                    <div id="burger-container-web">
                        <img id="burger-web" alt="burger-menu" src={require("./images/burger.svg")} />
                    </div>
                    <div id="search-container-web">
                        <img id="search-web" alt="search" src={require("./images/search.png")} />
                    </div>
                  
	             </div>
            </nav>
            
            )

    }

}

export default Navigation;