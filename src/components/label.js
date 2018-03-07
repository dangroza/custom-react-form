import React, { Component } from 'react';

class Label extends Component {
  render() {
    const { id, value, ...domProps} = this.props;
    return (
      <div className="form-inputs">
        <p className='custom-label' dangerouslySetInnerHTML={this.createMarkup()} />
      </div>
    );
  }

  createMarkup() {
    return {__html: this.props.value};
  }
}

export default Label;
