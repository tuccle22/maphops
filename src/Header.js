import React from 'react';

import github from './github.png';
import linkedin from './linkedin.png';

export default class Header extends React.Component {

  render() {

    const icon = {
      width: '32px',
      height: '32px'
    }

    return (

      <div width='100%' className='w3-content w3-white w3-padding-small w3-card-4 w3-margin-top'>
        <h3 className='w3-text-black w3-center w3-wide'>
        <a href='https://www.linkedin.com/in/tuccle22' className='w3-left w3-padding-small'>
          <img alt={this.props.linkedin} src={linkedin} style={icon}
          />
        </a>
          Resume
          <a href='https://www.github.com/tuccle22' className='w3-right w3-padding-small'>
            <img alt={this.props.github} src={github} style={icon}
            />
          </a>
        </h3>
      </div>
    );
  }
}
