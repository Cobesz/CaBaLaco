import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Icon} from 'react-materialize';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Button node='a' waves='light'><Icon right>file_cloud</Icon>button</Button>
          <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
