import React from "react";
import { positions } from "react-alert";

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
  //textSize, textDisplayed, iconName
  return (
    <div className="d-flex align-items-center">
      <Icon iconName={props.iconName} iconSize={props.textSize} />
      <p
        style={{
          fontSize: props.textSize,
          marginBottom: "1px",
          color: "#7d7d7d",
        }}
      >
        {props.textDisplayed}
      </p>
    </div>
  );
};
