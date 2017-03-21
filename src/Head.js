import React from 'react';
import Reflux from 'reflux';
import Helmet from 'react-helmet';
import Resume from './Resume.js';
import ThemeStore from './reflux/ThemeStore.js';

export default class Head extends Reflux.Component {

  constructor(props) {
    super(props);
    this.state = {}; // our store will add its own state to the component's
    this.store = ThemeStore;
  }

  render() {

    return (
        <div className='application'>
          <Resume />
            <Helmet
                htmlAttributes={{lang: 'en', amp: undefined}}
                title='Resume'
                meta={[
                  {charset: 'utf-8'},
                  {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                  {name: 'theme-color', content: this.state.theme.color},
                  {name: 'msapplication-navbutton-color', content: 'this.state.theme.color'},
                  {name: 'apple-mobile-web-app-capable', content: 'yes'},
                  {name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent'}
                ]}
                link={[
                  {rel: 'stylesheet', href: 'https://www.w3schools.com/lib/w3.css'},
                  {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=PT+Serif'},
                  {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'},
                  {rel: 'apple-touch-icon', sizes: '180x180', href: '/images/head/apple-touch-icon.png'},
                  {rel: 'mask-icon', href: 'images/head/safari-pinned-tab.svg', color: '#5bbad5'},
                  {rel: 'icon', type: 'image/png', href: '/images/head/favicon-16x16.png', sizes: '16x16'},
                  {rel: 'icon', type: 'image/png', href: '/images/head/favicon-32x32.png', sizes: '32x32'},
                ]}
                style={[
                  {type: 'text/css',
                    cssText:
                      'body {background: linear-gradient(180deg, ' + this.state.theme.color + ' 35vh, #f1f1f1 0vh);}'}
                ]}
            />
        </div>
    );
  }
}
