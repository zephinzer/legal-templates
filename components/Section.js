import React, { Component } from 'react';

export default class Section extends Component {
  render() {
    return (
      <section className="section">
        <h2>{Section.index++}. {this.props.title}</h2>
        {this.props.children}
      </section>
    );
  }
};

Section.index = 1;
