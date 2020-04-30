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

export class VideoPlayer extends Component {
  render() {
    return (
      <div>
        <Player
          ref={(player) => {
            this.player = player;
          }}
          playing={true}
        >
          <source src={this.props.url} />
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

export default VideoPlayer;
