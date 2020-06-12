import React from "react";

export const DbRow = (props) => {
  return <div className="dashboard-row">{props.children}</div>;
};

export const DbCenterRow = (props) => {
  return <div className="dashboard-align-center-row">{props.children}</div>;
};

const Icon = (props) => {
  return (
    <i
      className="material-icons-outlined"
      style={{
        fontSize: props.iconSize,
        marginRight: "6px",
        color: props.iconColor ?? "#7d7d7d",
      }}
    >
      {props.iconName}
    </i>
  );
};

export const IconButton = (props) => {
  //iconSize, iconName, iconColor, onTap
  return (
    <button className="btn-sm" style={{ border: "none" }} onClick={props.onTap}>
      <Icon
        iconSize={props.iconSize}
        iconColor={props.iconColor}
        iconName={props.iconName}
      />
    </button>
  );
};

export const IconText = (props) => {
  //textSize, textDisplayed, iconName, textColor?
  return (
    <div className="d-flex align-items-center">
      <Icon
        iconName={props.iconName}
        iconSize={props.textSize}
        iconColor={props.textColor}
      />
      <p
        style={{
          fontSize: props.textSize,
          marginBottom: "1px",
          color: props.textColor ?? "#7d7d7d",
        }}
      >
        {props.textDisplayed}
      </p>
    </div>
  );
};

export const renderQDes = (des) => {
  var length = 65;
  var i = 0;
  if (des.length > length) {
    var ans = des.substring(0, length);
    while (des[length + i] !== " ") {
      // Make sure the des ends with a complete word
      ans = ans + des[length + i];
      i++;
    }
    return ans + "...";
  }
  return des;
};

export const renderSuccessTag = (text) => {
  return (
    <div className="d-flex justify-content-start">
      <i
        className="material-icons-outlined"
        style={{
          fontSize: "10px",
          color: "#67ac5c",
          marginTop: "2px",
        }}
      >
        done
      </i>
      <p
        className="text-success"
        style={{ fontSize: "10px", marginRight: "10px" }}
      >
        {text}
      </p>
    </div>
  );
};

export const ReviewHeader = (props) => {
  return (
    <DbRow>
      <div className="col-2">
        <button
          onClick={props.setSubPage}
          className="borderless d-flex justify-content-center align-items-center"
        >
          <Icon
            iconSize={"8px"}
            iconColor={"#98b8f6"}
            iconName={"keyboard_backspace"}
          />
          <h6 style={{ color: "#98b8f6", marginBottom: 0 }}>Back</h6>
        </button>
      </div>
      <div className="col-8 d-flex justify-content-center align-items-center">
        <strong>Review Your Performance</strong>
      </div>
      <div className="col-2" />
    </DbRow>
  );
};

export const QuestionTitle = (props) => {
  return (
    <div
      className="row d-flex justify-content-start"
      style={{ marginLeft: "10px" }}
    >
      <h2 style={{ color: "#98b8f6" }}>Q:</h2>
      <h2>{props.title}</h2>
    </div>
  );
};

export const Comments = (props) => {
  return (
    <div>
      <textarea disabled rows="5" cols="50">
        {props.comments}
      </textarea>
    </div>
  );
};