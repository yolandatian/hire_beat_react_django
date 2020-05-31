import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import billGates from "../../../assets/billgates.jpg";
import ImageButton from "../../basic/ImageButton";

export class EssentialUserInfo extends Component {
  render() {
    return (
      <Container>
        <br />
        <Row>
          <Col xs={6} md={{ span: 2, offset: 1 }}>
            <ImageButton src={billGates} func={() => {}} type={"avatar"} />
          </Col>
          <Col xs={6} md={4} className="align-items-center">
            <Row>
              <h1 style={{ fontWeight: "bold" }}>{this.props.user.username}</h1>
            </Row>
            <Row>{this.props.user.email}</Row>
            <Row>Shanghai</Row>
            <Row>9198187345</Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EssentialUserInfo;
