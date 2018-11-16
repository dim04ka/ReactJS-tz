import React, { Component } from 'react';
import Main from './Main';
import Fix from './Fix';

export default class Header extends Component {
  render() {
    return (
        <>
      <div className="header">
        <div className="container">
            <h2>Test Project</h2>
        </div>
      </div>
      <Fix />
      <Main />
      </>
    );
  }
}
