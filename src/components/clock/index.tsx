import React from "react";
import clock from "src/images/clock.png";
import "./clock.css";
function Clock() {
  return (
    <div className={"clock"}>
      <img src={clock} />
    </div>
  );
}

export default Clock;
