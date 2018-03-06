import React, { Component } from 'react';
import Select from 'react-select-plus';

class SelectTab extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    let field = event.target;
    this.props.onChange({'type': field.localName, 'name': field.name}, field.value);
  }

  render() {

    let labelText = this.props.type === "select" ? this.props.label : this.props.name;

    let selectNodes = [];
    let value = this.props.value;

    for (let i = 0; i < value.length; i++) {

      let obj = {
        value: value[i].name, key: i
      };

      let node = (<option key={obj.key} value={obj.value}>{obj.value}</option>);
      selectNodes.push(node);
    }

    return (
      <div className="form-group">
        <label>{labelText}</label>
        <Select
          name={this.props.name}
          placeholder={this.props.placeholder}
          onChange={this.onChange} />
      </div>
    );
  }
}

export default SelectTab;
