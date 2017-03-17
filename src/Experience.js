import React from 'react';

export default class Experience extends React.Component {

  render() {

    return (
        <div className="w3-container w3-card-2 w3-white w3-margin-bottom">
          <h2 className="w3-text-grey w3-padding-16">
            <i className={"w3-margin-right material-icons w3-xxlarge w3-cell-middle " + this.props.theme.textColor}>business_center</i>
            Work Experience
          </h2>
          <div className="w3-container">
            <h5 className="w3-opacity">
              <b>Ping4 Inc | Nashua, NH</b>
            </h5>
            <h6 className={this.props.theme.textColor}>
              <i className="w3-margin-right material-icons w3-cell-middle">date_range</i>
              June 2016 - &nbsp;
              <span className={'w3-tag w3-round ' + this.props.theme.color}>Current</span>
            </h6>
            <p>
              Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in
              deserunt aspernatur est reprehenderit sunt hic. Nulla tempora
              soluta ea et odio, unde doloremque repellendus iure, iste.
            </p>
            <hr/>
          </div>
          <div className="w3-container">
            <h5 className="w3-opacity">
              <b>UNH Manchester | Manchester, NH</b>
            </h5>
            <h6 className={this.props.theme.textColor}>
              <i className="w3-margin-right material-icons w3-cell-middle">date_range</i>
              September 2015 - May 2016
            </h6>
            <p>
              Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in
              deserunt aspernatur est reprehenderit sunt hic. Nulla tempora
              soluta ea et odio, unde doloremque repellendus iure, iste.
            </p>
            <hr/>
          </div>
          <div className="w3-container">
            <h5 className="w3-opacity">
              <b>Single Digits | Bedford, NH</b>
            </h5>
            <h6 className={this.props.theme.textColor}>
              <i className="w3-margin-right material-icons w3-cell-middle">date_range</i>
              February 2014 - April 2015
            </h6>
            <p>
              Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in
              deserunt aspernatur est reprehenderit sunt hic. Nulla tempora
              soluta ea et odio, unde doloremque repellendus iure, iste.
            </p>
            <hr/>
          </div>
          <div className="w3-container">
            <h5 className="w3-opacity">
              <b>FairPoint Communications | Manchester, NH</b>
            </h5>
            <h6 className={this.props.theme.textColor}>
              <i className="w3-margin-right material-icons w3-cell-middle">date_range</i>
              January 2012 - January 2013
            </h6>
            <p>
              Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in
              deserunt aspernatur est reprehenderit sunt hic. Nulla tempora
              soluta ea et odio, unde doloremque repellendus iure, iste.
            </p>
            <br/>
          </div>
      </div>
    );
  }
}
