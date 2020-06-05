import React from "react";
import VideoRecorder from "./VideoRecorder";
import { CardButton, SetupCard, CardRow } from "./CardComponents";
import { videoRecorderOptions } from "../../constants/constants";

function TestDevice(props) {
  videoRecorderOptions.plugins.record.maxLength = 10;
  videoRecorderOptions.width = 330;
  videoRecorderOptions.height = 220;
  return (
    <SetupCard>
      <CardRow>
        <div className="col-4">
          <CardRow>
            <h4>To Test Your Device</h4>
          </CardRow>
          <CardRow>
            <h6>A 10-second video clip will be recorded.</h6>
            <h6>Please replay the clip to ensure</h6>
            <h6>
              <ins>microphone and camera</ins> are working
            </h6>
          </CardRow>
        </div>
        <div className="col-8 d-flex justify-content-center">
          <VideoRecorder {...videoRecorderOptions} isTesting={true} />
        </div>
      </CardRow>
      <CardRow>
        <div className="col-4">
          <CardRow>
            <h4>To Start The First Question</h4>
          </CardRow>
        </div>
        <div className="col-8">
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
    </SetupCard>
  );
}

export default TestDevice;
