import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { disabled, label, onClick, id, buttonTag, updateField, showErrors, ...domProps } = this.props;
    const disabledAttribute = disabled ? 'disabled' : '';
    return (
      <this.props.buttonTag
        key={id}
        id={id}
        className="btn"
        disabled={disabledAttribute}
        onClick={onClick} {...domProps}>
        {label}
      </this.props.buttonTag>
    );
  }
}
export default Button;
