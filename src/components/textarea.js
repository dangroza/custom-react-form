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
      errors = [`${this.props.label} is required.`];
    }
    return errors;
  }

  render() {
    const { label, id, value, mandatory, errors, showErrors, ...domProps} = this.props;
    const mandatoryMark = mandatory ? (<span>*</span>): '';
    let labelClass = [];
    labelClass.push((showErrors && errors && errors.length > 0) ? 'error' : '');

    return (
      <div className="form-group">
        <label className={labelClass.join(' ')} htmlFor={id}>{label} {mandatoryMark} {this.tooltipLink}</label>
        <textarea
          id={id}
          rows="3"
          onChange={this.onChange}
          value={value}
          placeholder={this.props.placeholder} />
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

export default Textarea;
