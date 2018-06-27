import React from 'react';

class ExternalComponentContainer extends React.PureComponent {
  render() {
    const formGroupClassName = this.props.formGroupClassName || '';
    return (
      <div className={`form-group ecc container ${formGroupClassName}`}>
        {this.props.children}
      </div>
    );
  }
}

export default ExternalComponentContainer;
