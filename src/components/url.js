import React, { Component } from 'react';
import PropTypes from 'prop-types';
import validator from 'validator';
import TooltipLink from './tooltip-link';

class Url extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.props.updateField(
      {
        ...this.props,
        errors: this.validationErrors(this.props.value),
        showErrors: this.props.showErrors
      }
    );
  }

  onChange(event) {
    const field = event.currentTarget;
    this.props.updateField(
      {
        ...this.props,
        value: field.value,
        errors: this.validationErrors(field.value),
        showErrors: true
      }
    );
  }

  validationErrors(value) {
    let errors = [];
    if (this.props.mandatory && validator.isEmpty(value)) {
      errors.push(`${this.props.label} is required`);
    }
    if (!validator.isEmpty(value) && !validator.isURL(value)) {
      errors.push('Please enter a valid URL');
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
        <input id={id} {...domProps} onChange={this.onChange} />
        {showErrors && errors.length > 0 && <div className='error'>{errors}</div>}
      </div>
    );
  }
}

Url.defaultProps = {
  formGroupClassName: '',
  errors: []
};

Url.propTypes = {
  updateField: PropTypes.func.isRequired
};

export default Url;
