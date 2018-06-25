import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

Button.propTypes = {
  buttonTag: PropTypes.string.isRequired
}

export default Button;
