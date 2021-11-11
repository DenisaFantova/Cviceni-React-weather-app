import React from "react";
import "./style.css";

const Loading = () => {
  return (
      <div className="loader">
    <div class="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    </div>
  );
};

export default Loading;
