import React, { Component } from "react";
import { addVideoReviews } from "../../redux/actions/video_actions";
import { connect } from "react-redux";

export class Reviews extends Component {
  state = {
    score: 0,
    postitiveAttitude: 0,
    communication: 0,
    detailOriented: 0,
    teamSpirit: 0,
    stressTolerance: 0,
    comments: "",
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  cancatenateScores = () => {
    var ans = "";
    ans += this.state.postitiveAttitude + ",";
    ans += this.state.communication + ",";
    ans += this.state.detailOriented + ",";
    ans += this.state.teamSpirit + ",";
    ans += this.state.stressTolerance;
    console.log(ans);
    return ans;
  };

  // use async to make sure reviews are added before fetching the next video
  async doAsync(method1, method2) {
    await method1(
      this.state.score,
      this.cancatenateScores(),
      this.state.comments,
      this.props.videoID
    );
    method2();
  }

  submitReview = () => {
    this.doAsync(this.props.addVideoReviews, this.props.nextVideo);
  };

  scoreField = (title, name) => {
    return (
      <div>
        <label style={{ fontSize: "20px" }}>{title}</label>
        <input
          type="number"
          step="0.1"
          class="form-control"
          aria-describedby="emailHelp"
          min="0"
          max="10"
          name={name}
          placeholder={title + " score"}
          onChange={this.handleInputChange}
          required="required"
        />
        <br />
      </div>
    );
  };

  render() {
    return (
      <div className="container">
        Give reviews
        <button onClick={this.submitReview}>Submit</button>
        <form>
          <fieldset>
            <div className="form-group">
              {this.scoreField("Positive Attitude", "postitiveAttitude")}
              {this.scoreField("Communication", "communication")}
              {this.scoreField("Detail Oriented", "detailOriented")}
              {this.scoreField("Team Spirit", "teamSpirit")}
              {this.scoreField("Stress Tolerance", "stressTolerance")}
              {this.scoreField("Overall", "score")}
              <label>Comments</label>
              <textarea
                className="form-control"
                rows="5"
                spellCheck="true"
                placeholder="Comments here ..."
                name="comments"
                onChange={this.handleInputChange}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.submitReview}
            >
              Submit
            </button>
            <br />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default connect(null, { addVideoReviews })(Reviews);
