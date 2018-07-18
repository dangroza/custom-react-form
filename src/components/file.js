import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'validator/lib/isEmpty';
import { defaultValidationMessages } from './../utils';

class File extends PureComponent {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const field = event.currentTarget;
    this.props.updateField({
      id: this.props.id,
      value: field.value,
      files: [field.files[0]],
      errors: this.validationErrors(field.value, field.files),
      showErrors: true
    });
  }

  validationErrors(value, files) {
    let errors = [];
    if (this.props.mandatory && isEmpty(String(value))) {
      errors.push(this.props.errorMessages.mandatory || defaultValidationMessages.mandatory);
    }
    return errors;
  }

  get fileName() {
    return (this.props.files && this.props.files[0]) ? this.props.files[0].name : this.props.value;
  }

  render() {
    const { label, id, className, mandatory, errors, showErrors, placeholder, formGroupClassName, accept } = this.props;
    const mandatoryMark = mandatory ? (<span>*</span>): '';
    let formGroupClasses = ['form-group', formGroupClassName];
    formGroupClasses.push(showErrors && errors.length > 0 ? 'has-error' : '');

    return (
      <div className={formGroupClasses.join(' ')}>
        <label>{label} {mandatoryMark}</label>
        <input id={id} className='input-file' type='file' accept={accept} onChange={this.onChange}/>
        <div className='choose-file'>
          <label htmlFor={id}>{placeholder}</label>
          <div className={className}>{this.fileName}</div>
        </div>
        {showErrors && errors.length > 0 && <div className='error'>{errors}</div>}
      </div>
    );
  }
}

File.defaultProps = {
  id: 'file',
  formGroupClassName: '',
  errors: [],
  errorMessages: {}
};

File.propTypes = {
  updateField: PropTypes.func.isRequired
};

export default File;
