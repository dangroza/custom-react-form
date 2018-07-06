import React, { PureComponent } from 'react';

class Container extends PureComponent {
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
      <div className={`form-group container ${this.props.formGroupClassName}`}>
        {this.contentFromProps}
      </div>
    );
  }
}

Container.defaultProps = {
  formGroupClassName: ''
};

export default Container;
