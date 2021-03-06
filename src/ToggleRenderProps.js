import React, { Component } from 'react';

class ToggleRenderProps extends Component {
  state = {
    on: false,
  };

  toggle = () => {
    this.setState({ on: !this.state.on });
  };

  render() {
    const { render } = this.props;

    return (
      <div className="toggle">
        {render({
          on: this.state.on,
          toggle: this.toggle,
        })}
      </div>
    );
  }
}

export default ToggleRenderProps;
