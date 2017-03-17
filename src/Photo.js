import React from 'react';
import logo from './self.jpg';

export default class Photo extends React.Component {

  render() {

    return (
      <div>
        <div className='w3-display-container'>
          <img alt={this.props.altPhoto}
               src={logo}
               style={{width: '100%'}}/>
          <div className='w3-display-bottomleft w3-container w3-text-white'>
            <h4>Tucker Cleary</h4>
          </div>
        </div>
      </div>
    );
  }
}
