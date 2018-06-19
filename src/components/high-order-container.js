import React, { Component } from 'react';

const HighOrderContainer = (ContainedComponent) => {
  class HOCWrapper extends React.PureComponent {
    render() {
      const formGroupClassName = this.props.formGroupClassName || '';
      return (
        <div className={`form-group hoc container ${formGroupClassName}`}>
          <ContainedComponent {...this.props} />
        </div>
      );
    }
  }
  return HOCWrapper;
}

export default HighOrderContainer;
