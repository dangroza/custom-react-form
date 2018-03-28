import React, { Component } from 'react';

const HighOrderContainer = (ContainedComponent) => {
  class HOCWrapper extends React.PureComponent {
    render() {
      return (
        <div className="form-group hoc container">
          <ContainedComponent {...this.props} />
        </div>
      );
    }
  }
  return HOCWrapper;
}

export default HighOrderContainer;
