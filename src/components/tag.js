import React, { Component } from 'react';

class Tag extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange() {
    this.props.onChange({'type': 'tags', 'name': this.props.tagId}, this.props.value.name);
  }

  render() {
    let tag = this.props.value;
    let isSelected = this.props.value.selected;

    return (
      <span className={"tag-element no-select" + (isSelected ? ' selected-tag' : '')}
            onClick={this.handleChange}>{tag.name}</span>
    );
  }
}

export default Tag;
