import React, { Component } from 'react';
// import { Router, location, browserHistory } from 'react-router';
import Sound from 'react-sound';
import './App.css';
import cardData from './card.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    const ranNum = this.getLetter();
    const card = cardData.data[ranNum];
    const upperlower = this.getUpperLower();

    this.state = {
      playSound: Sound.status.STOPPED,
      soundFile: card.sound_short,
      letter: card.letter,
      word: card.word,
      image: card.image,
      upperlower: upperlower,
      array: '',
    };
  }
  // getInitialState() {
  //   return {
  //     array: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
  //   };
  // }
  getUpperLower() {
    let letterCase = Math.floor(Math.random() * (4));
    if ( letterCase === 3 ) {
        // console.log('i am 3'); Look @ TopicBody.js in Node - it has multiple returns in one file
         return 'upper';
      } 
    return 'lower';
  }
  getLetter (event) {
    // console.log(this.state.array);
    let num = Math.floor(Math.random() * (26));
    // let num = Math.floor(Math.random() * this.state['array'].length);
    return num;
  }
  handleChange () {
    // Router.refresh();
    window.location.reload()
  }
  render() {
     
    return (
      <div className="App">
        <div className="card-container">
          <div className="card">
          <div className="icon">
            <button
              type="button"
              className="btn-link"
              aria-label="Play Sound"
              onClick={() => this.setState({ playSound: Sound.status.PLAYING })}
            >
              <span className="fa fa-volume-up"></span>
            </button>
            <Sound 
              url={this.state.soundFile}
              playStatus={this.state.playSound}       
            >
              
            </Sound>
          
          </div>
            <h1 className={this.state.upperlower} >{this.state.letter}</h1>
            <img
              className="card-img"
              src={this.state.image}
              alt={this.state.word}
            />
            <h2 className={this.state.upperlower} >{this.state.word}</h2>
            <div className="icon">
              <button
                type="button"
                className="btn-link"
                aria-label="Flip Card"
                onClick={this.handleChange}
                // onClick={this.getLetter}
              >
                <span className="fa fa-share"></span>
              </button>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default App;
