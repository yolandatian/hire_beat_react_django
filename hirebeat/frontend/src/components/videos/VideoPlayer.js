import React, { Component } from "react";
import {
  Player,
  BigPlayButton,
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
          <ControlBar autoHide={true}>
            <CurrentTimeDisplay order={4.1} />
            <TimeDivider order={4.2} />
            <VolumeMenuButton enabled />
            <PlaybackRateMenuButton
              rates={[2, 1.5, 1, 0.5, 0.25]}
              order={7.1}
            />
          </ControlBar>
        </Player>
      </div>
    );
  }
}

export default VideoPlayer;
