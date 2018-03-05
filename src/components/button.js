import React, { Component } from 'react';

class Button extends Component {
  render() {
    let disabledAttribute = this.props.disabled ? 'disabled' : '';
    return (<button {...this.props} disabled={disabledAttribute}>{this.props.id}</button>)
  }
}
export default Button;
