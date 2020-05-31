import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ButtonPanel(props) {
  return (
    <div>
      <button
        type="button"
        className="panel-button"
        onClick={props.renderVideos}
      >
        Videos
      </button>
      <br />
      <button
        type="button"
        className="panel-button"
        onClick={props.renderProfile}
      >
        Profile
      </button>
    </div>
  );
}

export default ButtonPanel;
