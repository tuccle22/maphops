import React from 'react';
import './App.css';
import Languages from './Languages.js';
import Experience from './Experience.js';
import Education from './Education.js';
import Photo from './Photo.js';
import Frameworks from './Frameworks.js';
import ContactInfo from './ContactInfo.js';
import Footer from './Footer.js';


export default class Resume extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <div className="w3-content w3-center w3-wide">
          <p className="w3-text-white w3-text-shadow">Resume | Tucker Cleary</p>
        </div>
        <div className="w3-content w3-margin-top">
          <div className="w3-row-padding">
            <div className="w3-third">
              <div className="w3-white w3-text-grey w3-card-2">
                <Photo />
                <ContactInfo />
                <Frameworks />
                <Languages />
                <br/>
              </div>
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
