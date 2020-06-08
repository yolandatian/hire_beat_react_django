import React, { Component } from "react";
import billGates from "../../../assets/billgates.jpg";
import ImageButton from "../../basic/ImageButton";
import { IconButton, DbCenterRow, IconText } from "../DashboardComponents";

export class EssentialUserInfo extends Component {
  render() {
    return (
      <div className="card container">
        <div className="card-body">
          <DbCenterRow>
            <div className="col-4">
              <ImageButton src={billGates} func={() => {}} type={"avatar"} />
            </div>
            <div className="col-8">
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
                      iconSize={"23px"}
                      iconColor={"#98b8f6"}
                      onTap={() => {}}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <IconText
                    iconName={"phone"}
                    textDisplayed={this.props.profile.phone_number}
                    textSize={"15px"}
                  />
                </div>
                <div className="col-6">
                  <IconText
                    iconName={"location_on"}
                    textDisplayed={this.props.profile.location}
                    textSize={"15px"}
                  />
                </div>
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
      </div>
    );
  }
}

export default EssentialUserInfo;
