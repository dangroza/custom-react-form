import React, { Component } from 'react';
import validator from 'validator';

class Url extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    let field = event.currentTarget;
    this.props.onChange(
      {
        type: field.type,
        id: field.id,
        value: field.value,
        errors: this.validationErrors(field.value)
      }
    );
  }

  validationErrors(value) {
    let errors = [];
    if (this.props.mandatory && validator.isEmpty(value)) {
      errors.push(`${this.props.label} is required.`);
    }
    if (!validator.isEmpty(value) && !validator.isURL(value)) {
      errors.push(`"${value}" is not a valid url.`);
    }
    return errors;
  }

  render() {
    const { label, id, mandatory, errors, ...domProps} = this.props;
    const mandatoryMark = mandatory ? (<span>*</span>): '';
    let labelClass = ['label-section'];
    labelClass.push((errors && errors.length > 0) ? 'error' : '');
    return (
      <div className="form-input">
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

export default Url;
