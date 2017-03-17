import React from 'react';

export default class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.color = {
      w3color: 'w3-red',
      w3text: 'w3-text-red',
      w3hover: 'w3-hover-red',
      w3hovertext: 'w3-hover-text-red'
    };
  }

  changeColor(color) {
    this.color = {
      w3color: 'w3-' + color,
      w3text: 'w3-text-' + color,
      w3hover: 'w3-hover-' + color,
      w3hovertext: 'w3-color-text-' + color
    };
  }

  render() {

    return (
      <div className="w3-display-container">
        <div className="w3-row">
          <div className="w3-cell m3">
            <button onClick={() => {this.changeColor('red')}} className="w3-btn w3-red"></button>
          </div>
          <div className="w3-cell m3">
            <button onClick={() => {this.changeColor('pink')}} className="w3-btn w3-pink"></button>
          </div>
          <div className="w3-cell m3">
            <button onClick={() => {this.changeColor('orange')}} className="w3-btn w3-orange"></button>
          </div>
          <div className="w3-cell m3">
            <button onClick={() => {this.changeColor('yellow')}} className="w3-btn w3-yellow"></button>
          </div>
        </div>
          <div className="w3-row">
            <div className="w3-cell m3">
              <button onClick={() => {this.changeColor('green')}} className="w3-btn w3-green"></button>
            </div>
          <div className="w3-cell m3">
            <button onClick={() => {this.changeColor('teal')}} className="w3-btn w3-teal"></button>
          </div>
          <div className="w3-cell m3">
            <button onClick={() => {this.changeColor('cyan')}} className="w3-btn w3-cyan"></button>
          </div>
          <div className="w3-cell m3">
            <button onClick={() => {this.changeColor('lime')}} className="w3-btn w3-lime"></button>
          </div>
        </div>
        <div className="w3-row">
          <div className="w3-cell m3">
            <button onClick={() => {this.changeColor('blue')}} className="w3-btn w3-blue"></button>
          </div>
          <div className="w3-cell m3">
            <button onClick={() => {this.changeColor('indigo')}} className="w3-btn w3-indigo"></button>
          </div>
          <div className="w3-cell m3">
            <button onClick={() => {this.changeColor('purple')}} className="w3-btn w3-purple"></button>
          </div>
          <div className="w3-cell m3">
            <button onClick={() => {this.changeColor('khaki')}} className="w3-btn w3-khaki"></button>
          </div>
        </div>
        <div className="w3-row">
          <div className="w3-cell m3">
            <button onClick={() => {this.changeColor('black')}} className="w3-btn w3-black"></button>
          </div>
          <div className="w3-cell m3">
            <button onClick={() => {this.changeColor('brown')}} className="w3-btn w3-brown"></button>
          </div>
          <div className="w3-cell m3">
            <button onClick={() => {this.changeColor('gray')}} className="w3-btn w3-gray"></button>
          </div>
          <div className="w3-cell m3">
            <button onClick={() => {this.changeColor('lightgray')}} className="w3-btn w3-lightgray"></button>
          </div>
        </div>
      </div>
    );
  }
}
