import React from 'react';

export default class ContactInfo extends React.Component {

  render() {

    return (
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
      </div>
    );
  }
}
