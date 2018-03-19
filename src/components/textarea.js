import React, { Component } from 'react';
import validator from 'validator';
import TooltipLink from './tooltip-link';

class Textarea extends Component {
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
    return errors;
  }

  render() {
    const { label, id, mandatory, errors, ...domProps} = this.props;
    const mandatoryMark = mandatory ? (<span>*</span>): '';
    let labelClass = [];
    labelClass.push((errors && errors.length > 0) ? 'error' : '');

    return (
      <div className="form-group">
        <label className={labelClass.join(' ')} htmlFor={id}>{label} {mandatoryMark} {this.tooltipLink}</label>
        <textarea
          id={id}
          rows="3"
          onChange={this.onChange}
          placeholder={this.props.placeholder} />
          {this.fieldErrors}
      </div>
    );
  }

    get tooltipLink() {
      return (<TooltipLink tooltip={this.props.tooltip} />);
    }

    get fieldErrors(){
      return (<div className='error'>{this.props.errors}</div>);
    }
}

export default Textarea;
