import React from "react";
import VideoRecorder from "./VideoRecorder";
import { CardButton, PracticeCard } from "./CardComponents";
import { videoRecorderOptions } from "../../constants/constants";

function TestDevice(props) {
  videoRecorderOptions.plugins.record.maxLength = 15;
  videoRecorderOptions.width = 330;
  videoRecorderOptions.height = 220;
  return (
    <PracticeCard>
      <div className="practice-card-top-row">
        <h4>To Test Your Device</h4>
      </div>
      <h6>
        A 15-second video clip will be recorded.Please replay the clip to ensure
        microphone and camera are working
      </h6>
      <h5>Testing</h5>
      <div className="row">
        <div className="col-8">
          <VideoRecorder {...videoRecorderOptions} isTesting={true} />
        </div>
        <div className="col-4">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "60%",
            }}
          >
            <h4>Everything goes well?</h4>
            <CardButton
              onTap={props.testDeviceDone}
              textDisplayed={"Start Practice"}
              buttonWidth={"50%"}
            />
          </div>
        </div>
      </div>
    </PracticeCard>
  );
}

export default TestDevice;
