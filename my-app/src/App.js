import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="card-container">
          <div className="card">
          <div className="icon">
            <span className="fontawesome-volume-up"></span>
          </div>
            <h1>B</h1>
            <img
              className="card-img"
              src="http://s7d4.scene7.com/is/image/roomandboard/?layer=0&size=498,300&scl=1&src=117722_color_BPNV&layer=comp&$prodzoom0$"
            />
            <h2>Bed</h2>
            <div className="icon">
              <span className="fontawesome-share"></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
