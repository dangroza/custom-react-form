import React, { Component } from 'react';
import Tag from "./tag";

class Tags extends Component {

  render() {
    let tagNodes = [];
    let values = this.props.value;
    for (let i = 0; i < values.length; i++) {
      let node = (<Tag onChange={this.props.onChange} key={i} tagId={this.props.id} value={values[i]}/>);
      tagNodes.push(node);
    }

    return (
      <div className="form-group">
        {tagNodes}
      </div>
    );
  }
}

export default Tags;
