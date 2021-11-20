import React from "react";
import "./style.css";

const Loading = () => (
  <div className="loader">
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default Loading;
