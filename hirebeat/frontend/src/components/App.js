import React, { Component, Fragment } from "react";
import Header from "./layout/Header";
import Dashboard from "./dashboard/Dashboard";
import { Provider } from "react-redux";
import AlertTemplate from "react-alert-template-basic";
import { Provider as AlertProvider } from "react-alert";
import Alerts from "./layout/Alerts";
import store from "../store";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Login from "./accounts/Login";
import Register from "./accounts/Register";
import PrivateRoute from "./basic/PrivateRoute";
import Home from "./home/Home";
import PracticePage from "./practice/PracticePage";

import { loadUser, loadProfile } from "../redux/actions/auth_actions";

import VideoReplayPage from "./dashboard/videos/VideoReplayPage";
import MyVideoUploader from "./videos/MyVideoUploader";
import ReviewWindow from "./review/ReviewWindow";

import QuestionTypeChoices from "./practice/QuestionTypeChoices";

import Sidebar from "react-sidebar";

const alertOptions = {
  timeout: 3000,
  position: "top center",
};

class App extends Component {
  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    console.log("loading user");
    await store.dispatch(loadUser());
    console.log("loading profile");
    store.dispatch(loadProfile());
  }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <Header />
              <Alerts />
              <div className="container">
                <Switch>
                  <PrivateRoute exact path="/dashboard" component={Dashboard} />
                  <PrivateRoute exact path="/review" component={ReviewWindow} />
                  <PrivateRoute
                    exact
                    path="/practice/:type"
                    component={PracticePage}
                  />
                  <PrivateRoute
                    exact
                    path="/practice/"
                    component={QuestionTypeChoices}
                  />
                  <PrivateRoute path="/video/:id" component={VideoReplayPage} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/upload" component={MyVideoUploader} />
                  <Route exact path="/" component={Home} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

export default App;
