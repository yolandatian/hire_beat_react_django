import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Div = styled.div`
  height: 500px;
  width: 100%;
`;

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  height: 500px;
`;

export class Home extends Component {
  render() {
    if (this.props.isAuthenticated) {
      if (this.props.user.groups[0] == "reviewers") {
        console.log("reviewer confirmed");
        return <Redirect to="/review" />;
      }
    }
    return (
      <Div>
        <Wrapper>
          <Title>This is home page!</Title>
          <Button onClick={() => console.log("clicked")}>HireBeat</Button>
          <TomatoButton>Awesome</TomatoButton>
          <button type="button" className="btn btn-primary">
            Button
          </button>
        </Wrapper>
      </Div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth_reducer.isAuthenticated,
  user: state.auth_reducer.user,
});

export default connect(mapStateToProps, null)(Home);
