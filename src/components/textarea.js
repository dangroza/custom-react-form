import React, { Component } from 'react';
import validator from 'validator';
import TooltipLink from './tooltip-link';

class Textarea extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.props.updateField(
      {
        ...this.props,
        errors: this.validationErrors(this.props.value),
        showErrors: false
      }
    );
  }

  onChange(event) {
    let field = event.currentTarget;
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
    const initialValue = value || '';
    let errors = [];
    if (this.props.customValidator) {
      errors = this.props.customValidator(this.props, initialValue);
    }
    if (this.props.mandatory && validator.isEmpty(initialValue)) {
      errors = [`${this.props.label} is required`];
    }
    return errors;
  }

  render() {
    const { label, id, value, mandatory, errors, showErrors, ftooltip, formGroupClassName } = this.props;
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
        <textarea
          id={id}
          rows="3"
          onChange={this.onChange}
          value={value}
          placeholder={this.props.placeholder} />
        {showErrors && errors.length > 0 && <div className='error'>{errors}</div>}
      </div>
    );
  }
}

Textarea.defaultProps = {
  formGroupClassName: '',
  errors: []
};

export default Textarea;
