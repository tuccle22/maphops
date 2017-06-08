import React from 'react';

export default class ContactInfo extends React.Component {

  render() {

    var styles =
      'material-icons '  +
      'w3-margin-right ' +
      'w3-cell-middle '  +
      this.props.theme.hover + ' ' +
      this.props.theme.textColor;

    return (
      <div className="w3-container w3-padding-24">
        <p>
          <i className={styles}>devices</i>
          Software Developer
        </p>
        <a href="http://maps.google.com/?q=New%20Hampshire">
          <p className={this.props.theme.hover}><i className={styles}>home</i>
            Anywhere, NH
          </p>
        </a>
        <a href="tel:7039260268">
          <p className={this.props.theme.hover}><i className={styles}>phone</i>
            (123) 456-7890
          </p>
        </a>
        <a href="mailto:tuccle22@gmail.com">
          <p className={this.props.theme.hover}><i className={styles}>email</i>
          username@gmail.com
          </p>
        </a>
      </div>
    );
  }
}
