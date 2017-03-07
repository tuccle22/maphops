import React from 'react';

export default class Education extends React.Component {

  render() {

    return (
      <div className="w3-container w3-card-2 w3-white w3-margin-bottom">
        <h2 className="w3-text-grey w3-padding-16">
          <i className="w3-margin-right w3-text-teal w3-xxlarge material-icons w3-cell-middle">school</i>
          Education
        </h2>
        <div className="w3-container">
          <h5 className="w3-opacity">
            <b>University of New Hampshire at Manchester</b>
          </h5>
          <p>B.S. in Computer Information Systems</p>
          <h6 className="w3-text-teal">
            <i className="w3-margin-right material-icons w3-cell-middle w3-text-teal">date_range</i>
            Graduated Spring 2017 Magna Cum Laude
          </h6>
          <br/>
        </div>
      </div>
    );
  }
}
