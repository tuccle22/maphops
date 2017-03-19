import React from 'react';

import github from './images/github.png';
import linkedin from './images/linkedin.png';
import ThemePicker from './ThemePicker.js';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: true
    };
  }

  onClick() {
    this.setState({isShown: !this.state.isShown});
  }

  render() {
    const icon = {
      width: '32px',
      height: '32px'
    }
    const small = {
      width: '16px',
      height: '16px'
    }

    return (
      <div width='100%' className='w3-content w3-white w3-padding-small w3-card-4 w3-margin-top'>
        <h3 className='w3-text-black w3-center w3-wide'>
          <a href='https://www.linkedin.com/in/tuccle22' className='w3-left w3-padding-small'>
            <img alt={this.props.linkedin} src={linkedin} style={icon}/>
          </a>
            <span style={{cursor: 'pointer'}} onClick={this.onClick.bind(this)}>
              Resume
            </span>
          <a href='https://www.github.com/tuccle22' className='w3-right w3-padding-small'>
            <img alt={this.props.github} src={github} style={icon}/>
          </a>
        </h3>
        {!this.state.isShown ?
          <div className='w3-modal w3-show'>
            <div className='w3-modal-content w3-card-8 w3-animate-top'>
              <ThemePicker shouldMount={this.onClick.bind(this)}/>
            </div>
          </div>
          : ''
        }
      </div>
    );
  }
}
