import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getVideos, deleteVideo } from "../../actions/video_actions";

export class Videos extends Component {
  static propTypes = {
    videos: PropTypes.array.isRequired,
    getVideos: PropTypes.func.isRequired,
    deleteVideo: PropTypes.func.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      source: sources.bunnyMovie,
    };
  }

  componentDidMount() {
    // subscribe state change
    this.props.getVideos();
  }

  render() {
    return (
      <div>
        <Fragment>
          <h2>Videos</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>URL</th>
                <th>CreatedAt</th>
              </tr>
            </thead>
            <tbody>
              {this.props.videos.map((video) => (
                <tr key={video.id}>
                  <td>{video.id}</td>
                  <td>{video.url}</td>
                  <td>{video.created_at}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={this.props.deleteVideo.bind(this, video.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Fragment>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  // map initial state to props of this video component
  videos: state.video_reducer.videos,
});
export default connect(mapStateToProps, { getVideos, deleteVideo })(Videos);
