import React from "react";

import "./CustomMouse.less";

export default class CustomMouse extends React.Component {
  state = {
    position: null
  };

  componentDidMount() {
    window.onmousemove = this._mouseMove;
  }

  _mouseMove = event => {
    this.setState({
      position: event
    });
  };

  render() {
    const position = this.state.position;

    if (position === null) return null;

    return (
      <div className="cursor">
        <div
          className="cursor__pointer"
          style={{
            top: position.clientY,
            left: position.clientX
          }}
        />
        <div
          className={
            "cursor__follower " +
            (position.target.onclick && "cursor__follower--hover")
          }
          style={{
            top: position.clientY,
            left: position.clientX
          }}
        />
      </div>
    );
  }
}
