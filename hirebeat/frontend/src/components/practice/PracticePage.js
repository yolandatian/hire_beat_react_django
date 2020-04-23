import React from "react";
import { Link } from "react-router-dom";

function PracticePage() {
  let id = "1";
  return (
    <div>
      <h1>This is practice page</h1>
      <Link to={`/bq/${id}`}>bq</Link>
    </div>
  );
}

export default PracticePage;
