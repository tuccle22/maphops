import Reflux from 'reflux';
import { ThemeActions } from './RefluxActions.js';
import Themes from '../Themes.js';

export default class ThemeStore extends Reflux.Store {

  constructor(props) {
    super(props);
    this.state = {
      theme: Themes.THEME.CYAN,
      prevTheme: ''
    };
    this.listenTo(ThemeActions.changeColor, this.onChangeColor);
    this.listenTo(ThemeActions.prevColor, this.onPrevColor);
    this.listenTo(ThemeActions.tempColorChange, this.onTempColorChange);
  }

  onChangeColor(theme) {
    this.setState({theme: theme});
  }

  onTempColorChange(theme) {
    this.setState({prevTheme: this.state.theme});
    this.setState({theme: theme});
  }

  onPrevColor(theme) {
    this.setState({theme: this.state.prevTheme});
  }

}
