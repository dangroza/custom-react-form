import React, { Component } from 'react';
import './App.css';


class CustomTextarea extends Component {
  render() {
    return (
      <div className="form-group">
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <textarea name={this.props.name} rows="4" id="comment" type={this.props.type} placeholder={this.props.placeholder}></textarea>
      </div>
    );
  }
}

export default CustomTextarea;
