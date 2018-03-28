import React, { Component } from 'react';

class Container extends Component {
  get contentFromProps(){
    return (
      <div
        className={this.props.cssClass}
        dangerouslySetInnerHTML={this.htmlMarkup} />
    );
  }

  get htmlMarkup() {
    return { __html: this.props.content };
  }

  render() {
    return (
      <div className="form-group container">
        {this.contentFromProps}
      </div>
    );
  }
}

export default Container;
