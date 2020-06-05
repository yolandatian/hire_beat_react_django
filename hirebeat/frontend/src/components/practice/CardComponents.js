import React from "react";
import Select from "react-select";
import techIcon from "../../assets/tech_icon.png";

// Some styles are kept b/c the element's className can't be overwritten

function CardHeader() {
  return <div style={{ padding: 2, backgroundColor: "#538af2" }} />;
}

export const SetupCard = (props) => {
  return (
    <div className="container card-container">
      <div className="card mb-3 setup-card">
        {CardHeader()}
        <div className="card-body setup-card-body">{props.children}</div>
      </div>
    </div>
  );
};

export const PracticeCard = (props) => {
  return (
    <div className="container practice-card-container">
      <div className="card mb-3 practice-card">
        {CardHeader()}
        <div className="card-body practice-card-body">{props.children}</div>
      </div>
    </div>
  );
};

export const CardRow = (props) => {
  return <div className="row card-row">{props.children}</div>;
};

export const CardButton = (props) => {
  return (
    <button
      className="btn btn-warning"
      style={{
        WebkitBorderRadius: "20px",
        width: props.buttonWidth,
        boxShadow: "0px 0px 8px #dc6b2a",
      }}
      onClick={props.onTap}
    >
      <a style={{ fontSize: "1vw", fontWeight: "bold" }}>
        {props.textDisplayed}
      </a>
    </button>
  );
};

export const ButtonContainer = (src, onTap, textDisplayed) => {
  return (
    <div className="setup-card-button-container">
      <CardRow>
        <img src={src} width={src == techIcon ? "39%" : "40%"} />
      </CardRow>
      <CardRow>
        <CardButton
          onTap={onTap}
          textDisplayed={textDisplayed}
          buttonWidth={"85%"}
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

export const selectParam = (question, value, onTap, options) => {
  return (
    <CardRow className="vertically-center">
      <QuestionCol>
        <p>{question}</p>
      </QuestionCol>
      <SelectCol>
        <Select value={value} onChange={onTap} options={options} />
      </SelectCol>
    </CardRow>
  );
};

export const QuestionCol = (props) => {
  return <div className="col-6">{props.children}</div>;
};

export const SelectCol = (props) => {
  return (
    <div className="col-4">
      <div className="react-select-container">{props.children}</div>
    </div>
  );
};
