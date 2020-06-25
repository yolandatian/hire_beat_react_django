import React, { Component } from "react";
import ImageButton from "../../basic/ImageButton";
import {
  IconButton,
  DbCenterRow,
  IconText,
  MyModal,
} from "../DashboardComponents";

export class EssentialUserInfo extends Component {
  state = {
    show: false,
    phone_number: "",
    location: "",
  };

  componentDidMount() {
    this.setState({
      phone_number: this.props.profile.phone_number,
      location: this.props.profile.location,
    });
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  finishEditing = () => {
    this.setState({ ...this.state, show: false });
  };

  saveChanges = () => {
    var profile = this.makeProfile();
    this.props.updateProfile(profile);
    this.finishEditing();
  };

  makeProfile = () => {
    return {
      user: this.props.user.id,
      id: this.props.profile.id,
      phone_number: this.state.phone_number,
      location: this.state.location,
    };
  };

  render() {
    return (
      <div className="card container">
        <div className="card-body">
          <DbCenterRow>
            <div className="col-2">
              <ImageButton
                src={"https://hirebeat-assets.s3.amazonaws.com/user.png"}
                func={() => {}}
                type={"avatar"}
              />
            </div>
            <div className="col-10">
              <div className="row">
                <div className="col d-flex align-items-center">
                  <h1
                    style={{
                      fontWeight: "bold",
                      marginRight: "30px",
                    }}
                  >
                    {this.props.user.username}
                  </h1>
                  <div
                    className="d-flex justify-content-end"
                    style={{ width: "100%" }}
                  >
                    <IconButton
                      iconName={"edit"}
                      iconSize={"28px"}
                      iconColor={"#98b8f6"}
                      onTap={() => {
                        this.setState({ ...this.state, show: true });
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                  <IconText
                    iconName={"phone"}
                    textDisplayed={this.props.profile.phone_number}
                    textSize={"15px"}
                  />
                </div>
                <div className="col-3">
                  <IconText
                    iconName={"location_on"}
                    textDisplayed={this.props.profile.location}
                    textSize={"15px"}
                  />
                </div>
                <div className="col-6" />
              </div>
              <div className="row">
                <div className="col">
                  <IconText
                    iconName={"email"}
                    textDisplayed={this.props.user.email}
                    textSize={"15px"}
                  />
                </div>
              </div>
            </div>
          </DbCenterRow>
        </div>
        <EditModal
          show={this.state.show}
          location={this.state.location}
          phone_number={this.state.phone_number}
          saveChanges={this.saveChanges}
          handleInputChange={this.handleInputChange}
          hide={this.finishEditing}
        />
      </div>
    );
  }
}

const EditModal = (props) => {
  return (
    <MyModal show={props.show} onHide={props.hide}>
      <div className="container">
        <form>
          <fieldset>
            <div className="form-group">
              <label style={{ fontSize: "20px" }}>Phone Number</label>
              <input
                type="number"
                className="form-control"
                name={"phone_number"}
                value={props.phone_number}
                placeholder={"Phone Number"}
                onChange={props.handleInputChange}
                required="required"
              />
              <br />
              <label style={{ fontSize: "20px" }}>Location</label>
              <input
                type="text"
                className="form-control"
                name={"location"}
                value={props.location}
                placeholder={"Location"}
                onChange={props.handleInputChange}
                required="required"
              />
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={props.saveChanges}
            >
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </MyModal>
  );
};

export default EssentialUserInfo;
