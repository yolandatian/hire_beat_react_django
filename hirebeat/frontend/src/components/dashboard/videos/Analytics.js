import React, { useState } from "react";
import VideoPreviewList from "./VideoPreviewList";

const decideClassName = (filter, text) => {
  var cn = "btn width-150 margin-right-20";
  return filter == text ? cn + " btn-primary" : cn + " btn-outline-primary";
};

export const Analytics = () => {
  const [filter, setFilter] = useState("all");
  return (
    <div>
      <div className="container d-flex justify-content-start">
        <button
          className={decideClassName(filter, "all")}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={decideClassName(filter, "expert")}
          onClick={() => setFilter("expert")}
        >
          Expert
        </button>
        <button
          className={decideClassName(filter, "ai")}
          onClick={() => setFilter("ai")}
        >
          AI
        </button>
      </div>
      <VideoPreviewList filter={filter} />
    </div>
  );
};
