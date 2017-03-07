import React from 'react';
import logo from './self.jpg';


export default class Photo extends React.Component {

  render() {

    const avatar = { width: "100%", alt: "photo" };

    return (
      <div className="w3-display-container">
        <img src={logo} style={avatar}/>
        <div className="w3-display-bottomleft w3-container w3-text-white">
          <h2>Tucker Cleary</h2>
        </div>
      </div>
    );
  }
}
