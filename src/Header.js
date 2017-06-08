import React from 'react';
import github from './images/github.png';
import ThemePicker from './ThemePicker'
import linkedin from './images/linkedin.png';
import './Animation.scss';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: true
    };
  }

  onClick() {
    console.log('clicked')
    this.setState({isShown: !this.state.isShown});
  }

  render() {
    const icon = {
      width: '32px',
      height: '32px'
    }

    return (
      <div width='100%' className='w3-content w3-white w3-padding-small w3-card-4 w3-margin-top'>
        <h3 className='w3-text-black w3-center w3-wide' style={{marginBottom: '20px'}}>
          <a href='https://www.linkedin.com/in/tuccle22' className='w3-left'>
            <img alt={this.props.linkedin} src={linkedin} style={icon}/>
          </a>
            <span style={{cursor: 'pointer'}} onClick={this.onClick.bind(this)}>
              Resume
            </span>
          <a href='https://www.github.com/tuccle22' className='w3-right'>
            <img alt={this.props.github} src={github} style={icon}/>
          </a>
        </h3>
          {this.state.isShown ?
            <div className='w3-modal w3-show'>
              <div className='w3-modal-content w3-card-8'>
                <ThemePicker shouldMount={this.onClick.bind(this)}/>
              </div>
            </div>
          : '' }
      </div>
    );
  }
}
