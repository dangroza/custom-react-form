import React, { Component } from 'react';
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
    let value = event.currentTarget.value;
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
      errors = [`${this.props.label} is required.`];
    }
    return errors;
  }

  render() {
    const { label, id, mandatory, errors, updateField, showErrors, formGroupClassName, ...domProps} = this.props;
    const mandatoryMark = mandatory ? (<span>*</span>): '';
    let labelClass = ['label-section'];
    labelClass.push((showErrors && errors && errors.length > 0) ? 'error' : '');
    return (
      <div className={`form-group ${formGroupClassName}`}>
        <label className={labelClass.join(' ')} htmlFor={id}>{label} {mandatoryMark} {this.tooltipLink}</label>
        <input id={id}
          {...domProps}
          onChange={this.onChange}
        />
        {this.fieldErrors}
      </div>
    );
  }

  get tooltipLink() {
    return (<TooltipLink tooltip={this.props.tooltip} />);
  }

  get fieldErrors(){
    if (!this.props.showErrors) return;
    return (<div className='error'>{this.props.errors}</div>);
  }
}

Input.defaultProps = {
  formGroupClassName: ''
};

export default Input;
