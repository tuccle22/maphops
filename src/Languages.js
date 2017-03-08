import React from 'react';

export default class LeftSide extends React.Component {

  render() {

    const java = { height: "16px", width: "90%" };
    const python = { height: "16px", width: "80%" };
    const csharp = { height: "16px", width: "65%" };
    const ruby = { height: "16px", width: "25%" };
    const perl = { height: "16px", width: "20%" };
    const javascript = { height: "16px", width: "85%" };
    const htmlcss = { height: "16px", width: "70%" };

    return (
      <div>
          <div className="w3-container">
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
          </div>
      </div>
    );
  }
}
