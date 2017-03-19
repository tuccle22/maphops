import Reflux from 'reflux';
import { ThemeActions } from './RefluxActions.js';
import Themes from '../Themes.js';

export default class ThemeStore extends Reflux.Store {

  constructor(props) {
    super(props);
    this.state = {theme: Themes.THEME.CYAN};
    this.listenTo(ThemeActions.changeColor, this.onChangeColor);
  }

  onChangeColor(theme) {
    this.setState({theme: theme});
  }
}
