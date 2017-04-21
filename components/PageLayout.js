import React, { Component } from 'react';
import Head from 'next/head';

export default class PageLayout extends Component {
  render() {
    return (
      <div className="page-layout">
        <style jsx>{`
          div.page-layout {
            background-color: white !important;
            font-family: 'Helvetica Neue';
            font-weight: 300;
            margin: 18px 8px;
            padding: 0;
            position: absolute;
            top: 0;
            left: 0;
          }
        `}</style>
        {this.props.children}
      </div>
    )
  }
}
