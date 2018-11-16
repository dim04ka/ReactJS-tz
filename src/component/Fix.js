import React, { Component } from 'react';
import Background from '../img/cyprus-3184019_1920.jpg';

export default class Main extends Component {

  render() {
    var sectionStyle = {
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        backgroundImage: `url(${Background})`
      };
    return (
      <div className="fix" style={ sectionStyle }>
      </div>
    );
  }
}
