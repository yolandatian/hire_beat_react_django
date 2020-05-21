import React, { Component } from "react";

export class ProfileInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      phone_number: this.props.profile.phone_number,
      summary: this.props.profile.summary,
      location: this.props.profile.location,
      education: this.props.profile.education,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  editingForm = () => {
    return (
      <div>
        <form>
          <label>
            Phone Number:
            <input
              name="phone_number"
              type="text"
              value={this.state.phone_number ?? "000000000"}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Summary:
            <input
              name="summary"
              type="text"
              value={this.state.summary}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Location:
            <input
              name="location"
              type="text"
              value={this.state.location}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Education:
            <input
              name="education"
              type="text"
              value={this.state.education}
              onChange={this.handleInputChange}
            />
          </label>
        </form>
        <button onClick={this.finishEditing}>Cancel</button>
        <button onClick={this.saveChanges}>Save</button>
      </div>
    );
  };

  viewOnlyForm = () => {
    return (
      <div>
        <h2> Phone Number</h2>
        {this.state.phone_number}
        <h2> Summary</h2>
        {this.state.summary}
        <h2> Location</h2>
        {this.state.location}
        <h2> Education</h2>
        {this.state.education}
      </div>
    );
  };

  startEditing = () => {
    this.setState({ ...this.state, isEditing: true });
  };

  finishEditing = () => {
    this.setState({ ...this.state, isEditing: false });
  };

  saveChanges = () => {
    console.log(this.state);
    var profile = this.makeProfile();
    this.props.updateProfile(profile);
    this.finishEditing();
  };

  makeProfile = () => {
    return {
      user: this.props.userID,
      id: this.props.profile.id,
      phone_number: this.state.phone_number,
      summary: this.state.summary,
      location: this.state.location,
      education: this.state.education,
    };
  };

  render() {
    return (
      <div>
        <h2>Membership</h2>
        <br />
        {this.props.profile.membership}
        <br />
        <button onClick={this.startEditing}>Edit</button>
        {this.state.isEditing ? this.editingForm() : this.viewOnlyForm()}
      </div>
    );
  }
}

export default ProfileInfo;
