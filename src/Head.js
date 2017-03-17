import React from 'react';
import Helmet from 'react-helmet';
import Resume from './Resume.js';

export default class Head extends React.Component {

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
                  {name: 'theme-color', content: '#ff9800'},
                  {name: 'msapplication-navbutton-color', content: '#ff9800'},
                  {name: 'apple-mobile-web-app-capable', content: 'yes'},
                  {name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent'}
                ]}
                link={[
                  {rel:'stylesheet', href: 'https://www.w3schools.com/lib/w3.css'},
                  {rel:'stylesheet', href: 'https://fonts.googleapis.com/css?family=PT+Serif'},
                  {rel:'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'},
                  {rel: 'apple-touch-icon', sizes: '180x180', href: '/images/head/apple-touch-icon.png'},
                  {rel: 'mask-icon', href: 'images/head/safari-pinned-tab.svg', color: '#5bbad5'},
                  {rel: 'icon', type: 'image/png', href: '/images/head/favicon-16x16.png', sizes: '16x16'},
                  {rel: 'icon', type: 'image/png', href: '/images/head/favicon-32x32.png', sizes: '32x32'},
                ]}
                style={[
                  {type: 'text/css', cssText: 'body {background-color: w3-green;}'}
                ]}
            />
        </div>
    );
  }
}
