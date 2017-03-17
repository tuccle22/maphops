import React from 'react';

export default class Education extends React.Component {

  render() {

    return (
      <div className="w3-container w3-card-2 w3-white w3-margin-bottom">
        <h2 className="w3-text-grey w3-padding-16">
          <i className={'w3-margin-right w3-xxlarge material-icons w3-cell-middle ' + this.props.theme.textColor}>school</i>
          Education
        </h2>
        <div className="w3-container">
          <h5 className="w3-opacity">
            <b>University of New Hampshire at Manchester</b>
          </h5>
          <p>B.S. in Computer Information Systems</p>
          <h6 className={this.props.theme.textColor}>
            <i className={'w3-margin-right material-icons w3-cell-middle ' + this.props.theme.textColor}>date_range</i>
            Graduated Spring 2017 Magna Cum Laude
          </h6>
          <br/>
        </div>
      </div>
    );
  }
}
