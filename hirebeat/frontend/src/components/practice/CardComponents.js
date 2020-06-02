import React from "react";
import techIcon from "../../assets/tech_icon.png";

// Some styles are kept b/c the element's className can't be overwritten

export const PracticeCard = (props) => {
  return (
    <div className="container practice-card-container">
      <div className="card mb-3 practice-card">
        <div
          className="card-header"
          style={{ padding: 3, backgroundColor: "#538af2" }}
        />
        <div className="card-body practice-card-body">{props.children}</div>
      </div>
    </div>
  );
};

export const CardRow = (props) => {
  return <div className="row practice-card-row">{props.children}</div>;
};

export const QuestionTypeChoiceButton = (props) => {
  return (
    <button
      className="btn btn-warning"
      style={{
        WebkitBorderRadius: "20px",
        width: props.smallContainer ? "100%" : "30%",
        boxShadow: "0px 0px 8px #dc6b2a",
      }}
      onClick={props.onTap}
    >
      <a style={{ fontSize: 20, fontWeight: "bold" }}>{props.textDisplayed}</a>
    </button>
  );
};

export const ButtonContainer = (src, onTap, textDisplayed) => {
  return (
    <div className="practice-card-button-container">
      <CardRow>
        <img src={src} width={src == techIcon ? "39%" : "40%"} />
      </CardRow>
      <CardRow>
        <QuestionTypeChoiceButton
          onTap={onTap}
          textDisplayed={textDisplayed}
          smallContainer={true}
        />
      </CardRow>
      <CardRow>
        <p>
          {"What is a "}
          <ins
            style={{
              color: "#f3a340",
            }}
          >
            {textDisplayed}?
          </ins>
        </p>
      </CardRow>
    </div>
  );
};

export const QuestionCol = (props) => {
  return <div className="col-5">{props.children}</div>;
};

export const SelectCol = (props) => {
  return (
    <div className="col-3">
      <div class="react-select-container">{props.children}</div>
    </div>
  );
};
