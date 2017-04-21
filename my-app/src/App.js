import React, { Component } from 'react';
// import { Router, location, browserHistory } from 'react-router';
import Sound from 'react-sound';
import './App.css';
import cardData from './card.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.getLetter = this.getLetter.bind(this);
    this.getLetter();

    // get flip in, re-set sound to stop after playing, get array working
    this.getUpperLower();


    this.state = {
      playSound: Sound.status.STOPPED,
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
    let ranNum = Math.floor(Math.random() * (26));
    // console.log(ranNum);
    // let num = Math.floor(Math.random() * this.state['array'].length);
    let card = cardData.data[ranNum];

    this.image = card.image;
    this.soundFile = card.sound_short
    this.letter = card.letter
    this.word = card.word

    let letterCase = Math.floor(Math.random() * (4));
    if ( letterCase === 3 ) {
        // console.log('i am 3'); Look @ TopicBody.js in Node - it has multiple returns in one file
         this.case = 'upper';
    } else {
        this.case = 'lower';
    }
    // console.log(this.case);


    return this.image, this.soundFile, this.letter, this.word, this.case;
  }

  render() {
    // let image = this.getLetter(); 
    return (
      <div className="App">
        <div className="card-container flip-container">
          <div className="card flipper">
          <div className="icon">
            <button
              type="button"
              className="btn"
              aria-label="Play Sound"
              onClick={() => this.setState({ playSound: Sound.status.PLAYING })}
            >
              <span className="fa fa-volume-up"></span>
            </button>
            <Sound 
              url={this.soundFile}
              playStatus={this.state.playSound}       
            >
              
            </Sound>
          
          </div>
            <h1 className={this.case} >{this.letter}</h1>
            <img
              className="card-img"
              // src={this.state.image}
              src={this.image}
              alt={this.word}
            />
            <h2 className={this.case} >{this.word}</h2>
            <div className="icon">
              <button
                type="button"
                className="btn"
                aria-label="Flip Card"
                // onClick={this.handleChange}
                // onClick={this.getLetter}
                onClick={() => this.setState({ image: this.getLetter() })}
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
