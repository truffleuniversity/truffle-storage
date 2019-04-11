import React, { Component } from 'react';
import './App.css';

import { DrizzleProvider } from 'drizzle-react';
import { LoadingContainer } from "drizzle-react-components";

import drizzleOptions from './drizzleOptions';
import Header from "./Header";
import MyContainer from "./MyContainer";


class App extends Component {
  render() {
    return (
      <DrizzleProvider options={drizzleOptions}>
        <div className="App">
        <Header />
        <header className="App-header">
          <LoadingContainer>
            <MyContainer />
          </LoadingContainer>
        </header>
        </div>
      </DrizzleProvider>
    );
  }
}

export default App;
