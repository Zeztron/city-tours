import React, { Component } from 'react'
import './Tour.scss';

export default class Tour extends Component {
  render() {
    return (
      <article className="tour">
          <div className="img-container">
                <img src="https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" alt="new york"/>
                <span className="close-btn">
                    <i className="fas fa-window-close"></i>
                </span>
          </div>
          <div className="tour-info">
                <h3>City</h3>
                <h4>Name</h4>
                <h5>Info <span><i className="fas fa-caret-square-down"></i></span></h5>
                <p>lorem</p>
          </div>
      </article>
    )
  }
}
