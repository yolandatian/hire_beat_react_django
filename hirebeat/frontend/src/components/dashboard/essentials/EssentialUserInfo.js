import React, { Component } from "react";
import billGates from "../../../assets/billgates.jpg";
import ImageButton from "../../basic/ImageButton";
import { DbRow, DbCenterRow } from "../DashboardComponents";

export class EssentialUserInfo extends Component {
  render() {
    return (
      <div className="card container">
        <div className="card-body">
          <DbCenterRow>
            <div className="col-3">
              <ImageButton src={billGates} func={() => {}} type={"avatar"} />
            </div>
            <div className="col-7">
              <div className="row">
                <h1 style={{ fontWeight: "bold" }}>
                  {this.props.user.username}
                </h1>
              </div>
              <div className="row">{this.props.profile.membership}</div>
              <div className="row">{this.props.user.email}</div>
              <div className="row">{this.props.profile.phone_number}</div>
              <div className="row">{this.props.profile.location}</div>
            </div>
            <div className="col-2"></div>
          </DbCenterRow>
        </div>
      </div>
    );
  }
}

export default EssentialUserInfo;
