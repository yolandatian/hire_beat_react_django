import React, { Component } from "react";
import PropTypes from "prop-types";

export class ImageButton extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    func: () => {},
  };

  render() {
    return (
      <div>
        <button>
          <img
            src={this.props.src}
            alt="Image Not Found"
            onClick={this.props.func}
          />
        </button>
      </div>
    );
  }
}

export default ImageButton;
