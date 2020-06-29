import React from "react";

export default function NotFoundPage() {
  return (
    <div className="container">
      <div
        style={{
          paddingBottom: "20%",
          paddingTop: "20%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <h2>Oops... Page not found.</h2>
        </div>
      </div>
    </div>
  );
}
