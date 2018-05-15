import React from 'react';

export default class NavButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showTooltip: false };
    this.timeout = null;
    this.handleClick = this.handleClick.bind(this);
    this.showTooltip = this.showTooltip.bind(this);
    this.hideTooltip = this.hideTooltip.bind(this);
  }

  handleClick() {
    this.hideTooltip();
    this.props.action();
  }

  showTooltip() {
    this.timeout = setTimeout(() => {
      this.setState({showTooltip: true});
    }, 1000);
  }
  
  hideTooltip() {
    clearTimeout(this.timeout);
    this.setState({showTooltip: false});
  }

  render() {
    const tooltipClasses = ['tooltip-text'];
    if (this.state.showTooltip) {
      tooltipClasses.push('show-tooltip');
    } else {
      tooltipClasses.push('hide-tooltip');
    }
    return (
      <div className="nav-btn" onMouseEnter={this.showTooltip} onMouseLeave={this.hideTooltip}>
        <i
          className={this.props.classes.join(' ')}
          onClick={this.handleClick}
        />
        <div className={tooltipClasses.join(' ')}>{this.props.type}</div>
      </div>
    );
  }
}
