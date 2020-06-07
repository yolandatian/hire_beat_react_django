import React from "react";

export const DbRow = (props) => {
  return <div className="dashboard-row">{props.children}</div>;
};

export const DbCenterRow = (props) => {
  return <div className="dashboard-align-center-row">{props.children}</div>;
};
