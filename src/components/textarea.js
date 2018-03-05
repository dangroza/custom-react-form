import React, { Component } from 'react';

class Textarea extends Component {
  render() {
    return (
      <div className="form-group">
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <textarea name={this.props.name} rows="3" type={this.props.type} placeholder={this.props.placeholder}></textarea>
      </div>
    );
  }
}

export default Textarea;
