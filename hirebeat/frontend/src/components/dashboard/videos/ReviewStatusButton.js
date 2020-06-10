import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import aiIcon from "../../../assets/ai_icon.png";
import expertIcon from "../../../assets/expert_icon.png";
import { ButtonContainer } from "../../practice/CardComponents";
import { renderQDes, renderSuccessTag } from "../DashboardComponents";

function MyVerticallyCenteredModal(props) {
  const { sendVideoForReview, ...rest } = props;
  return (
    <Modal
      {...rest}
      dialogClassName="my-modal"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton style={{ border: "none", height: "6px" }} />
      <div className="container height-400">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <p className="text-secondary">Create Your Interview Result</p>
          <h3>Choose Analysis Method</h3>
          <p className="text-primary" style={{ fontSize: "25px" }}>
            Q:{renderQDes(props.v.q_description)}
          </p>
        </div>
        <div className="row setup-card-row-bottom">
          {ButtonContainer(
            expertIcon,
            () => {
              sendVideoForReview("expert", props.v.id);
            },
            "Expert Analytics",
            props.v.needed_expert_review || props.v.is_expert_reviewed
              ? true
              : false
          )}
          {ButtonContainer(
            aiIcon,
            () => {
              sendVideoForReview("ai", props.v.id);
            },
            "AI Analytics",
            props.v.needed_ai_review || props.v.is_ai_reviewed ? true : false
          )}
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

  // decide text, className, onTap function based on review status
  if (props.v.is_expert_reviewed && props.v.is_ai_reviewed) {
    text = "Reviews Ready";
    onTap = null;
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
      <button
        onClick={onTap}
        className={className}
        style={{ borderRadius: "20px" }}
      >
        {text}
      </button>
      <MyVerticallyCenteredModal
        show={show}
        onHide={() => setShow(false)}
        v={props.v}
        sendVideoForReview={props.sendVideoForReview}
      />
    </div>
  );
}

export default ReviewStatusButton;
