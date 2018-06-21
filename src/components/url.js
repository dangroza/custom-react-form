import React, { Component } from 'react';
import validator from 'validator';

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
    let errors = [];
    if (this.props.mandatory && validator.isEmpty(value)) {
      errors.push(`${this.props.label} is required.`);
    }
    if (!validator.isEmpty(value) && !validator.isURL(value)) {
      errors.push('Please enter a valid URL');
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
        <label className={labelClass.join(' ')} htmlFor={id}>{label} {mandatoryMark}</label>
        <input id={id}
          {...domProps}
          onChange={this.onChange}
        />
        {this.fieldErrors}
      </div>
    );
  }
  get fieldErrors(){
    if (!this.props.showErrors) return;
    return (<div className='error'>{this.props.errors}</div>);
  }
}

Url.defaultProps = {
  formGroupClassName: ''
};

export default Url;
