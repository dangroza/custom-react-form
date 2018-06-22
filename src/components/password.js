import React, { Component } from 'react';
import TooltipLink from './tooltip-link';

class Password extends Component {
  // TODO: Add validations
  render() {
    return (
      <div className={`form-group ${this.props.formGroupClassName}`}>
        <label htmlFor={this.props.id}>
          {this.props.label}
          {this.props.tooltip && <TooltipLink tooltip={this.props.tooltip} />}
        </label>
        <input type={this.props.type} placeholder={this.props.placeholder}/>
      </div>
    );
  }
}

Password.defaultProps = {
  formGroupClassName: ''
};

export default Password;
