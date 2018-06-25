import React, { Component } from 'react';
import PropTypes from 'prop-types';
import validator from 'validator';
import TooltipLink from './tooltip-link';

class Input extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.props.updateField({
      ...this.props,
      showErrors: false,
      errors: this.validationErrors(this.props.value)
    });
  }

  onChange(event) {
    const value = event.currentTarget.value;
    this.props.updateField(
      {
        ...this.props,
        value: value,
        errors: this.validationErrors(value),
        showErrors: true
      }
    );
  }

  validationErrors(value) {
    let errors = [];
    if (this.props.customValidator) {
      errors = this.props.customValidator(this.props, value);
    }
    if (this.props.mandatory && validator.isEmpty(value)) {
      errors = [`${this.props.label} is required`];
    }
    return errors;
  }

  render() {
    const { label, id, mandatory, errors, updateField, showErrors, tooltip, formGroupClassName, ...domProps} = this.props;
    const mandatoryMark = mandatory ? (<span>*</span>): '';
    let formGroupClasses = ['form-group', formGroupClassName];
    formGroupClasses.push(showErrors && errors.length > 0 ? 'has-error' : '');

    return (
      <div className={formGroupClasses.join(' ')}>
        <label htmlFor={id}>
          {label}
          {mandatoryMark}
          {tooltip && <TooltipLink tooltip={tooltip} />}
        </label>
        <input id={id}
          {...domProps}
          onChange={this.onChange}
        />
        {showErrors && errors.length > 0 && <div className='error'>{errors}</div>}
      </div>
    );
  }
}

Input.defaultProps = {
  formGroupClassName: '',
  errors: []
};

Input.propTypes = {
  updateField: PropTypes.func.isRequired
};

export default Input;
