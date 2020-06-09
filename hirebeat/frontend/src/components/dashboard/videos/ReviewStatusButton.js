import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import aiIcon from "../../../assets/ai_icon.png";
import expertIcon from "../../../assets/expert_icon.png";
import { ButtonContainer } from "../../practice/CardComponents";

const renderSuccessTag = (text) => {
  return (
    <div className="d-flex justify-content-start">
      <i
        className="material-icons-outlined"
        style={{
          fontSize: "10px",
          color: "#67ac5c",
        }}
      >
        done
      </i>
      <p className="text-success" style={{ fontSize: "10px" }}>
        {text}
      </p>
    </div>
  );
};

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      dialogClassName="my-modal"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton style={{ border: "none", height: "6px" }} />
      <div className="container" style={{ height: "400px" }}>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <p className="text-secondary">Create Your Interview Result</p>
          <h3>Choose Analysis Method</h3>
          <p className="text-primary" style={{ fontSize: "25px" }}>
            Q:xxxx
          </p>
        </div>
        <div className="row setup-card-row-bottom">
          {ButtonContainer(expertIcon, () => {}, "Expert Analytics")}
          {ButtonContainer(aiIcon, () => {}, "AI Analytics")}
        </div>
      </div>
    </Modal>
  );
}

function ReviewStatusButton(props) {
  const [show, setShow] = useState(false);
  var text = "";
  var className = "";
  var onTap = null;

  if (props.v.is_expert_reviewed && props.v.is_ai_reviewed) {
    text = "Reviews Ready";
    onTap = props.redirectToVideoPlayer;
    className = "btn btn-success";
  } else if (!props.v.needed_expert_review || !props.v.needed_ai_review) {
    text = "Send for review";
    onTap = () => setShow(true);
    className = "btn btn-primary";
  } else {
    text = "Under Review";
    className = "btn btn-warning disabled";
  }
  return (
    <div>
      <div>
        {props.v.is_expert_reviewed ? renderSuccessTag("Expert") : null}
        {props.v.is_ai_reviewed ? renderSuccessTag("AI") : null}
      </div>
      <button onClick={onTap} className={className}>
        {text}
      </button>
      <MyVerticallyCenteredModal show={show} onHide={() => setShow(false)} />
    </div>
  );
}

export default ReviewStatusButton;
