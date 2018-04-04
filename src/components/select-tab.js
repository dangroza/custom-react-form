import React, { Component } from 'react';
import Select, { Creatable, Async, AsyncCreatable } from 'react-select-plus';
import 'react-select-plus/dist/react-select-plus.css';
import validator from 'validator';
import TooltipLink from './tooltip-link';

class SelectTab extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.getOptions = this.getOptions.bind(this);
  }

  onChange(selectedOption) {
    let selectedValue = null;
    console.log(selectedOption);
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

  get customSelectClass() {
    const { allowNew, async } = this.props;
    if (allowNew && async) return AsyncCreatable;
    if (async) return Async;
    if  (allowNew) return Creatable;
    return Select;
  }

  getOptions(input) {
    if (!this.props.url) return { options: [] };
    const optionKey = this.props.urlParam || 'key';
    return fetch(`${this.props.url}?${optionKey}=${input}`)
      .then((response) => {
        return response.json();
      }).then((json) => {
        return { options: json };
      });
  }

  render() {
    const { label, id, mandatory, options, multi, value, errors, ...domProps} = this.props;
    const mandatoryMark = mandatory ? (<span>*</span>): '';
    let labelClass = ['label-section'];
    labelClass.push((errors && errors.length > 0) ? 'error' : '');
    let SelectPlusComponent = this.customSelectClass;
    let customProps = {};
    if (this.props.async) customProps.loadOptions = this.getOptions;
    return (
      <div className="form-group">
        <label className={labelClass.join(' ')} htmlFor={id}>{label} {mandatoryMark} {this.tooltipLink}</label>
        <SelectPlusComponent
          name={this.props.name}
          className="select-tab"
          value={value}
          options={options}
          multi={multi}
          placeholder={this.props.placeholder}
          onChange={this.onChange}
          {...customProps}
          />
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

export default SelectTab;
