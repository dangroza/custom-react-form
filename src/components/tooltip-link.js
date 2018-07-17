import React, { PureComponent } from 'react';
import ReactTooltip from 'react-tooltip';
import { randomInt } from '../utils';

class TooltipLink extends PureComponent {
  render() {
    if (!this.props.tooltip) return null;
    return([
      <i
        className='fa fa-info-circle tooltip-link'
        onMouseOver={this.onMouseOver}
        data-tip={this.props.tooltip}
        key={randomInt()}
      />,
      <ReactTooltip key={randomInt()} />
    ]);
  }
}

export default TooltipLink;
