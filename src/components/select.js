import React, { Component } from 'react';

class Select extends Component {
  // TODO: Update this
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    let field = event.target;
    this.props.updateField({
      type: this.props.type,
      id: this.props.id,
      showErrors: true,
      value: field.value
    });
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
      <div className={`form-group ${this.props.formGroupClassName}`}>
        <label>{labelText}</label>
        <select name={this.props.name} onChange={this.onChange}>
          {selectNodes}
        </select>
      </div>
    );
  }
}

Select.defaultProps = {
  formGroupClassName: ''
};

export default Select;
