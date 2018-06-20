import React, { Component } from 'react';
import validator from 'validator';

class File extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const field = event.currentTarget;
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

  get fileName() {
    return (this.props.files && this.props.files[0]) ? this.props.files[0].name : '';
  }

  render() {
    const { label, id, className, mandatory, errors, placeholder, formGroupClassName, accept } = this.props;
    const mandatoryMark = mandatory ? (<span>*</span>): '';
    let formGroupClasses = ['form-group', formGroupClassName];
    formGroupClasses.push((errors && errors.length > 0) ? 'has-error' : '');

    return (
      <div className={formGroupClasses.join(' ')}>
        <label>{label} {mandatoryMark}</label>
        <input id={id} className='input-file' type='file' accept={accept} onChange={this.onChange}/>
        <div className='choose-file'>
          <label htmlFor={id}>{placeholder}</label>
          <div className={className}>{this.fileName}</div>
        </div>
        <div className='error'>{errors}</div>
      </div>
    );
  }
}

File.defaultProps = {
  id: 'file',
  formGroupClassName: ''
};

export default File;
