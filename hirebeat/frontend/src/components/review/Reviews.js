import React, { Component } from "react";

import makeAnimated from "react-select/animated";

import { addVideoReviews } from "../../redux/actions/video_actions";
import { connect } from "react-redux";

/**  Review details to be decided
 * 
 * import Select from "react-select";
 * import { reviewTagOptions } from "../../constants/constants";
 * 
 * const animatedComponents = makeAnimated();
 * 
<Select
  value={this.state.selectedTags}
  closeMenuOnSelect={false}
  components={animatedComponents}
  onChange={this.handleTagChange}
  isMulti
  options={reviewTagOptions}
/>
*/

export class Reviews extends Component {
  state = {
    score: 5,
    comments: "",
    selectedTags: [],
  };

  handleTagChange = (tags) => {
    this.setState({ ...this.state, selectedTags: tags });
  };

  handleCommentChange = (e) => {
    this.setState({ ...this.state, comments: e.target.value });
  };

  handleScoreChange = (e) => {
    console.log(e.target.value);
    var value = e.target.value;
    var value = value > 5 ? 5 : value;
    this.setState({ ...this.state, score: value });
  };

  arrayToString = (myArray) => {
    console.log(myArray);
    var s = "";
    myArray.forEach((t) => {
      s += t.value + ",";
    });
    s = s.slice(0, -1);
    return s;
  };

  // use async to make sure reviews are added before fetching the next video
  async doAsync(method1, method2) {
    await method1(
      this.state.score,
      this.state.comments,
      //tagString,
      this.props.videoID
    );
    method2();
  }

  submitReview = () => {
    this.doAsync(this.props.addVideoReviews, this.props.nextVideo);
  };

  render() {
    return (
      <div>
        Give reviews
        <input
          type="text"
          value={this.state.comments}
          onChange={this.handleCommentChange}
        />
        <input
          type="number"
          value={this.state.score}
          onChange={this.handleScoreChange}
        />
        <button onClick={this.submitReview}>Submit</button>
      </div>
    );
  }
}

export default connect(null, { addVideoReviews })(Reviews);
