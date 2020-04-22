import React, { Component } from "react";
import Videos from "./Videos";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getVideos } from "../../actions/video_actions";

export class VideoList extends Component {
  static propTypes = {
    videos: PropTypes.array.isRequired,
  };

  componentDidMount() {
    // subscribe state change
    this.props.getVideos();
  }

  render() {
    return (
      <div>
        <Player
          ref={(player) => {
            this.player = player;
          }}
          playing={true}
        >
          <source src={this.state.source} />
          <ControlBar>
            <ReplayControl seconds={10} order={1.1} />
            <ForwardControl seconds={30} order={1.2} />
            <CurrentTimeDisplay order={4.1} />
            <TimeDivider order={4.2} />
            <VolumeMenuButton enabled />
            <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
          </ControlBar>
        </Player>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  // map initial state to props of this video component
  videos: state.videoReducer.videos,
});
export default connect(mapStateToProps, { getVideos })(VideoList);
