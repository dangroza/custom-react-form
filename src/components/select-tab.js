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
    const currentValue = (typeof this.props.value == 'string') ? this.props.value : this.formattedValue(this.props.value);
    this.props.updateField(
      {
        ...this.props,
        errors: this.validationErrors(currentValue),
        showErrors: false
    });
  }

  keyValueObject(object) {
    return (({ label, value }) => ({ label, value }))(object);
  }

  formattedValue(val) {
    let formattedValue = null;
    if (Array.isArray(val)) {
      formattedValue = val.map(o => { return o.value });
    } else {
      formattedValue = val ? val.value : '';
    }

    return formattedValue;
  }

  onChange(selectedOption) {
    let selectedValue = null;
    let selectedObj = null;
    if (Array.isArray(selectedOption)) {
      selectedValue = selectedOption.map(o => { return o.value });
      selectedObj = selectedOption.map(o => { return this.keyValueObject(o) });
    } else {
      selectedValue = selectedOption ? selectedOption.value : '';
      selectedObj = selectedOption ? this.keyValueObject(selectedOption) : '';
    }
    this.props.updateField(
      {
        ...this.props,
        value: selectedObj,
        errors: this.validationErrors(selectedValue),
        showErrors: true
    });
  }

  validationErrors(currentValue) {
    let errors;
    if (this.props.customValidator) {
      errors = this.props.customValidator(this.props, value);
    }
    if (this.props.mandatory) {
      errors = [];
      const mandatoryError = `${this.props.label} is required`;
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
    if (this.props.loadOptions) return this.props.loadOptions(input);
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
    const { label, id, mandatory, options, multi, value, errors, showErrors, formGroupClassName} = this.props;
    const mandatoryMark = mandatory ? (<span>*</span>): '';
    let formGroupClasses = ['form-group', formGroupClassName];
    formGroupClasses.push(showErrors && errors.length > 0 ? 'has-error' : '');
    let SelectPlusComponent = this.customSelectClass;
    let customProps = {};
    if (this.props.async) customProps.loadOptions = this.getOptions;
    return (
      <div className={formGroupClasses.join(' ')}>
        <label htmlFor={id}>{label} {mandatoryMark} {this.tooltipLink}</label>
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
        {showErrors && errors.length > 0 && <div className='error'>{errors}</div>}
      </div>
    );
  }

  get tooltipLink() {
    return (<TooltipLink tooltip={this.props.tooltip} />);
  }
}

SelectTab.defaultProps = {
  formGroupClassName: '',
  errors: []
};

export default SelectTab;
