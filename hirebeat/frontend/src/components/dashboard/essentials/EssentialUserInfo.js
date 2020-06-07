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
                  <h1 style={{ fontSize: "18px", marginRight: "30px" }}>
                    {this.props.profile.membership}
                  </h1>
                  <button>edit</button>
                </div>
              </div>
              <div className="row">
                <div className="col-6">{this.props.profile.phone_number}</div>
                <div className="col-6">{this.props.profile.location}</div>
              </div>
              <div className="row">
                <div className="col">{this.props.user.email}</div>
              </div>
            </div>
          </DbCenterRow>
        </div>
      </div>
    );
  }
}

export default EssentialUserInfo;
