import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ButtonPanel(props) {
  return (
    <div class="card" style={{ boxShadow: "1px 3px 1px grey" }}>
      <div className="list-group">
        <button
          type="button"
          className="list-group-item list-group-item-action"
          onClick={props.renderVideos}
          style={{ borderLeft: "none", borderRightColor: "blue" }}
        >
          Videos
        </button>
        <button
          type="button"
          className="list-group-item list-group-item-action"
          onClick={props.renderProfile}
        >
          Profile
        </button>
      </div>
    </div>
  );
}

export default ButtonPanel;
