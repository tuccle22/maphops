import React from 'react';
import Reflux from 'reflux';
import Languages from './Languages.js';
import Experience from './Experience.js';
import Education from './Education.js';
import Photo from './Photo.js';
import Frameworks from './Frameworks.js';
import ContactInfo from './ContactInfo.js';
import Header from './Header.js';
import Footer from './Footer.js';
import ThemeStore from './reflux/ThemeStore.js';

export default class Resume extends Reflux.Component {
  constructor(props) {
    super(props);
    this.state = { };
    this.store = ThemeStore;
  }

  render() {


    return (
      <div>
        <Header github='Github' linkedin='LinkedIn' />
        <div className="w3-content w3-margin-top">
          <div className="w3-row-padding">
            <div className="w3-third">
              <div className="w3-white w3-text-grey w3-card-2">
                <Photo altPhoto="Resume Photo"/>
              </div>
              <div className="w3-margin-bottom w3-white w3-text-grey w3-card-2">
                <ContactInfo theme={this.state.theme} />
              </div>
              <div className="w3-padding-16 w3-margin-bottom w3-white w3-text-grey w3-card-2">
                <Frameworks theme={this.state.theme}/>
              </div>
              <div className="w3-white w3-text-grey w3-card-2">
                <Languages theme={this.state.theme}/>
              </div>
              <br/>
            </div>
            <div className="w3-twothird">
              <Experience theme={this.state.theme}/>
              <Education theme={this.state.theme}/>
            </div>
          </div>
        </div>
        <Footer theme={this.state.theme}/>
      </div>
    );
  }
}
