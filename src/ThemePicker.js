import React from 'react';
import Themes from './Themes.js';
import { ThemeActions } from './reflux/RefluxActions.js';
import ThemeStore from './reflux/ThemeStore.js';
import Reflux from 'reflux';

export default class ThemePicker extends Reflux.Component {
  constructor(props) {
    super(props);
    this.state = { };
    this.store = ThemeStore;
  }

  render() {

    const size = {
      width: '32px',
      height: '32px',
      margin: '16px'
    }

    const test = Object.keys(Themes.THEME).map((key) => {
        return (
          <button key={key}
                  onClick={this.props.shouldMount}
                  style={size}
                  className={'w3-circle w3-button w-container ' + Themes.THEME[key].classColor}
                  onMouseOver={() => ThemeActions.changeColor(Themes.THEME[key])}>
                  <p></p>
          </button>
        );
    });

    return(
      <div>
        <div className={'w3-bar ' + this.state.theme.classColor}>
          <h4 className='w3-center'>
            Choose a color:
          </h4>
        <div/>
          <div style={{background:'#f1f1f1'}} className='w3-center w3-padding-8'>
            {test}
          </div>
        </div>
        <footer className={'w3-container w3-padding-8 ' + this.state.theme.classColor}>
          <button onClick={this.props.shouldMount} className={'w3-right w3-button ' + this.state.theme.textColor}>Close</button>
        </footer>
      </div>
    );
  }
}
