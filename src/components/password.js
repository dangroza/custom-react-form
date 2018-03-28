import React, { Component } from 'react';
import TooltipLink from './tooltip-link';

class Password extends Component {
  render() {
    return (
      <div className="form-group">
        <label htmlFor={this.props.id}>{this.props.label} {this.tooltipLink}</label>
        <input type={this.props.type} placeholder={this.props.placeholder}/>
      </div>
    );
  }

  get tooltipLink() {
    return (<TooltipLink tooltip={this.props.tooltip} />);
  }
}

export default Password;
