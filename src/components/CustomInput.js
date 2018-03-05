import React, { Component } from 'react';
import './App.css';

class CustomInput extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    let field = event.target;
    let value = field.value;
    if (field.type === "checkbox" || field.type === "radio") {
      value = field.id;
    }
    this.props.onChange({'type': field.type, 'name': field.name}, value);
  }

  render() {
    let labelText = this.props.label;
    return (
      <div className="form-inputs">
        <label className="label-section" htmlFor={this.props.id}>{labelText}</label>
        <input
          {...this.props}
          onChange={this.onChange} //TODO: if this is radio or select you must handle parent onChange

        />
      </div>
    );
  }
}

export default CustomInput;