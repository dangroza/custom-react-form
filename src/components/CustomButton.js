import React, { Component } from 'react';

class CustomButton extends Component {
  render() {
    let disabledAttribute = this.props.disabled ? 'disabled' : '';
    return (<button {...this.props} disabled={disabledAttribute}>{this.props.id}</button>)
  }
}
export default CustomButton;
