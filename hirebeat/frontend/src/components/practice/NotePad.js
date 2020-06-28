import React, { useState, useEffect } from "react";

export function NotePad(props) {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    console.log(value);
    setValue(event.target.value);
  };

  useEffect(() => {
    if (props.status == "Preparation") {
      setValue("");
    }
  });

  return (
    <div className="video-recorder-row">
      <div className="col-8">
        <textarea
          style={{
            width: window.innerWidth / 2.4,
            height: "90px",
            borderColor: "lightgrey",
            borderWidth: "3px",
            borderRadius: "8px",
          }}
          placeholder=" Notes here ..."
          onChange={handleChange}
          value={value}
        />
      </div>
      <div className="col-3"></div>
    </div>
  );
}

export default NotePad;
