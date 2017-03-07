import React from 'react';

export default class Frameworks extends React.Component {

  render() {
    return (
      <div className="w3-container">
        <hr/>
        <p className="w3-large">
          <b>
            <i className="material-icons w3-margin-right w3-cell-middle w3-text-teal">stars</i>
            Frameworks
          </b>
        </p>
        <p>Android SDK</p>
        <div className="w3-light-grey w3-round-xlarge w3-small">
          <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width:"75%"}}>
            75%
          </div>
        </div>
        <p>React.js</p>
        <div className="w3-light-grey w3-round-xlarge w3-small">
          <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width:"70%"}}>
            70%
          </div>
        </div>
        <p>Django</p>
        <div className="w3-light-grey w3-round-xlarge w3-small">
          <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width:"30%"}}>
            30%
          </div>
        </div>
        <p>Rails</p>
        <div className="w3-light-grey w3-round-xlarge w3-small">
          <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width:"25%"}}>
            25%
          </div>
        </div>
      </div>
    );
  }
}
