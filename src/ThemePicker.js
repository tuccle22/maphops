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

  // onClick(key) {
  //   ThemeActions.changeColor(Themes.THEME[key]);
  //   this.props.shouldMount;
  // }

  render() {

    const something = {
      paddingLeft: '32px',
      paddingRight: '32px',
      background:'#f1f1f1'
    }

    const size = {
      width: '48px',
      height: '48px',
      cursor: 'pointer'

    }

    const test = Object.keys(Themes.THEME).map((key) => {

      var selected = Themes.THEME[key] === this.state.theme ? ' w3-disabled' : '';
        return (
          <button key={key}
                  style={size}
                  className={'w3-margin w3-button w3-xlarge w3-circle \
                              w3-border w-center w3-animate-zoom ' +
                              Themes.THEME[key].classColor + selected}
                  onClick={this.props.shouldMount}
                  onMouseOver={() => ThemeActions.tempColorChange(Themes.THEME[key])}
                  onMouseOut={() => ThemeActions.prevColor(Themes.THEME[key])}>
          </button>
        );
    });

    return(
      <div>
        <div className={'w3-bar ' + this.state.theme.classColor}>
          <h4 className='w3-center w3-padding-16'>
            Choose a color:
          </h4>
        <div/>
          <div style={something} className='w3-white w3-padding-32 w3-center w3-padding-8'>
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
