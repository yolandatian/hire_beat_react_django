import React, { Component } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { reviewTagOptions } from "../../constants/constants";

const animatedComponents = makeAnimated();

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
    // var value = value > 5 ? 5 : value;
    this.setState({ ...this.state, score: value });
  };

  submitReview = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div>
        Give reviews
        <Select
          value={this.state.selectedTags}
          closeMenuOnSelect={false}
          components={animatedComponents}
          onChange={this.handleTagChange}
          isMulti
          options={reviewTagOptions}
        />
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

export default Reviews;
