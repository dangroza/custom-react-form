import React, { Component } from 'react';

class CustomPassword extends Component {
  render() {
    return (
      <div className="form-inputs">
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <input type={this.props.type} placeholder={this.props.placeholder}/>
      </div>
    );
  }
}

export default CustomPassword;
