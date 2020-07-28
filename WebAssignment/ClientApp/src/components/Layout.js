import React, { Component } from 'react';
import "./Component.css"


export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
     

            <div id="main-container">
          {this.props.children}
        </div>
    
    );
  }
}
