import React, { Component } from 'react';
import Select from 'react-select-plus';
import 'react-select-plus/dist/react-select-plus.css';

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
        errors: []
    });
  }

  render() {
    const { label, id, mandatory, options, multi, value, errors, ...domProps} = this.props;
    return (
      <div className="form-group">
        <label>{label}</label>
        <Select
          name={this.props.name}
          className="select-tab"
          value={value}
          options={options}
          multi={multi}
          placeholder={this.props.placeholder}
          onChange={this.onChange} />
      </div>
    );
  }
}

export default SelectTab;
