import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'validator/lib/isEmpty';
import isURL from 'validator/lib/isURL';
import TooltipLink from './tooltip-link';
import { defaultValidationMessages } from './../utils';

class Url extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onChange   = this.onChange.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  componentDidMount() {
    if (this.props.updateOnMount) {
      this.props.updateField({
        ...this.props,
        errors: this.validationErrors(this.props.value),
        showErrors: this.props.showErrors,
        fromInit: true
      });
    }
  }

  onChange(event) {
    const value = event.currentTarget.value;
    this.props.updateField({
      id: this.props.id,
      value: value,
      errors: this.validationErrors(value),
      showErrors: true
    });
  }

  onKeyPress(e) {
    if (this.props.allowOnlyPaste) {
      e.preventDefault();
    }
  }

  validationErrors(value) {
    const currentValue = String(value);
    let errors = [];
    if (this.props.mandatory && isEmpty(currentValue)) {
      errors.push(this.props.errorMessages.mandatory || defaultValidationMessages.mandatory);
    }
    if (!isEmpty(currentValue) && !isURL(currentValue)) {
      errors.push(this.props.errorMessages.invalidURL || defaultValidationMessages.invalidURL);
    }
    return errors;
  }

  render() {
    const { fromInit, label, allowOnlyPaste, mandatory, errors, updateField, showErrors, errorMessages, tooltip, formGroupClassName, updateOnMount, ...domProps } = this.props;
    const mandatoryMark = mandatory ? (<span>*</span>): '';
    let formGroupClasses = ['form-group', formGroupClassName];
    formGroupClasses.push(showErrors && errors.length > 0 ? 'has-error' : '');

    return (
      <div className={formGroupClasses.join(' ')}>
        <label htmlFor={this.props.id}>
          {label}
          {mandatoryMark}
          {tooltip && <TooltipLink tooltip={tooltip} />}
        </label>
        <input
          id={this.props.id}
          {...domProps}
          onChange={this.onChange}
          onKeyPress={this.onKeyPress}
        />
        {showErrors && errors.length > 0 && <div className='error'>{errors}</div>}
      </div>
    );
  }
}

Url.defaultProps = {
  formGroupClassName: '',
  errors: [],
  errorMessages: {},
  allowOnlyPaste: false,
  updateOnMount: true
};

Url.propTypes = {
  updateField: PropTypes.func.isRequired
};

export default Url;
