import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Select, { Creatable, Async, AsyncCreatable } from 'react-select-plus';
import 'react-select-plus/dist/react-select-plus.css';
import validator from 'validator';
import TooltipLink from './tooltip-link';
import { defaultValidationMessages } from './../utils';

class SelectTab extends PureComponent {
  constructor(props) {
    super(props);
    this.onChange   = this.onChange.bind(this);
    this.getOptions = this.getOptions.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    // TODO: ADD FOR OTHERS ?
    if (this.reValidate(prevProps)) {
      this.props.updateField({
        id: this.props.id,
        value: this.props.value,
        errors: this.validationErrors(this.formattedValue(this.props.value))
      });
    }
  }

  componentDidMount() {
    if (this.props.updateOnMount) {
      const currentValue = (typeof this.props.value == 'string') ? this.props.value : this.formattedValue(this.props.value);
      this.props.updateField({
        ...this.props,
        errors: this.validationErrors(currentValue),
        showErrors: false,
        fromInit: true
      });
    }
  }

  reValidate(prevProps) {
    const { errors, showErrors } = this.props;
    return (
      (prevProps.showErrors != showErrors) && showErrors && errors.length == 0
    )
  }

  keyValueObject(object) {
    return (({ label, value }) => ({ label, value }))(object);
  }

  formattedValue(val) {
    let formattedValue = null;
    if (Array.isArray(val)) {
      formattedValue = val.map(o => o.value);
    } else {
      formattedValue = val ? val.value : '';
    }

    return formattedValue;
  }

  onChange(selectedOption) {
    let selectedValue = null;
    let selectedObj   = null;
    if (Array.isArray(selectedOption)) {
      selectedValue = selectedOption.map(o => o.value);
      selectedObj = selectedOption.map(o => this.keyValueObject(o));
    } else {
      selectedValue = selectedOption ? selectedOption.value : '';
      selectedObj = selectedOption ? this.keyValueObject(selectedOption) : '';
    }

    this.props.updateField({
      id: this.props.id,
      value: selectedObj,
      errors: this.validationErrors(selectedValue),
      showErrors: true
    });
  }

  validationErrors(currentValue) {
    let errors = [];
    if (this.props.customValidator) {
      errors = this.props.customValidator(this.props, value);
    }

    if (this.props.mandatory) {
      const mandatoryError = this.props.errorMessages.mandatory || defaultValidationMessages.mandatory;
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
    if (allowNew) return Creatable;
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
    const { label, id, mandatory, options, multi, value, errors, showErrors, tooltip, formGroupClassName, autoload } = this.props;
    const mandatoryMark = mandatory ? (<span>*</span>): '';
    let formGroupClasses = ['form-group', formGroupClassName];
    formGroupClasses.push(showErrors && errors.length > 0 ? 'has-error' : '');
    let SelectPlusComponent = this.customSelectClass;
    let customProps = {};
    if (this.props.async) customProps.loadOptions = this.getOptions;

    return (
      <div className={formGroupClasses.join(' ')}>
        <label htmlFor={id}>
          {label}
          {mandatoryMark}
          {tooltip && <TooltipLink tooltip={tooltip} />}
        </label>
        <SelectPlusComponent
          name={this.props.name}
          className="select-tab"
          value={value}
          options={options}
          multi={multi}
          placeholder={this.props.placeholder}
          onChange={this.onChange}
          autoload={autoload}
          {...customProps}
        />
        {showErrors && errors.length > 0 && <div className='error'>{errors}</div>}
      </div>
    );
  }
}

SelectTab.defaultProps = {
  formGroupClassName: '',
  errors: [],
  autoload: false,
  errorMessages: {},
  updateOnMount: true
};

SelectTab.propTypes = {
  updateField: PropTypes.func.isRequired
};

export default SelectTab;
