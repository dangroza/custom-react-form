import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import validator from 'validator';
import TooltipLink from './tooltip-link';
import { defaultValidationMessages } from './../utils';

class Textarea extends PureComponent {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    if (this.props.updateOnMount) {
      this.props.updateField({
        ...this.props,
        errors: this.validationErrors(this.props.value),
        showErrors: false,
        fromInit: true
      });
    }
  }

  onChange(event) {
    let field = event.currentTarget;
    this.props.updateField({
      id: this.props.id,
      value: field.value,
      errors: this.validationErrors(field.value),
      showErrors: true
    });
  }

  validationErrors(value) {
    const initialValue = value || '';
    let errors = [];
    if (this.props.customValidator) {
      errors = this.props.customValidator(this.props, initialValue);
    }
    if (this.props.mandatory && validator.isEmpty(initialValue)) {
      errors = [this.props.errorMessages.mandatory || defaultValidationMessages.mandatory];
    }
    return errors;
  }

  render() {
    const { label, id, value, mandatory, errors, showErrors, tooltip, formGroupClassName } = this.props;
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
  errors: [],
  errorMessages: {},
  updateOnMount: true
};

Textarea.propTypes = {
  updateField: PropTypes.func.isRequired
};

export default Textarea;
