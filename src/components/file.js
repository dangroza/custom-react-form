import React, { Component } from 'react';
import validator from 'validator';

class File extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    let field = event.currentTarget;
    this.props.updateField(
      {
        ...this.props,
        value: field.value,
        files: field.files,
        errors: this.validationErrors(field.value, field.files),
        showErrors: true
      }
    );
  }

  validationErrors(value, files) {
    let errors = [];
    if (this.props.mandatory && validator.isEmpty(value)) {
      errors.push(`${this.props.label} is required.`);
    }
    return errors;
  }

  render() {
    const { label, id, mandatory, errors, showErrors, updateField, ...domProps} = this.props;
    const mandatoryMark = mandatory ? (<span>*</span>): '';
    let labelClass = ['label-section'];
    labelClass.push((errors && errors.length > 0) ? 'error' : '');
    return (
      <div className="form-group">
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
    return (<div className='error'>{this.props.errors}</div>);
  }
}

export default File;
