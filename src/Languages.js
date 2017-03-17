import React from 'react';

export default class LeftSide extends React.Component {

  render() {

    var styles = 'w3-round-xlarge ' + this.props.theme.color;

    const java = { height: "16px", width: "90%" };
    const python = { height: "16px", width: "80%" };
    const csharp = { height: "16px", width: "65%" };
    const ruby = { height: "16px", width: "25%" };
    const perl = { height: "16px", width: "20%" };
    const javascript = { height: "16px", width: "85%" };
    const htmlcss = { height: "16px", width: "70%" };

    return (
      <div  className="w3-container w3-padding-16">
        <div className="w3-large">
          <b>
            <i className={'material-icons w3-margin-right w3-cell-middle ' + this.props.theme.textColor}>language</i>
            Languages
          </b>
        </div>
        <p>Java</p>
        <div className="w3-light-grey w3-round-xlarge">
          <div className={styles} style={java}></div>
        </div>
        <p>Python</p>
        <div className="w3-light-grey w3-round-xlarge">
          <div className={styles} style={python}></div>
        </div>
        <p>C#</p>
        <div className="w3-light-grey w3-round-xlarge">
          <div className={styles} style={csharp}></div>
        </div>
        <p>Ruby</p>
        <div className="w3-light-grey w3-round-xlarge">
          <div className={styles} style={ruby}></div>
        </div>
        <p>Perl</p>
        <div className="w3-light-grey w3-round-xlarge">
          <div className={styles} style={perl}></div>
        </div>
        <p>Javascript</p>
        <div className="w3-light-grey w3-round-xlarge">
          <div className={styles} style={javascript}></div>
        </div>
        <p>HTML/CSS</p>
        <div className="w3-light-grey w3-round-xlarge">
          <div className={styles} style={htmlcss}></div>
        </div>
      </div>
    );
  }
}
