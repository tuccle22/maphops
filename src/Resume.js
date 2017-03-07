import React from 'react';
import './App.css';
import LeftSide from './LeftSide.js';
import Experience from './Experience.js';
import Education from './Education.js';
import Footer from './Footer.js';


export default class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: "hide",
    }
  }
  
  componentWillMount() {
    this.setState({animation: "slideUp"})
  }

  render() {

    return (
      <div className={this.state.animation}>
        <div className="w3-content w3-margin-top">
          <div className="w3-row-padding">
            <div className="w3-third">
              <LeftSide />
              <br/>
            </div>
            <div className="w3-twothird">
              <Experience />
              <Education />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
