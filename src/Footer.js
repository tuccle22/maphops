import React from 'react';

export default class Footer extends React.Component {

  render() {

    return (
      <div className={'w3-text-white w3-container w3-center w3-margin-top ' + this.props.theme.classColor}>
        <h6 className='w3-padding-8'>
          <span>
            <i className="material-icons w3-cell-middle">copyright</i>&nbsp;
          </span>
          Tucker Cleary 2017
        </h6>
      </div>
    );
  }
}
