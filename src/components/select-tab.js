import React, { Component } from 'react';
import Select from 'react-select-plus';
import 'react-select-plus/dist/react-select-plus.css';
import validator from 'validator';

class SelectTab extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(selectedOption) {
    let selectedValue = null;
    if (Array.isArray(selectedOption)) {
      selectedValue = selectedOption.map(o => { return o.value });
    } else {
      selectedValue = selectedOption ? selectedOption.value : '';
    }
    this.props.onChange(
      {
        type: this.props.type,
        id: this.props.id,
        value: selectedValue,
        errors: this.validationErrors(selectedValue)
    });
  }

  validationErrors(currentValue) {
    let errors = [];
    if (this.props.mandatory) {
      const mandatoryError = `${this.props.label} is required.`;
      if (Array.isArray(currentValue)) {
        if (currentValue.length < 1) { errors.push(mandatoryError); }
      } else {
        if (validator.isEmpty(currentValue)) { errors.push(mandatoryError); }
      }
    }
     return errors;
  }

  render() {
    const { label, id, mandatory, options, multi, value, errors, ...domProps} = this.props;
    const mandatoryMark = mandatory ? (<span>*</span>): '';
    let labelClass = ['label-section'];
    labelClass.push((errors && errors.length > 0) ? 'error' : '');
    return (
      <div className="form-group">
        <label className={labelClass.join(' ')} htmlFor={id}>{label} {mandatoryMark}</label>
        <Select
          name={this.props.name}
          className="select-tab"
          value={value}
          options={options}
          multi={multi}
          placeholder={this.props.placeholder}
          onChange={this.onChange} />
        {this.fieldErrors}
      </div>
    );
  }
  get fieldErrors(){
    return (<div className='error'>{this.props.errors}</div>);
  }
}

export default SelectTab;
