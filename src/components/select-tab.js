import React, { Component } from 'react';
import Select from 'react-select-plus';
import 'react-select-plus/dist/react-select-plus.css';

class SelectTab extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(selectedOption) {
    let modifiedValue = '';
    if (this.props.multi) {
      if (selectedOption.length > 0) {
        let selected = selectedOption[0].value;
        if (this.props.value.includes(selected)) {
          modifiedValue = this.props.value.filter(f => f != selected);
        } else {
          modifiedValue = [...this.props.value, selected];
        }
      } else {
        modifiedValue = [];
      }
    } else {
      if (selectedOption) {
        modifiedValue = (this.props.value == selectedOption.value) ? '' : selectedOption.value;
      }
    }

    this.props.onChange(
      {
        type: this.props.type,
        id: this.props.id,
        value: modifiedValue,
        errors: []
      }
    );
  }

  render() {
    const { label, id, mandatory, options, multi, value, errors, ...domProps} = this.props;
    return (
      <div className="form-group">
        <label>{label}</label>
        <Select
          name={this.props.name}
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
