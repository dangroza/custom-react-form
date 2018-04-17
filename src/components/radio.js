import React, { Component } from 'react';
import Input from './input';

class Radio extends Component {
  render() {
    let valueNodes = [];
    let { value, name, type, ...otherProps } = this.props.value;

    for (let i = 0; i < value.length; i++) {

      let el = value[i];

      let obj = {
        ...el, key: i,
        type: this.props.type,
        name: this.props.name,
        value: this.props.value
      };

      let node = <Input {...obj} />
      valueNodes.push(node);
    }

    return (
      <div className="form-group">
        <div><h4>{this.props.label}</h4></div>
        {valueNodes}
      </div>
    );
  }
}

export default Radio;
