import React from "react";
import VideoRecorder from "./VideoRecorder";
import { CardButton, CardCardRow, CardRow } from "./CardComponents";
import { videoRecorderOptions } from "../../constants/constants";

function TestDevice(props) {
  videoRecorderOptions.plugins.record.maxLength = 10;
  videoRecorderOptions.width = 330;
  videoRecorderOptions.height = 220;
  return (
    <CardRow>
      <CardRow>
        <div className="col-5">
          <CardRow>
            <h4>To Test Your Device</h4>
          </CardRow>
          <CardRow>
            <h6>A 10 second video clip will be recorded.</h6>
            <h6>
              Please replay the clip to ensure microphone and camera are working
            </h6>
          </CardRow>
        </div>
        <div className="col-7">
          <CardRow>
            <VideoRecorder {...videoRecorderOptions} isTesting={true} />
          </CardRow>
        </div>
      </CardRow>
      <CardRow>
        <div className="col-5">
          <CardRow>
            <h4>To Start The First Question</h4>
          </CardRow>
        </div>
        <div className="col-7">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "60%",
            }}
          >
            <CardButton
              onTap={props.testDevice}
              textDisplayed={"Start Practice"}
              buttonWidth={"50%"}
            />
          </div>
        </div>
      </CardRow>
    </CardRow>
  );
}

export default TestDevice;
