import React from 'react';
import { Link } from 'react-router-dom';

export default class NavButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showTooltip: false };
    this.handleClick = this.handleClick.bind(this);
    this.showTooltip = this.showTooltip.bind(this);
    this.hideTooltip = this.hideTooltip.bind(this);
  }

  handleClick(e) {
    this.hideTooltip();
    this.props.action();
  }

  showTooltip(e) {
    this.timeout = setTimeout(() => {
      this.setState({ showTooltip: true });
    }, 500);
  }

  hideTooltip() {
    clearTimeout(this.timeout);
    this.setState({ showTooltip: false });
  }

  render() {
    const tooltipClasses = ['tooltip-text'];
    if (this.state.showTooltip) {
      tooltipClasses.push('show-tooltip');
    } else {
      tooltipClasses.push('hide-tooltip');
    }
    return (
      <Link to={this.props.linkPath} className="nav-btn">
        <i
          onMouseEnter={this.showTooltip}
          onMouseLeave={this.hideTooltip}
          className={this.props.classes.join(' ')}
          onClick={this.handleClick}
        />
        <div className={tooltipClasses.join(' ')}>
          {this.props.type.toUpperCase()}
        </div>
      </Link>
    );
  }
}
