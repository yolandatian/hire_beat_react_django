import React, { Component } from "react";
import {
  withRouter,
  Link,
  useRouteMatch,
  Router,
  Switch,
} from "react-router-dom";
import PrivateRoute from "../../basic/PrivateRoute";
import BehaviorQuestionMainPage from "./BehaviorQuestionMainPage";

function BehaviorQs() {
  // redirectToBQMainPage = () => {
  //   let bqPath = "/bq";
  //   this.props.history.push(bqPath);
  // };
  let { path, url } = useRouteMatch();
  console.log(path);
  console.log(url);

  return (
    <div className="container">
      <Link to={`${url}/bq`}>bq</Link>
    </div>
  );
}

export default BehaviorQs;
