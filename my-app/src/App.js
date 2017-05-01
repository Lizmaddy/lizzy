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
      iover: 'flip-container hide',
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
  handleClick() {
    let show = this.state.iover;
      let index = show.indexOf('show');

      if (index !== -1) {
          show = 'flip-container hide';
      } else {
          show = 'flip-container show';
      }

      this.setState({ iover: show });
      this.setState({ playSound: Sound.status.STOPPED })
      // console.log('state: ' + this.state.playSound);
      event.preventDefault()
      
  }
  getLetter (event) {
    this.setState({ playSound: Sound.status.STOPPED })
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
    // this.handleClick();

    return this.image, this.soundFile, this.letter, this.word, this.case;
  }

  render() {
    // let image = this.getLetter(); 
    return (
      <div className="App">
      <div className="next">
       <p className="mb0">
        <button
          type="button"
          className="btn nextbtn"
          aria-label="Next Card"
          // onClick={this.handleChange}
          // onClick={this.getLetter}
          onClick={() => this.setState({ image: this.getLetter() })}
        >
          <span className="fa fa-arrow-right"></span>
        </button>
        </p>
      </div>
      <div className={this.state.iover}>
      <div className="flipper">

        <div className="card-container front">
          <div className="card">
          <div className="icon">
            <button
              type="button"
              className="btn btnsound"
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
           <div className={this.case}>
              <span className="h1" >{this.letter}</span>
            </div>
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
                className="btn btnflip"
                aria-label="Flip Card"
                // onClick={this.handleChange}
                // onClick={this.getLetter}
                onClick={() => this.setState({ flip : this.handleClick() })}
              >
                <span className="fa fa-share"></span>
              </button>
            </div>
          </div>
        </div>

        <div className="card-container back">
          <div className="card">
          <div className="icon">
            <button
              type="button"
              className="btn btnsound"
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
          <div className="h1 only-letter">
            <span className={this.case} >{this.letter}</span>
          </div>
            
            <div className="icon">
              <button
                type="button"
                className="btn btnflip"
                aria-label="Flip Card"
                // onClick={this.handleChange}
                // onClick={this.getLetter}
                onClick={() => this.setState({ flip : this.handleClick() })}
              >
                <span className="fa fa-share mirror"></span>
              </button>
            </div>
          </div> 
        </div>

      </div>
      </div>

      </div>
    );
  }
}

export default App;
