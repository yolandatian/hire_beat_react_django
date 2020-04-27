import React, { Component } from "react";
import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  VolumeMenuButton,
} from "video-react";
import { withRouter } from "react-router-dom";
import { videoList } from "../../mockdata/video_data";

export class VideoPlayer extends Component {
  state = {
    id: 0,
    url: "http://media.w3.org/2010/05/sintel/trailer.mp4",
  };

  componentDidMount() {
    let v_id = this.props.match.params.id;
    let v_url = videoList[v_id].url;
    console.log(v_url);
    this.setState({
      id: v_id,
      url: v_url,
    });
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
          <source src={this.state.url} />
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

export default withRouter(VideoPlayer);
