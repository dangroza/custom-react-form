import React from 'react';

class ExternalComponentContainer extends React.PureComponent {
  render() {
    return (
      <div className={`form-group ecc container ${this.props.formGroupClassName}`}>
        {this.props.children}
      </div>
    );
  }
}

ExternalComponentContainer.defaultProps = {
  formGroupClassName: ''
};

export default ExternalComponentContainer;
