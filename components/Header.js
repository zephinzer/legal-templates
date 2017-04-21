import React, { Component } from 'react';

export default class Section extends Component {
  render() {
    return (
      <header>
        <h1>{this.props.children}</h1>
        {
          (this.props.subHeader) ?
            <subheader>{this.props.subHeader}</subheader>
            : <span></span>
        }
      </header>
    );
  }
};
