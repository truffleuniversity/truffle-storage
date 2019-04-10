import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { DrizzleProvider } from 'drizzle-react';
import drizzleOptions from './drizzleOptions';
import MyContainer from "./MyContainer";


class App extends Component {
  render() {
    return (
      <DrizzleProvider options={drizzleOptions}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Truffle University</p>
            <MyContainer />
          </header>
        </div>
      </DrizzleProvider>
    );
  }
}

export default App;
