import React from "react";
import Select from "react-select";
import techIcon from "../../assets/tech_icon.png";

// Styled components
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

export const CardRowHigh = (props) => {
  return <div className="card-row-high">{props.children}</div>;
};

export const CardRowMidHigh = (props) => {
  return <div className="card-row-mid-high">{props.children}</div>;
};

export const CardButton = (props) => {
  return (
    <button
      className={props.btnClassName ?? "btn btn-warning"}
      style={{
        WebkitBorderRadius: "20px",
        width: props.buttonWidth,
        boxShadow:
          "0px 0px 8px" +
          (props.btnClassName == "btn btn-success" ? " #7cb873" : " #dc6b2a"),
      }}
      onClick={props.onTap}
    >
      <a style={{ fontSize: "1vw", fontWeight: "bold" }}>
        {props.textDisplayed}
      </a>
    </button>
  );
};

export const BglessCardButton = (props) => {
  return (
    <CardRowMidHigh>
      <button
        onClick={props.onTap}
        style={{
          border: "none",
          backgroundColor: "transparent",
          width: props.buttonWidth,
        }}
      >
        <a style={{ fontSize: "1vw", fontWeight: "bold", color: "#f3a542" }}>
          {props.textDisplayed}
        </a>
      </button>
    </CardRowMidHigh>
  );
};

export const RecordDoneButton = (props) => {
  return (
    <CardRowHigh>
      <CardButton
        onTap={props.onTap}
        textDisplayed={props.textDisplayed}
        buttonWidth={props.buttonWidth}
      />
    </CardRowHigh>
  );
};

export const VideoNumberLinkRow = (props) => {
  return (
    <CardRowMidHigh>
      <div className="d-flex justify-content-around" style={{ width: "100%" }}>
        <h6>Free video save left: {props.number_of_videos_to_save} </h6>
        <a
          onClick={props.upgrade}
          style={{
            color: "#f3a340",
            textDecoration: "underline",
          }}
        >
          Upgrade >
        </a>
      </div>
    </CardRowMidHigh>
  );
};

export const ButtonContainer = (src, onTap, textDisplayed, btnClassName) => {
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
          btnClassName={btnClassName}
        />
      </CardRow>
      <CardRow>
        <p>
          {"What is a "}
          <StyledLink>{textDisplayed}?</StyledLink>
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

export const StyledLink = (props) => {
  return (
    <a
      style={{
        color: "#f3a340",
        textDecoration: "underline",
      }}
    >
      {props.children}
    </a>
  );
};
