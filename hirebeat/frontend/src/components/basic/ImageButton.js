import React, { Component } from "react";
import PropTypes from "prop-types";

export class ImageButton extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    func: () => {},
  };

  applyStyle = () => {
    switch (this.props.type) {
      case "avatar":
        return {
          width: "100px",
          height: "100px",
          borderRadius: "50px",
          backgroundImage: `url(${this.props.src})`,
          backgroundSize: "100px",
          outline: "none",
        };
      default:
        return {
          width: "300px",
          height: "180px",
          borderRadius: "5px",
          outline: "none",
          backgroundImage: `url(${this.props.src})`,
          backgroundSize: "300px",
          boxShadow: "1px 2px grey",
        };
      // Do nothing
    }
  };

  render() {
    return (
      <div>
        <button style={this.applyStyle()} onClick={this.props.func} />
      </div>
    );
  }
}

export default ImageButton;
