import React from 'react';
import logo from './self.jpg';


export default class LeftSide extends React.Component {

  render() {

    const avatar = { width: "100%", alt: "photo" }

    const java = { height: "16px", width: "90%" }
    const python = { height: "16px", width: "80%" }
    const csharp = { height: "16px", width: "65%" }
    const ruby = { height: "16px", width: "25%" }
    const perl = { height: "16px", width: "20%" }
    const javascript = { height: "16px", width: "85%" }
    const htmlcss = { height: "16px", width: "70%" }

    return (
      <div>
        <div className="w3-white w3-text-grey w3-card-2">
          <div className="w3-display-container">
            <img src={logo} style={avatar}/>
            <div className="w3-display-bottomleft w3-container w3-text-white">
              <h2>Tucker Cleary</h2>
            </div>
          </div>
          <div className="w3-container">
            <p><i className="material-icons w3-margin-right w3-cell-middle w3-text-teal">devices</i>
              Software Developer
            </p>
            <a href="http://maps.google.com/?q=Bedford, NH">
              <p><i className="material-icons w3-margin-right w3-cell-middle w3-text-teal">home</i>
                Bedford, NH
              </p>
            </a>
            <a href="tel:7039260268">
              <p><i className="material-icons w3-margin-right w3-cell-middle w3-text-teal">phone</i>
                (703) 926-0268
              </p>
            </a>
            <a href="mailto:tuccle22@gmail.com">
              <p><i className="material-icons w3-margin-right w3-cell-middle w3-text-teal">email</i>
              tuccle22@gmail.com
              </p>
            </a>
            <a href="https://www.github.com/tuccle22">
              <p><i className="material-icons w3-margin-right w3-cell-middle w3-text-teal">code</i>
                GitHub
              </p>
            </a>
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
              <hr/>
            <p className="w3-large w3-text-theme">
              <b>
                <i className="material-icons w3-margin-right w3-cell-middle w3-text-teal">language</i>
                Languages
              </b>
            </p>
            <p>Java</p>
            <div className="w3-light-grey w3-round-xlarge">
              <div className="w3-round-xlarge w3-teal" style={java} />
            </div>
            <p>Python</p>
            <div className="w3-light-grey w3-round-xlarge">
              <div className="w3-round-xlarge w3-teal" style={python}/>
            </div>
            <p>C#</p>
            <div className="w3-light-grey w3-round-xlarge">
              <div className="w3-round-xlarge w3-teal" style={csharp}/>
            </div>
            <p>Ruby</p>
            <div className="w3-light-grey w3-round-xlarge">
              <div className="w3-round-xlarge w3-teal" style={ruby}/>
            </div>
            <p>Perl</p>
            <div className="w3-light-grey w3-round-xlarge">
              <div className="w3-round-xlarge w3-teal" style={perl}/>
            </div>
            <p>Javascript</p>
            <div className="w3-light-grey w3-round-xlarge">
              <div className="w3-round-xlarge w3-teal" style={javascript}/>
            </div>
            <p>HTML/CSS</p>
            <div className="w3-light-grey w3-round-xlarge">
              <div className="w3-round-xlarge w3-teal" style={htmlcss}/>
            </div>
            <br/>
          </div>
        </div>
      </div>
    );
  }
}
